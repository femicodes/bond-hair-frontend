import React from 'react';
import { Link } from 'react-router-dom';
import productHeart from '../res/product-heart.svg';
import CardImage from '../res/popular-product.svg';
import './index.scss';

const ProductCard = ({ image, key, text, price }) => {
  const style = {
    backgroundImage: `url(${image || CardImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  };

  return (
    <section key={key} className='product_card'>
      <div style={style} className='product_upper'>
        <div className='sale'>
          <p>Sale</p>
        </div>
        <div className='product_heart'>
          <img src={productHeart} alt='product heart' />
        </div>
      </div>
      <div className='product_bottom'>
        <p className='product_text'>
          <Link to='/ones' style={{ textDecoration: 'none', color: '#000000' }}>
            {text}
          </Link>
        </p>
        <p className='product_price'>${price}</p>
      </div>
    </section>
  );
};

export default ProductCard;
