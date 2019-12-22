import React from 'react';
import Button from '../Button/Button';
import './Jumbotron.scss';

const Jumbotron = () => {
  return (
    <div className='parent_jumbotron'>
      <div className='jumbotron_content'>
        <p className='jumbotron_frontal'>FRONTAL COLLECTION</p>
        <p className='jumbotron_free'>Feel free and <br /> freestyle</p>
        <div className='jumbotron_button'>
          <Button text='Shop Collection' color='white' link='products' />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Jumbotron;
