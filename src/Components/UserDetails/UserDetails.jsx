import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const UserDetails = () => {
  const {userId} = useParams()
  const [friends, setFriends] = useState({})

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setFriends(data))

  }, [])

  return (
    <div>
      <h1>{friends.name}</h1>
      <p>{friends.username}</p>
      <p>{friends.email}</p>
      <p>{friends.phone}</p>
      <p>{friends.website}</p>
      
    </div>
  );
};

export default UserDetails;