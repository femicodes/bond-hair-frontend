import React from 'react';
import Header from '../Header/Header';
import ProductJumbotron from '../ProductJumbotron';
import ItemCount from '../ItemCount';
import ProductCard from '../ProductCard';
import CardImage from '../res/popular-product.svg';
import Footer from '../Footer';

const style = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  paddingLeft: '140px',
  paddingTop: '40px',
  height: 'auto',
};

const Product = () => {
  return (
    <div>
      <Header />
      <ProductJumbotron />
      <ItemCount />
      <div style={style} className='card_layout'>
        <ProductCard image={CardImage} text='Malaysia hair straight' price='200' />
        <ProductCard image={CardImage} text='Malaysia hair straight' price='200' />
        <ProductCard image={CardImage} text='Malaysia hair straight' price='200' />
        <ProductCard image={CardImage} text='Malaysia hair straight' price='200' />
        <ProductCard image={CardImage} text='Malaysia hair straight' price='200' />
        <ProductCard image={CardImage} text='Malaysia hair straight' price='200' />
      </div>
      <Footer />
    </div>
  );
};

export default Product;