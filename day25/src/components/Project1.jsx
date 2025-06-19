import React, { useState, useMemo } from 'react';

const Project1 = () => {
  const [query, setQuery] = useState('');
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Watermelon'];

  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div>
      <h2>Project 1: List Filtering</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project1;
