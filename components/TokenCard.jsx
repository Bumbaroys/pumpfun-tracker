// File: components/TokenCard.jsx

export default function TokenCard({ token }) {
  return (
    <div className="bg-gray-900 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700">
      <h2 className="text-xl font-semibold mb-2 text-teal-400">{token.name}</h2>
      <p className="text-sm text-gray-300 mb-1">
        💰 <strong>Price:</strong> {token.price}
      </p>
      <p className="text-sm text-gray-300 mb-1">
        📈 <strong>Volume:</strong> {token.volume24h}
      </p>
      <p className="text-sm text-gray-300 mb-1">
        🧠 <strong>Narrative:</strong> {token.narrative || 'Unknown'}
      </p>
      <p className="text-sm text-gray-300 mb-1">
        🧬 <strong>Tags:</strong> {token.tags?.join(', ') || 'None'}
      </p>
      <p className={`text-sm font-semibold ${token.devHealth === 'healthy' ? 'text-green-400' : 'text-red-400'}`}>
        👨‍💻 Dev Wallet: {token.devHealth || 'unknown'}
      </p>
    </div>
  );
}
