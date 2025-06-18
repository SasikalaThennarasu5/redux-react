// File: src/components/Task11.jsx
import { useEffect, useState } from 'react';

// Task 11: Async Error Handling in useEffect
const Task11 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        throw new Error('Async fetch error in Task11');
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Task 11: Async Error Handling</h2>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{data}</p>}
    </div>
  );
};

export default Task11;