import {
  SET_CURRENT_PRODUCT,
  REMOVE_CURRENT_PRODUCT,
  SET_PRODUCTS,
  ADD_TO_CART
} from '../types';

const initialState = {
  products: {},
  currentProduct: null,
  cart: [],
  loading: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false
      };
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: payload,
        loading: false
      };
    case REMOVE_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: null,
        loading: false
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          {
            product: payload.product,
            variant: payload.variant,
            qty: payload.qty
          },
          ...state.cart
        ],
        loading: false
      };
    default:
      return state;
  }
};
