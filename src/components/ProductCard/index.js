import React from 'react';
import productHeart from '../res/product-heart.svg';
import './index.scss';

const ProductCard = ({ image, text, price }) => {
  const style = {
    width: '245.68px',
    height: '269.37px'
  };

  return (
    <section className='product_card'>
      <div className='product_upper'>
        <div className='sale'>
          <p>Sale</p>
        </div>
        <div className='product_heart'>
          <img src={productHeart} alt='product heart' />
        </div>
      </div>
      <img style={style} src={image} alt='productCard' />
      <p className='product_text'>{text}</p>
      <p className='product_price'>${price}</p>
    </section>
  );
};

export default ProductCard;
