import { NextRequest, NextResponse } from 'next/server';
import { ethers } from 'ethers';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
const USDT_ABI = ['function balanceOf(address) view returns (uint256)'];

const BSC_RPC = process.env.BSC_RPC || 'https://bsc-dataseed.binance.org/';
const FAUCET_PRIVATE_KEY = process.env.FAUCET_PRIVATE_KEY;
const BNB_TO_SEND = process.env.BNB_TO_SEND || '0.0002';

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
      return NextResponse.json({ error: 'Already claimed' });
    }

    const provider = new ethers.JsonRpcProvider(BSC_RPC);
    const usdtContract = new ethers.Contract(USDT_ADDRESS, USDT_ABI, provider);

    const balance = await usdtContract.balanceOf(address);
    const minUSDT = ethers.parseUnits('1', 18);

    if (balance < minUSDT) {
      return NextResponse.json({ error: 'Not enough USDT' });
    }

    const wallet = new ethers.Wallet(FAUCET_PRIVATE_KEY, provider);

    const tx = await wallet.sendTransaction({
      to: address,
      value: ethers.parseEther(BNB_TO_SEND),
    });

    await tx.wait();

    await redis.set(`claimed:${lowerAddress}`, 'true');

    return NextResponse.json({
      success: true,
      txHash: tx.hash,
    });

  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      { error: error.message || 'Server error' },
      { status: 500 }
    );
  }
}
