import React, { useState, useCallback } from 'react';

const Task9 = () => {
  const [value, setValue] = useState(1);

  const multiplyByTwo = useCallback(() => {
    return value * 2;
  }, [value]);

  return (
    <div>
      <h2>Task 9: useCallback with Dependencies</h2>
      <p>Value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Update</button>
      <p>Double: {multiplyByTwo()}</p>
    </div>
  );
};

export default Task9;
