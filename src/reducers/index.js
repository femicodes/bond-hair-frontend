import React, { useReducer } from 'react';
import { Store } from '../contexts';

const initialState = {
  collections: [],
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COLLECTIONS':
      return { ...state, collections: action.payload };

    case 'FETCH_PRODUCTS':
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  )
};
