import React from 'react';

const Hello = () => {
  console.log('Hello component rendered');
  return <p>Hello Component</p>;
};

export default React.memo(Hello);
