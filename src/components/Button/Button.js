import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, color, link }) => {
  const style = {
    color,
    background: 'transparent',
    padding: '10px',
    border: `1px solid ${color}`,
    width: '228px',
    borderRadius: '50px',
    fontSize: '25px',
    fontWeight: '400',
    fontFamily: 'Gilroy, sans-serif',
    textAlign: 'center',
    outline: 'none',
    cursor: 'pointer',
  };

  const buttonLink = `/${link === undefined ? 'products' : link}`;

  return (
    <Link to={buttonLink} >
      <button
        style={style}>
        {text}
      </button>
    </Link>
  );
};


export default Button;
