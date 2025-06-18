// File: src/components/Project3.jsx
import { useState } from 'react';

// Mini Project 3: Form Submission Error
const Project3 = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Name is required!');
    } else {
      setError(null);
      alert(`Submitted: ${name}`);
      setName('');
    }
  };

  return (
    <div>
      <h2>Project 3: Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Project3;