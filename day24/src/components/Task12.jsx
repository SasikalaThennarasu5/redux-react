// File: src/components/Task12.jsx
import Task3 from './Task3';
import ErrorBoundary from './ErrorBoundary';

// Task 12: Reusable Error Boundary Usage
const Task12 = () => {
  return (
    <ErrorBoundary>
      <h2>Task 12: Reusable Error Boundary</h2>
      <Task3 />
    </ErrorBoundary>
  );
};

export default Task12;