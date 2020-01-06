import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Product from '../components/Product';
import { StoreProvider } from '../reducers';

const AllProducts = () => {
  return (
    <StoreProvider>
      <ToastProvider>
        <Product />
      </ToastProvider>
    </StoreProvider>
  );
};

export default AllProducts;
