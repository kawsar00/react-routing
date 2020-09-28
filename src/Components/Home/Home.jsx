import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import User from '../User/User';

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>User Length: {users.length}</h1>
      {
        users.map(user => <User user={user}></User>)
      }
    </div>
  );
};

export default Home;