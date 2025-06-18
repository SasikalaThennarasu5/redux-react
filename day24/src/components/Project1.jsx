// File: src/components/Project1.jsx
import { useState } from 'react';

// Mini Project 1: Error Boundary with Counter
const Project1 = () => {
  const [count, setCount] = useState(0);

  if (count === 5) {
    throw new Error('Counter crashed at 5');
  }

  return (
    <div>
      <h2>Project 1: Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Project1;