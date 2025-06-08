// Button.jsx
export default function Button({ label, onClick, className = '' }) {
  return (
    <button
      onClick={() => onClick(label)}
      className={`text-xl font-semibold p-4 rounded-xl transition-all shadow hover:shadow-md bg-gray-100 hover:bg-gray-200 ${className}`}
    >
      {label}
    </button>
  );
}
