import React, { useState } from 'react';

const Task11 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Task 11: Profiling (Check in React DevTools Profiler)</h2>
      <button onClick={() => setCount(count + 1)}>Render</button>
      <p>Render Count: {count}</p>
    </div>
  );
};

export default Task11;
