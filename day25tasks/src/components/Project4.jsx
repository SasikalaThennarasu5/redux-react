import React, { useState, useMemo } from 'react';

const expensiveCalculation = (num) => {
  console.log('Running expensive calculation...');
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num;
  }
  return result;
};

const Project4 = () => {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState('');

  const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h2>Project 4: Expensive Calculation App</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <input
        type="text"
        value={text}
        placeholder="Unrelated input"
        onChange={(e) => setText(e.target.value)}
      />
      <p>Calculated: {calculatedValue}</p>
    </div>
  );
};

export default Project4;
