import React, { useState, useMemo } from 'react';

const suggestions = [
  'React', 'Redux', 'JavaScript', 'TypeScript',
  'Node', 'Express', 'MongoDB', 'GraphQL',
  'HTML', 'CSS', 'Tailwind', 'Bootstrap',
];

const Project3 = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSuggestions = useMemo(() => {
    return suggestions.filter(s =>
      s.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div>
      <h2>Project 3: Search Suggestion App</h2>
      <input
        type="text"
        placeholder="Start typing..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredSuggestions.map((sug, index) => (
          <li key={index}>{sug}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project3;
