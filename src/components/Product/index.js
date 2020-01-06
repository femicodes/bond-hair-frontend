import React, { useContext, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import Header from '../Header/Header';
import ProductJumbotron from '../ProductJumbotron';
import ItemCount from '../ItemCount';
import ProductCard from '../ProductCard';
import Footer from '../Footer';
import { Store } from '../../contexts';
import { fetchProducts } from '../../actions';

const style = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  paddingLeft: '40px',
  paddingTop: '40px',
  height: 'auto',
  width: 'auto'
};

const Product = () => {
  const { state, dispatch } = useContext(Store);
  const { addToast } = useToasts();
  const { products } = state;

  useEffect(() => {
    try {
      fetchProducts(dispatch);
    } catch (error) {
      addToast(error.message, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }, [dispatch, addToast]);
  return (
    <div>
      {console.log(products)}
      <Header />
      <ProductJumbotron />
      <ItemCount />
      <div style={style} className='card_layout'>
        {products.map(product => {
          return (
            <ProductCard key={product._id} image={product.hairPhoto} text={product.name} price={product.price} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Product;