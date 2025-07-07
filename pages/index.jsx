// File: pages/index.jsx

import { useEffect, useState } from 'react';
import TokenCard from '../components/TokenCard';

export default function Home() {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tokens')
      .then((res) => res.json())
      .then((data) => {
        setTokens(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center">🚀 Final Meme Coins Tracker</h1>
      {loading ? (
        <p className="text-center">Loading tokens...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tokens.map((token) => (
            <TokenCard key={token.address} token={token} />
          ))}
        </div>
      )}
    </div>
  );
}
