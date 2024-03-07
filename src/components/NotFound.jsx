import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <div>
      <Link to="/first-page">Click here to continue to the website</Link>
      </div>
    </div>
  );
};

export default NotFound;