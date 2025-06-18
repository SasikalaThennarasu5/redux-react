// File: src/components/Project2.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

// Mini Project 2: API Fetch Error Boundary
const Project2 = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/INVALID_ENDPOINT')
      .then(res => setUser(res.data))
      .catch(err => setError('Failed to fetch user data'));
  }, []);

  return (
    <div>
      <h2>Project 2: Fetch User Data</h2>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
};

export default Project2;