import React from 'react';
import Button from '../Button/Button';
import './index.scss';

const MidJumbotron = () => {
  return (
    <div className='parent_mid__jumbotron'>
      <div className='mid_jumbotron__content'>
        <div>Feel Confident with</div>
        <div>The Bond Hair</div>
        <div className='mid_button'>
          <Button text='Shop Bond Hair' color='white' />
        </div>
      </div>
    </div>
  );
};

export default MidJumbotron;
