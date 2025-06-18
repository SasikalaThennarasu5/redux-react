// File: src/components/Task10.jsx
import { useState } from 'react';

// Task 10: Error Logging (handled in ErrorBoundary.jsx)
const Task10 = () => {
  const [throwErr, setThrowErr] = useState(false);

  if (throwErr) {
    throw new Error('This error will be logged by ErrorBoundary');
  }

  return (
    <div>
      <h2>Task 10: Log Errors to Console</h2>
      <button onClick={() => setThrowErr(true)}>Trigger Logging Error</button>
    </div>
  );
};

export default Task10;