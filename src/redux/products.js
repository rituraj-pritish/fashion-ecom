import produce from 'immer'
import { db } from 'services/firebase'

// types

const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_FILTER_CRITERIA = 'SET_FILTER_CRITERIA'

const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_CART = 'UPDATE_CART'
const EMPTY_CART = 'EMPTY_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'

// action creators

export const getProducts = () => async dispatch => {
  try {
    await db.collection('products').onSnapshot(data => {
      const products = data.docs.map(doc => doc.data())
      dispatch({ type: SET_PRODUCTS, payload: products })
    })
  } catch (err) {
    console.log(err)
  }
}

export const setFilterCriteria = criteria => ({
  type: SET_FILTER_CRITERIA,
  payload: criteria
})

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item
})

export const updateCart = data => ({
  type: UPDATE_CART,
  payload: data
})

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id
})

export const emptyCart = () => ({
  type: EMPTY_CART
})

export const addToWishlist = item => ({
  type: ADD_TO_WISHLIST,
  payload: item
})

export const removeFromWishlist = id => ({
  type: REMOVE_FROM_WISHLIST,
  payload: id
})

// reducer

const initialState = {
  allProducts: [],
  isLoading: true,
  cart: [],
  wishlist: [],
  filterCriteria: {
    price: 'all',
    brand: 'brand-all',
    sort: 'rating'
  }
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    //eslint-disable-next-line
    switch (type) {
      case SET_PRODUCTS:
        draft.allProducts = payload
        draft.isLoading = false
        break
      case SET_FILTER_CRITERIA:
        draft.filterCriteria = payload
        break
      case ADD_TO_CART: {
        const alreadyAdded = state.cart.find(
          item => item.product === payload.product
        )
        if (!alreadyAdded) draft.cart.push(payload)
        break
      }
      case UPDATE_CART:
        draft.cart.find(item => item.product.id === payload.id).qty =
          payload.qty
        break
      case REMOVE_FROM_CART:
        draft.cart = state.cart.filter(item => item.product.id !== payload)
        break
      case EMPTY_CART:
        draft.cart = []
        break
      case ADD_TO_WISHLIST:
        draft.wishlist.push(payload)
        break
      case REMOVE_FROM_WISHLIST:
        draft.wishlist = state.wishlist.filter(
          item => item.product.id !== payload
        )
        break
    }
  })
