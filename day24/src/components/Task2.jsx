import { useState } from 'react';

// Task 2: Basic Error Boundary Setup using Hook (custom logic, not native React boundary)
export const useErrorBoundary = () => {
  const [error, setError] = useState(null);
  const resetError = () => setError(null);
  return { error, setError, resetError };
};

const Task2 = () => {
  const { error, setError, resetError } = useErrorBoundary();

  if (error) {
    return (
      <div>
        <h2>Error Occurred</h2>
        <p>{error.message}</p>
        <button onClick={resetError}>Try Again</button>
      </div>
    );
  }

  const handleError = () => {
    setError(new Error('Manually triggered error using hook'));
  };

  return <button onClick={handleError}>Trigger Hook Error</button>;
};

export default Task2;