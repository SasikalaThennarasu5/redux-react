import React from 'react';

// Task 6: Try-Catch in Functional Component Event
const Task6 = () => {
  const handleClick = () => {
    try {
      throw new Error('Synchronous error caught using try-catch');
    } catch (error) {
      alert(`Caught error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Task 6: Try-Catch in Event Handler</h2>
      <button onClick={handleClick}>Throw Synchronous Error</button>
    </div>
  );
};

export default Task6;