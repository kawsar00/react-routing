import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const User = (props) => {
  const {name, email, id} = props.user
  
  //code for button
  const history = useHistory();
  function handleClick(userId) {
    history.push(`/user/${userId}`); //either we can use direct (id) from destructing object, but it is not best practice. that's why we use (userId) parameter  for handleClick function and we get it from button via onclick (id).
  }

  const userStyle = {
    border: '1px solid gold',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '10px'
  }
  return (
    <div style={userStyle}> 
      <h2>{name}</h2>
      <p>Email: {email}</p>
  <Link to={`/user/${id}`}><p>Click for details {id}</p></Link>
  <button onClick={()=> {handleClick(id)}}>Click Me</button>
      
    </div>
  );
};

export default User;