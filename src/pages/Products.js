import React from 'react';
import Header from '../components/Header/Header';
import ProductJumbotron from '../components/ProductJumbotron';
import ItemCount from '../components/ItemCount';

const Product = () => {
  return (
    <div>
      <Header />
      <ProductJumbotron />
      <ItemCount />
    </div>
  );
};

export default Product;
