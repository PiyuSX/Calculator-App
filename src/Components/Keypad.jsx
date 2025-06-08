// Keypad.jsx
import Button from './Button'

const keys = [
  ['C', '←', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=', '']
];

export default function Keypad({ onButtonClick }) {
  return (
    <div className="grid grid-cols-4 gap-3 mt-4">
      {keys.flat().map((key, idx) => (
        key !== '' ? (
          <Button
            key={idx}
            label={key}
            onClick={onButtonClick}
            className={
              key === '=' ? 'bg-blue-500 text-white hover:bg-blue-600 col-span-1' :
              key === 'C' ? 'bg-red-400 text-white hover:bg-red-500' :
              key === '←' ? 'bg-yellow-400 hover:bg-yellow-500' :
              ''
            }
          />
        ) : <div key={idx} />
      ))}
    </div>
  );
}
