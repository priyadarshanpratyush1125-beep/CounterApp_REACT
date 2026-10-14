
import { useState } from 'react';

const CounterApp = () => {
  const [initialValue, setInitialValue] = useState('');
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  function startCounter() {
    if (initialValue.trim() === '') {
      return;
    }

    const value = Number(initialValue);

    if (!Number.isFinite(value)) {
      return;
    }

    setCount(value);
    setStarted(true);
  }

  function inc() {
    setCount(prev => prev + 1);
  }

  function dec() {
    setCount(prev => prev - 1);
  }

  return (
    <div style={{
      border: '2px solid red',
      padding: '20px',
      width: '300px',
      margin: 'auto'
    }}>
      <h3>Counter - V3</h3>

      <input
        type="number"
        value={initialValue}
        onChange={e => setInitialValue(e.target.value)}
        placeholder="Enter initial value"
      />

      <button onClick={startCounter}>Start</button>

      {started && (
        <>
          <h2>{count}</h2>
          <button onClick={inc}>ADD+</button>
          <button onClick={dec}>SUB-</button>
        </>
      )}
    </div>
  );
};

export default CounterApp;
