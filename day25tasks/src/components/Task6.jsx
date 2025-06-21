import React, { useState, useMemo } from 'react';

const Task6 = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1e7; i++) {} // simulate heavy task
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>Task 6: useMemo Basic</h2>
      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Task6;
