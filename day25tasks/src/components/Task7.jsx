import React, { useState, useMemo } from 'react';

const Task7 = () => {
  const [num, setNum] = useState(1);
  const [text, setText] = useState('');

  const squared = useMemo(() => {
    console.log('Recomputing square...');
    return num * num;
  }, [num]);

  return (
    <div>
      <h2>Task 7: useMemo with Dependencies</h2>
      <p>Squared: {squared}</p>
      <input type="number" value={num} onChange={(e) => setNum(+e.target.value)} />
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Unrelated text input' />
    </div>
  );
};

export default Task7;
