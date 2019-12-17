import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Page doesn't exist,
         <Link to='/'>
          GO BACK HOME
        </Link>
      </h1>
    </div>
  );
};

export default NotFound;
