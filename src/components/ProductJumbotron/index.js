import React from 'react';
import productJumbotron from '../res/product-jumbotron.svg';
import productLine from '../res/product-line.svg'
import './index.scss';

const ProductJumbotron = ({ text, image }) => {

  const style = {
    backgroundImage: `url(${productJumbotron || image})`,
    width: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '356px',
  };

  return (
    <div style={style} className='product_jumbotron'>
      <img src={productLine} alt='product line' />
      <p>{'All Products' || text}</p>
    </div>
  );
};

export default ProductJumbotron;
