import { store } from 'react-notifications-component';

import {
  SET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  REMOVE_CURRENT_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
  REMOVE_FROM_WISHLIST,
  ADD_TO_WISHLIST
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

export const addToWishlist = product => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product
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
