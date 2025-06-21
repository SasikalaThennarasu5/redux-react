import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick }) => {
  console.log('Button rendered');
  return <button onClick={onClick}>Increment</button>;
});

const Project2 = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Project 2: Counter with Memoized Button</h2>
      <p>Count: {count}</p>
      <Button onClick={increment} />
    </div>
  );
};

export default Project2;
