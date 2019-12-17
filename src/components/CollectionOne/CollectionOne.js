import React from 'react';
import Button from '../Button/Button';
import Image from '../res/collection-one.svg';
import './CollectionOne.scss';

const CollectionOne = () => {
  return (
    <div className='parent_collection__one'>
      <div className='collection_one__image'>
        <img src={Image} alt='collection_one' />
      </div>
      <div className='collection_one__text'>
        <p className='collection_one__frontal'>FRONTAL COLLECTION</p>
        <hr />
        <p className='collection_one__arrival'>New arrivals</p>
        <Button className='collection_one__button' color='black' text='Shop Collection' />
      </div>
    </div>
  );
};

export default CollectionOne;
