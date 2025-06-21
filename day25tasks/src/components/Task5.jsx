import React from 'react';

const Greeting = ({ name }) => {
  console.log('Greeting component rendered');
  return <p>Hello, {name}</p>;
};

export default React.memo(Greeting);
