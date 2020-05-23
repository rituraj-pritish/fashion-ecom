import produce from 'immer'
import { db } from 'services/firebase'

// types

const SET_CART_PRODUCT_IDS = 'SET_CART_PRODUCT_IDS'

const GET_CART_ITEMS_REQUEST = 'GET_CART_ITEMS_REQUEST'
const GET_CART_ITEMS_SUCCESS = 'GET_CART_ITEMS_SUCCESS'
const GET_CART_ITEMS_FAILURE = 'GET_CART_ITEMS_FAILURE'

const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST'
const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS'
const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE'

const UPDATE_CART_REQUEST = 'UPDATE_CART_REQUEST'
const UPDATE_CART_SUCCESS = 'UPDATE_CART_SUCCESS'
const UPDATE_CART_FAILURE = 'UPDATE_CART_FAILURE'

const REMOVE_FROM_CART_REQUEST = 'REMOVE_FROM_CART_REQUEST'
const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS'
const REMOVE_FROM_CART_FAILURE = 'REMOVE_FROM_CART_FAILURE'

// action creators

export const setCartIds = cartItems => ({
  type: SET_CART_PRODUCT_IDS,
  payload: cartItems
})

export const getCartItems = () => async (dispatch, getState) => {
  dispatch({ type: GET_CART_ITEMS_REQUEST })
  const ids = getState().cart.itemIds

  try {
    const promises = ids.map(id => db.collection('products').doc(id).get())
    Promise.all(promises).then(res => {
      const items = res.map(doc => doc.data())
      // dispatch({type: GET_CART_ITEMS_SUCCESS, payload: items})
    } )
  } catch (err) {
    console.log(err)
  }
}

export const addToCart = item => async (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART_REQUEST, payload: item.product.id })
  const addedDate = new Date().toISOString()

  const { auth } = getState()
  const userId = auth.user?.id
  const userCart = auth.user?.cart || []

  try {
    await db
      .collection('users')
      .doc(userId)
      .update({
        cart: [
          {
            product: item.product,
            variant: item.variant,
            quantity: item.quantity,
            date: addedDate
          },
          ...userCart
        ]
      })

    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: { ...item, date: addedDate }
    })
  } catch (err) {
    dispatch({ type: ADD_TO_CART_FAILURE })
    console.log('er', err)
  }
}

export const removeFromCart = id => async (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART_REQUEST, payload: id })
  const { auth, cart } = getState()
  const userId = auth.user?.id
  const userCart = cart.itemIds

  try {
    await db
      .collection('users')
      .doc(userId)
      .update({
        cart: userCart.filter(productId => productId !== id)
      })
    dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: id })
  } catch (err) {
    dispatch({ type: REMOVE_FROM_CART_FAILURE })
    console.log(err)
  }
}

export const updateCart = () => {}

const initialState = {
  itemIds: [],
  items: [],
  isLoading: false,
  inFocus: null
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    //eslint-disable-next-line
    switch (type) {
      case SET_CART_PRODUCT_IDS:
        draft.itemIds = payload
        break

      case GET_CART_ITEMS_REQUEST:
      case ADD_TO_CART_REQUEST:
      case UPDATE_CART_REQUEST:
      case REMOVE_FROM_CART_REQUEST:
        draft.isLoading = true
        draft.inFocus = payload || null
        break

      case GET_CART_ITEMS_FAILURE:
      case ADD_TO_CART_FAILURE:
      case UPDATE_CART_FAILURE:
      case REMOVE_FROM_CART_FAILURE:
        draft.isLoading = false
        draft.inFocus = null
        break

      case GET_CART_ITEMS_SUCCESS:
        draft.items = payload
        draft.isLoading = false
        break

      case ADD_TO_CART_SUCCESS:
        draft.itemIds.unshift(payload.product.id)
        draft.items.unshift(payload)
        draft.isLoading = false
        draft.inFocus = null
        break

      case REMOVE_FROM_CART_SUCCESS:
        draft.itemIds.slice().filter(id => id !== payload)
        draft.items.slice().filter(item => item.product.id !== payload)
        draft.isLoading = false
        draft.inFocus = null
        break
    }
  })
