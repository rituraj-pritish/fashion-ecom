import produce from "immer";

// types

const ADD_TO_WISHLIST_REQUEST = 'ADD_TO_WISHLIST_REQUEST'
const ADD_TO_WISHLIST_SUCCESS = 'ADD_TO_WISHLIST_SUCCESS'
const ADD_TO_WISHLIST_FAILURE = 'ADD_TO_WISHLIST_FAILURE'

const REMOVE_FROM_WISHLIST_REQUEST = 'REMOVE_FROM_WISHLIST_REQUEST'
const REMOVE_FROM_WISHLIST_SUCCESS = 'REMOVE_FROM_WISHLIST_SUCCESS'
const REMOVE_FROM_WISHLIST_FAILURE = 'REMOVE_FROM_WISHLIST_FAILURE'

// action creators

export const addToWishlist = () => {

}

export const removeFromWishlist = () => {
  
}

const initialState = {
  items: [],
  isLoading: false
}

export default (state = initialState, {type, payload}) =>
  (produce(state, draft => {
    switch(type) {
      
    }
  }))