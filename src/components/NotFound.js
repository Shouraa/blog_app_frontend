import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div>
      {' '}
      <h1>NotFound </h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
