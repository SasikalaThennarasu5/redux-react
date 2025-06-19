import React from 'react';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Project1 />
      <hr />
      <Project2 />
      <hr />
      <Project3 />
      <hr />
      <Project4 />
    </div>
  );
};

export default App;
