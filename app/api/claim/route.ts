import { NextRequest, NextResponse } from 'next/server';
import { ethers } from 'ethers';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

const BSC_RPC = process.env.BSC_RPC || 'https://rpc.ankr.com/bsc';
const FAUCET_PRIVATE_KEY = process.env.FAUCET_PRIVATE_KEY;
const BNB_TO_SEND = '0.0002';

// 🔥 NEW: USDT LIMIT (you can change anytime)
const USDT_LIMIT = 1;

// BSC USDT contract
const USDT_CONTRACT = '0x55d398326f99059fF775485246999027B3197955';

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)"
];

export async function POST(req: NextRequest) {
  try {
    const { address } = await req.json();

    if (!address || !ethers.isAddress(address)) {
      return NextResponse.json({ error: 'Invalid address' }, { status: 400 });
    }

    if (!FAUCET_PRIVATE_KEY) {
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
    }

    const lowerAddress = address.toLowerCase();

    // ===============================
    // 🔥 NEW FUNCTION: USDT CHECK
    // ===============================
    const provider = new ethers.JsonRpcProvider(BSC_RPC);

    const usdtContract = new ethers.Contract(
      USDT_CONTRACT,
      ERC20_ABI,
      provider
    );

    const rawUsdt = await usdtContract.balanceOf(address);

    const usdtBalance = Number(
      ethers.formatUnits(rawUsdt, 18)
    );

    // 🚨 CONDITION: block if below limit
    if (usdtBalance < USDT_LIMIT) {
      return NextResponse.json({
        success: false,
        error: 'USDT balance is below limit. BNB not sent.',
        usdtBalance,
        required: USDT_LIMIT
      }, { status: 400 });
    }

    // ===============================
    // 🔥 ORIGINAL LOGIC (UNCHANGED)
    // ===============================

    const alreadyClaimed = await redis.get(`claimed:${lowerAddress}`);
    if (alreadyClaimed) {
      return NextResponse.json({ error: 'Already claimed today' }, { status: 400 });
    }

    const wallet = new ethers.Wallet(FAUCET_PRIVATE_KEY, provider);

    const txRequest = {
      to: address,
      value: ethers.parseEther(BNB_TO_SEND),
      gasLimit: 21000,
      gasPrice: ethers.parseUnits('3', 'gwei'),
    };

    const sentTx = await wallet.sendTransaction(txRequest);
    await sentTx.wait();

    await redis.set(`claimed:${lowerAddress}`, 'true', { ex: 86400 });

    return NextResponse.json({
      success: true,
      message: `0.0002 BNB sent successfully`,
      txHash: sentTx.hash,
    });

  } catch (error: any) {
    console.error('API ERROR:', error);

    if (error.code === 'INSUFFICIENT_FUNDS' || error.message?.includes('insufficient')) {
      return NextResponse.json(
        { error: 'Faucet is low on BNB. Please try again later.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: 'Transaction failed. Try again.' },
      { status: 500 }
    );
  }
}
