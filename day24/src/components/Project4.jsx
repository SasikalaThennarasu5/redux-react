// File: src/components/Project4.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

// Mini Project 4: Random Joke Generator with Error Handling
const Project4 = () => {
  const [joke, setJoke] = useState('');
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    try {
      const res = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(`${res.data.setup} - ${res.data.punchline}`);
      setError(null);
    } catch (err) {
      setError('Failed to load joke');
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Project 4: Random Joke Generator</h2>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>{joke}</p>}
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  );
};

export default Project4;