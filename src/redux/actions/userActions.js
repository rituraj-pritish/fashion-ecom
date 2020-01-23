import { store } from 'react-notifications-component';

import {
  SET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  REMOVE_CURRENT_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
  REMOVE_FROM_WISHLIST,
  ADD_TO_WISHLIST,
  SET_SEARCH,
  REMOVE_SEARCH,
  APPLY_FILTER,
  RESET_FILTER,
  SET_CURRENT_PRODUCTS
} from '../types';
import PRODUCTS from '../../data/PRODUCTS';

export const getProducts = () => async dispatch => {
  const products = PRODUCTS;

  dispatch({ type: SET_PRODUCTS, payload: products });
};

export const getProduct = (category, id) => async dispatch => {
  const product = PRODUCTS[category].find(item => item.id.toString() === id);
  dispatch({ type: SET_CURRENT_PRODUCT, payload: product });
};

export const removeProduct = () => async dispatch => {
  dispatch({ type: REMOVE_CURRENT_PRODUCT });
};

export const addToCart = (product, variant, qty) => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: { product, variant, qty } });
};

export const updateCart = (product, qty) => {
  return {
    type: UPDATE_CART,
    payload: { product, qty }
  };
};

export const removeFromCart = product => {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  };
};

export const addToWishlist = (product, variant) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: { product, variant }
  };
};

export const removeFromWishlist = id => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: id
  };
};

export const setAlert = (message, type) => {
  let title;
  switch (type) {
    case 'danger':
      title = 'Error';
      break;
    case 'success':
      title = 'Success';
      break;
    default:
      title = '';
  }
  const notification = {
    title: title,
    insert: 'top',
    container: 'bottom-center',
    dismiss: {
      duration: 2000
    },
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut']
  };

  store.addNotification({
    ...notification,
    message: message,
    type: type
  });

  return { type: 'set_alert' };
};

export const search = query => async dispatch => {
  dispatch({ type: SET_SEARCH, payload: query });
};

export const removeSearch = () => async dispatch => {
  dispatch({ type: REMOVE_SEARCH });
};

export const applyFilter = (category, subCategory) => async dispatch => {
  dispatch({ type: APPLY_FILTER, payload: { category, subCategory } });
};

export const resetFilter = () => async dispatch => {
  dispatch({ type: RESET_FILTER });
};

export const setCurrentProducts = products => async dispatch => {
  dispatch({ type: SET_CURRENT_PRODUCTS, payload: products });
};
