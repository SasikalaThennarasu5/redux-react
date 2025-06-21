import React, { useState, useCallback } from 'react';

const Task10 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Task 10: Avoid Inline Functions</h2>
      <button onClick={increment}>Click</button>
      <p>Clicked: {count}</p>
    </div>
  );
};

export default Task10;
