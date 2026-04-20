import { NextRequest, NextResponse } from 'next/server';
import { ethers } from 'ethers';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
const BSC_RPC = process.env.BSC_RPC || 'https://rpc.ankr.com/bsc';
const FAUCET_PRIVATE_KEY = process.env.FAUCET_PRIVATE_KEY;
const BNB_TO_SEND = process.env.BNB_TO_SEND || '0.0002';   // yeh theek hai

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

    // Anti-spam
    const alreadyClaimed = await redis.get(`claimed:${lowerAddress}`);
    if (alreadyClaimed) {
      return NextResponse.json({ error: 'Already claimed today' }, { status: 400 });
    }

    const provider = new ethers.JsonRpcProvider(BSC_RPC);
    const wallet = new ethers.Wallet(FAUCET_PRIVATE_KEY, provider);

    // Better gas handling
    const txRequest = {
      to: address,
      value: ethers.parseEther(BNB_TO_SEND),
      gasLimit: 25000,        // 21000 se thoda zyada rakho (safe)
    };

    // Gas estimate + send
    const gasEstimate = await provider.estimateGas(txRequest);
    const finalTx = {
      ...txRequest,
      gasLimit: (gasEstimate * 120n) / 100n,   // 20% extra safety
    };

    const sentTx = await wallet.sendTransaction(finalTx);
    await sentTx.wait();

    // Mark as claimed (24 hours)
    await redis.set(`claimed:${lowerAddress}`, 'true', { ex: 86400 });

    return NextResponse.json({
      success: true,
      message: `0.0002 BNB sent successfully`,
      txHash: sentTx.hash,
    });

  } catch (error: any) {
    console.error('API ERROR:', error);

    // Better error message for insufficient funds
    if (error.code === 'INSUFFICIENT_FUNDS' || error.message.includes('insufficient funds')) {
      return NextResponse.json(
        { error: 'Faucet is out of BNB. Please try again later.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
