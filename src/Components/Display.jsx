// Display.jsx
export default function Display({ expression, result }) {
  return (
    <div className="bg-black text-white rounded-xl p-4 mb-2">
      <div className="text-right text-lg opacity-70">{expression || '0'}</div>
      <div className="text-right text-2xl font-bold">{result}</div>
    </div>
  );
}
