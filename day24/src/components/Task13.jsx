// File: src/components/Task13.jsx
import ErrorBoundary from './ErrorBoundary';
import Task3 from './Task3';
import Task5 from './Task5';

// Task 13: Multiple Error Boundaries
const Task13 = () => {
  return (
    <div>
      <h2>Task 13: Multiple Error Boundaries</h2>
      <ErrorBoundary>
        <Task3 />
      </ErrorBoundary>
      <ErrorBoundary>
        <Task5 />
      </ErrorBoundary>
    </div>
  );
};

export default Task13;
