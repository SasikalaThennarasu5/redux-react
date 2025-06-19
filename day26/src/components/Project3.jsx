import React, { useEffect, useState } from 'react';

const Project3 = () => {
  const [user, setUser] = useState(null);
  const userId = 1; // changeable ID

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Project 3: User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Website:</strong> {user.website}</p>
    </div>
  );
};

export default Project3;
