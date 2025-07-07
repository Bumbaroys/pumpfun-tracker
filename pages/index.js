// pages/index.js

import Head from 'next/head';
import TokenCard from '../components/TokenCard';
import tokens from '../lib/getFinalTokens';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>PumpFun Token Tracker</title>
      </Head>
      <main className="min-h-screen bg-black text-white p-6">
        <h1 className="text-3xl font-bold text-teal-400 mb-4">🚀 PumpFun Trending Tokens</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tokens.map((token, idx) => (
            <TokenCard key={idx} token={token} />
          ))}
        </div>
      </main>
    </>
  );
}
