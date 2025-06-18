import { useState } from 'react';

// Task 5: Custom Error Message
const Task5 = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('Custom error message from Task5');
  }

  return (
    <div>
      <h2>Task 5: Custom Error Message</h2>
      <button onClick={() => setShouldThrow(true)}>Cause Error</button>
    </div>
  );
};

export default Task5;
