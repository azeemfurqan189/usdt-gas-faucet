'use client';

import { useState } from 'react';
import { ethers } from 'ethers';

export default function Home() {
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');
  const [txHash, setTxHash] = useState('');
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Trust Wallet ya MetaMask install karo!');
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();
      setAddress(userAddress);
      setStatus('Wallet connected!');
    } catch (err) {
      console.error(err);
    }
  };

  const claimGas = async () => {
    if (!address) return alert('Pehle wallet connect karo');
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch('/api/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Kuch galat hua');

      setTxHash(data.txHash);
      setStatus('✅ Gas fee successfully send ho gaya!');
    } catch (err: any) {
      setStatus('❌ ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-2xl shadow-2xl text-center">
        <h1 className="text-3xl font-bold mb-2">USDT Holder Gas Faucet</h1>
        <p className="text-gray-400 mb-8">1 USDT+ wale ko 0.005 BNB gas milega (sirf 1 baar)</p>

        {!address ? (
          <button
            onClick={connectWallet}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-6 rounded-xl text-lg"
          >
            Connect Trust Wallet
          </button>
        ) : (
          <>
            <div className="bg-gray-700 p-4 rounded-xl mb-6 text-left">
              <p className="text-sm text-gray-400">Connected Address:</p>
              <p className="font-mono text-yellow-400 break-all">{address}</p>
            </div>

            <button
              onClick={claimGas}
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 font-bold py-4 px-6 rounded-xl text-lg"
            >
              {loading ? 'Checking + Sending...' : 'Claim BNB Gas Fee'}
            </button>
          </>
        )}

        {status && <p className="mt-6 text-lg">{status}</p>}
        {txHash && (
          <a
            href={`https://bscscan.com/tx/${txHash}`}
            target="_blank"
            className="text-blue-400 underline block mt-4"
          >
            View Transaction on BscScan →
          </a>
        )}
      </div>
    </div>
  );
}