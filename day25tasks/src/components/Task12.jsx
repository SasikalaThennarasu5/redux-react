import React from 'react';

const pureAdd = (a, b) => a + b;

const Task12 = () => {
  const result = pureAdd(2, 3);

  return (
    <div>
      <h2>Task 12: Pure Functions</h2>
      <p>2 + 3 = {result}</p>
    </div>
  );
};

export default Task12;
