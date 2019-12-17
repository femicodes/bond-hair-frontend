import React from 'react';
import Button from '../Button/Button';
import Image from '../res/collection-two.svg';
import './CollectionTwo.scss';

const CollectionTwo = () => {
  return (
    <div className='parent_collection__two'>
      <div className='collection_two__text'>
        <p className='collection_two__frontal'>STRAIGHT COLLECTION</p>
        <hr />
        <p className='collection_two__arrival'>New arrivals</p>
        <Button className='collection_two__button' color='black' text='Shop Collection' />
      </div>
      <div className='collection_two__image'>
        <img src={Image} alt='collection_two' />
      </div>
    </div>
  );
};

export default CollectionTwo;
