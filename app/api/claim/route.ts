import { NextRequest, NextResponse } from 'next/server';
import { ethers } from 'ethers';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
const USDT_ABI = [
  'function balanceOf(address) view returns (uint256)'
];

const BSC_RPC =
  process.env.BSC_RPC || 'https://rpc.ankr.com/bsc';

const FAUCET_PRIVATE_KEY = process.env.FAUCET_PRIVATE_KEY;
const BNB_TO_SEND = process.env.BNB_TO_SEND || '0.0002';

export async function POST(req: NextRequest) {
  try {
    const { address } = await req.json();

    // ✅ Validate address
    if (!address || !ethers.isAddress(address)) {
      return NextResponse.json(
        { error: 'Invalid address' },
        { status: 400 }
      );
    }

    // ❌ ENV check
    if (!FAUCET_PRIVATE_KEY) {
      return NextResponse.json(
        { error: 'Server not configured (missing private key)' },
        { status: 500 }
      );
    }

    const lowerAddress = address.toLowerCase();

    // ✅ anti-spam check
    const alreadyClaimed = await redis.get(`claimed:${lowerAddress}`);
    if (alreadyClaimed) {
      return NextResponse.json(
        { error: 'Already claimed' },
        { status: 400 }
      );
    }

    // 🔗 provider
    const provider = new ethers.JsonRpcProvider(BSC_RPC);

    // USDT check
    const usdtContract = new ethers.Contract(
      USDT_ADDRESS,
      USDT_ABI,
      provider
    );

    const balance = await usdtContract.balanceOf(address);
    const minUSDT = ethers.parseUnits('1', 18);

    if (balance < minUSDT) {
      return NextResponse.json(
        { error: 'Not enough USDT (min 1 required)' },
        { status: 400 }
      );
    }

    // 💰 wallet
    const wallet = new ethers.Wallet(
      FAUCET_PRIVATE_KEY,
      provider
    );

    // 🚀 send BNB (FIXED)
    const tx = await wallet.sendTransaction({
      to: address,
      value: ethers.parseEther(BNB_TO_SEND),
      gasLimit: 21000,
    });

    await tx.wait();

    // 🧠 store claim
    await redis.set(`claimed:${lowerAddress}`, 'true', {
      ex: 86400,
    });

    return NextResponse.json({
      success: true,
      message: 'BNB sent successfully',
      txHash: tx.hash,
    });

  } catch (error: any) {
    console.error('API ERROR:', error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          'Internal server error',
      },
      { status: 500 }
    );
  }
}
