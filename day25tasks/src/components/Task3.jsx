import React from 'react';

const Task3 = () => {
  return (
    <div>
      <h2>Task 3: Identify Performance Issues</h2>
      <p>
        Open React Developer Tools → Profiler tab → Click <strong>Record</strong> and interact with your app.
        It shows you which components re-rendered, how long they took, and helps identify
        unnecessary renders. Look for components that frequently re-render without any state or prop changes.
      </p>
    </div>
  );
};

export default Task3;
