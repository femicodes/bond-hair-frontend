import React from 'react';
import productJumbotron from '../res/product-jumbotron.svg';
import productLine from '../res/product-line.svg'
import './index.scss';

const style = {
  backgroundImage: `url(${productJumbotron})`,
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '356px',
  marginLeft: '20px'
};

const ProductJumbotron = ({ text, image }) => {
  return (
    <div style={style} className='product_jumbotron'>
      <img src={productLine || image} alt='product line' />
      <p>{'All Products' || text}</p>
    </div>
  );
};

export default ProductJumbotron;
