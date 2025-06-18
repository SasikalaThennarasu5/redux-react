// File: src/components/Task8.jsx
import React, { useState } from 'react';

// Task 8: Error Boundary with Multiple Children
const Child1 = () => {
  return <h3>Child 1 is fine</h3>;
};

const Child2 = () => {
  const [trigger, setTrigger] = useState(false);
  if (trigger) {
    throw new Error('Child 2 crashed');
  }
  return <button onClick={() => setTrigger(true)}>Crash Child 2</button>;
};

const Task8 = () => {
  return (
    <div>
      <h2>Task 8: Multiple Children</h2>
      <Child1 />
      <Child2 />
    </div>
  );
};

export default Task8;