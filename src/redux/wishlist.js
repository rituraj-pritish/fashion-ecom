import produce from "immer";

// types

const SET_WISHLIST_PRODUCT_IDS = 'SET_WISHLIST_PRODUCT_IDS'

const ADD_TO_WISHLIST_REQUEST = 'ADD_TO_WISHLIST_REQUEST'
const ADD_TO_WISHLIST_SUCCESS = 'ADD_TO_WISHLIST_SUCCESS'
const ADD_TO_WISHLIST_FAILURE = 'ADD_TO_WISHLIST_FAILURE'

const REMOVE_FROM_WISHLIST_REQUEST = 'REMOVE_FROM_WISHLIST_REQUEST'
const REMOVE_FROM_WISHLIST_SUCCESS = 'REMOVE_FROM_WISHLIST_SUCCESS'
const REMOVE_FROM_WISHLIST_FAILURE = 'REMOVE_FROM_WISHLIST_FAILURE'

// action creators

export const setWishlistIds = (ids) => ({
  type: SET_WISHLIST_PRODUCT_IDS,
  payload: ids
})

export const addToWishlist = () => {

}

export const removeFromWishlist = () => {
  
}

const initialState = {
  itemIds: [],
  items: [],
  isLoading: false
}

export default (state = initialState, {type, payload}) =>
  (produce(state, draft => {
    // eslint-disable-next-line
    switch(type) {
      case SET_WISHLIST_PRODUCT_IDS:
        draft.itemIds = payload
        break
    }
  }))