import { useState } from 'react';

// Task 3: Error Simulation Component
const Task3 = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('Simulated Error from Task3');
  }

  return <button onClick={() => setShouldThrow(true)}>Trigger Error</button>;
};

export default Task3;
