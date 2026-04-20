import { NextRequest, NextResponse } from 'next/server';
import { ethers } from 'ethers';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

const BSC_RPC = process.env.BSC_RPC || 'https://rpc.ankr.com/bsc';
const FAUCET_PRIVATE_KEY = process.env.FAUCET_PRIVATE_KEY;
const BNB_TO_SEND = '0.0002';   // fixed

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

    const alreadyClaimed = await redis.get(`claimed:${lowerAddress}`);
    if (alreadyClaimed) {
      return NextResponse.json({ error: 'Already claimed today' }, { status: 400 });
    }

    const provider = new ethers.JsonRpcProvider(BSC_RPC);
    const wallet = new ethers.Wallet(FAUCET_PRIVATE_KEY, provider);

    // ✅ Sabse kam gas wala transaction (BSC ke liye best)
    const txRequest = {
      to: address,
      value: ethers.parseEther(BNB_TO_SEND),
      gasLimit: 21000,
      maxFeePerGas: ethers.parseUnits('5', 'gwei'),      // low fee
      maxPriorityFeePerGas: ethers.parseUnits('1', 'gwei'),
    };

    const sentTx = await wallet.sendTransaction(txRequest);
    await sentTx.wait();

    // 24 hours cooldown
    await redis.set(`claimed:${lowerAddress}`, 'true', { ex: 86400 });

    return NextResponse.json({
      success: true,
      message: `0.0002 BNB sent successfully`,
      txHash: sentTx.hash,
    });

  } catch (error: any) {
    console.error('API ERROR:', error);

    if (error.code === 'INSUFFICIENT_FUNDS' || error.message?.includes('insufficient funds')) {
      return NextResponse.json(
        { error: 'Faucet is low on BNB. Please try again later.' },
        { status: 503 }
      );
    }

    return NextResponse.json({ error: 'Transaction failed. Try again.' }, { status: 500 });
  }
}
