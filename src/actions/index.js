import axios from 'axios';

export const fetchCollections = async (dispatch) => {
  const collections = await axios.get('http://localhost:7000/v1/collections/');
  return dispatch({
    type: 'FETCH_COLLECTIONS',
    payload: collections.data.data,
  });
};

export const fetchProducts = async (dispatch) => {
  const products = await axios.get('http://localhost:7000/v1/products');
  return dispatch({
    type: 'FETCH_PRODUCTS',
    payload: products.data.data,
  });
};
