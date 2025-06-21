import React, { useState, useCallback, useMemo } from 'react';

const ExpensiveComponent = React.memo(({ data }) => {
  console.log('ExpensiveComponent rendered');
  return <p>Data: {data}</p>;
});

const Task13 = () => {
  const [count, setCount] = useState(0);
  const data = useMemo(() => `Count is ${count}`, [count]);

  const handleClick = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div>
      <h2>Task 13: Combine Memoization</h2>
      <button onClick={handleClick}>Increment</button>
      <ExpensiveComponent data={data} />
    </div>
  );
};

export default Task13;
