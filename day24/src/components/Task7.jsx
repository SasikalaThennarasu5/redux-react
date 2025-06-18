
import { useState } from 'react';

// Task 7: Global Error State
const Task7 = () => {
  const [error, setError] = useState(null);

  const handleClick = () => {
    try {
      throw new Error('Global error state captured');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Task 7: Global Error State</h2>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <button onClick={handleClick}>Trigger Error</button>
      )}
    </div>
  );
};

export default Task7;