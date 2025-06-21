import React, { useState, useCallback } from 'react';

const Task8 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Task 8: useCallback Basic</h2>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Task8;
