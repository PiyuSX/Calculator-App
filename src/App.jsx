// App.jsx
import { useState } from 'react'
import Display from  './Components/Display'
import Keypad from './Components/Keypad'

export default function App() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('');

  const handleButtonClick = (key) => {
    if (key === 'C') {
      setExpression('');
      setResult('');
    } else if (key === '←') {
      setExpression(prev => prev.slice(0, -1));
    } else if (key === '=') {
      try {
        // Evaluate expression safely
        const evalResult = eval(expression);
        setResult(evalResult.toString());
        setExpression(evalResult.toString());
      } catch {
        setResult('Error');
      }
    } else {
      setExpression(prev => prev + key);
      setResult('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-xl">
        <Display expression={expression} result={result} />
        <Keypad onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}
