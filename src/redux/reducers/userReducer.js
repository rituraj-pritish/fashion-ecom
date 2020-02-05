import ss from 'string-similarity';

import {
  SET_CURRENT_PRODUCT,
  REMOVE_CURRENT_PRODUCT,
  SET_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  SET_SEARCH,
  REMOVE_SEARCH,
  SIGNOUT,
  APPLY_FILTER,
  RESET_FILTER,
  SET_CURRENT_PRODUCTS,
  SET_OVERLAY,
  UPDATE_FILTERED
} from '../types';
import filter from '../../helpers/filter';

const initialState = {
  products: {},
  currentProduct: null,
  currentProducts: [],
  searching: false,
  filtering: false,
  showOverlay: false,
  cart: [],
  wishlist: [],
  filtered: [],
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
      const alreadyAdded = state.cart.find(
        item => item.product === payload.product
      );

      if (alreadyAdded) return { ...state };
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
    case UPDATE_CART:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.product === payload.product) {
            return { ...item, qty: payload.qty };
          }
          return item;
        }),
        loading: false
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== payload),
        loading: false
      };
    case ADD_TO_WISHLIST:
      if (state.wishlist.find(item => item === payload)) return state;
      return {
        ...state,
        wishlist: [
          ...state.wishlist,
          { product: payload.product, variant: payload.variant }
        ],
        loading: false
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.product.id !== payload),
        loading: false
      };
    case SET_SEARCH:
      return {
        ...state,
        filtered: Object.values(state.products)
          .flat()
          .filter(item => {
            if (
              ss.compareTwoStrings(item.name, payload) > 0.25 ||
              ss.compareTwoStrings(item.brand, payload) > 0.25 ||
              ss.compareTwoStrings(item.category, payload) > 0.25
            ) {
              return item;
            }
            return null;
          }),
        searching: true,
        loading: false
      };
    case REMOVE_SEARCH:
      return {
        ...state,
        filtered: [],
        searching: false,
        loading: false
      };
    case SET_CURRENT_PRODUCTS:
      return {
        ...state,
        currentProducts: payload,
        loading: false
      };
    case SIGNOUT:
      return {
        ...state,
        wishlist: [],
        filtered: [],
        loading: false
      };
    case APPLY_FILTER:
      let products;
      if (state.searching && !state.filtering) {
        products = state.filtered;
      } else {
        products = state.currentProducts;
      }

      if (payload.category === 'sort' && payload.subCategory === 'all') {
        return {
          ...state,
          filtered: state.currentProducts,
          filtering: true,
          loading: false
        };
      }

      const filteredProducts = filter(
        products,
        payload.category,
        payload.subCategory
      );
      return {
        ...state,
        filtered: filteredProducts,
        filtering: true,
        loading: false
      };
    case UPDATE_FILTERED:
      return {
        ...state,
        filtered: payload,
        loading: false
      };
    case RESET_FILTER:
      return {
        ...state,
        filtered: [],
        filtering: false,
        loading: false
      };
    case SET_OVERLAY:
      return {
        ...state,
        showOverlay: payload,
        loading: false
      };
    default:
      return state;
  }
};
