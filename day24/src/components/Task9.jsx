// File: src/components/Task9.jsx
import { useState } from 'react';

// Task 9: Reset Error State
const Task9 = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('Task9 Error!');
  }

  return (
    <div>
      <h2>Task 9: Reset Error State</h2>
      <button onClick={() => setShouldThrow(true)}>Trigger Error</button>
    </div>
  );
};

export default Task9;