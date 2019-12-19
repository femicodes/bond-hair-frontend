import React from 'react';

const Button = ({ text, color }) => {
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
    textAlign: 'center'
  };
  return (
    <button
      style={style}>
      {text}
    </button>
  );
};


export default Button;
