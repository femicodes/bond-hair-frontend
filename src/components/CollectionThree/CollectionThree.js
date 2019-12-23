import React from 'react';
import Button from '../Button/Button';
import Image from '../res/collection-three.svg';
import ProductImage from '../res/popular-product.svg';
import AnotherImage from '../res/product.svg';
import ProductCard from '../ProductCard';
import './CollectionThree.scss';

const CollectionThree = () => {
  return (
    <div className='main_collection_three'>
      <div className='parent_collection__three'>
        <div className='collection_three__image'>
          <img src={Image} alt='collection_three' />
        </div>
        <div className='collection_three__text'>
          <p className='collection_three__frontal'>CURLY COLLECTION</p>
          <hr />
          <p className='collection_three__arrival'>FALL IN LOVE WITH <br /> COLOR</p>
          <div className='collection_three__button'>
            <Button color='black' text='Shop Collection' />
          </div>
        </div>
      </div>
      <div className='popular_products'>
        <p className='popular_products__text'>Popular products</p>
        <div className='product_layout'>
          <ProductCard image={ProductImage} text='Paruvian hair frontal wig' price='100' />
          <ProductCard image={AnotherImage} text='Paruvian hair frontal wig' price='100' />
          <ProductCard image={ProductImage} text='Paruvian hair frontal wig' price='100' />
        </div>
      </div>
      <div className='product_load'>Load More ...</div>
    </div>
  );
};

export default CollectionThree;
