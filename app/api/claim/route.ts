import { NextRequest, NextResponse } from 'next/server';
import { ethers } from 'ethers';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
const USDT_ABI = ['function balanceOf(address) view returns (uint256)'];

const BSC_RPC = process.env.BSC_RPC || 'https://bsc-dataseed.binance.org/';
const FAUCET_PRIVATE_KEY = process.env.FAUCET_PRIVATE_KEY!;
const BNB_TO_SEND = process.env.BNB_TO_SEND || '0.0002';

export async function POST(req: NextRequest) {
  try {
    const { address } = await req.json();
    if (!address || !ethers.isAddress(address)) {
      return NextResponse.json({ error: 'Invalid address' }, { status: 400 });
    }

    const lowerAddress = address.toLowerCase();

    const alreadyClaimed = await redis.get(`claimed:${lowerAddress}`);
    if (alreadyClaimed) {
      return NextResponse.json({ error: 'Aap ko pehle hi gas fee mil chuka hai!' });
    }

    const provider = new ethers.JsonRpcProvider(BSC_RPC);

    const usdtContract = new ethers.Contract(USDT_ADDRESS, USDT_ABI, provider);
    const balance = await usdtContract.balanceOf(address);
    const minUSDT = ethers.parseUnits('1', 18);

    if (balance < minUSDT) {
      return NextResponse.json({ error: 'Aap ke paas kam az kam 1 USDT nahi hai!' });
    }

    const wallet = new ethers.Wallet(FAUCET_PRIVATE_KEY, provider);
    const tx = await wallet.sendTransaction({
      to: address,
      value: ethers.parseEther(BNB_TO_SEND),
    });

    await tx.wait();

    await redis.set(`claimed:${lowerAddress}`, 'true', { ex: 0 }); // permanent

    return NextResponse.json({
      success: true,
      message: 'Gas fee send ho gaya!',
      txHash: tx.hash,
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
  }
}