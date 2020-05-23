import produce from 'immer'
import { db } from 'services/firebase'

// types

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

export const getCartItems = userId => async (dispatch, getState) => {
  dispatch({ type: GET_CART_ITEMS_REQUEST })

  try {
    const res = await db
      .collection('carts')
      .doc(userId)
      .collection('items')
      .get()
    const items = res.docs.map(doc => doc.data())
    dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: items })
  } catch (err) {
    console.log(err)
  }
}

export const addToCart = item => async (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART_REQUEST, payload: item.id })
  const addedDate = new Date().toISOString()

  const { auth } = getState()
  const userId = auth.user?.id

  try {
    await db
      .collection('carts')
      .doc(userId)
      .collection('items')
      .doc(item.id).set({
        ...item,
        date: addedDate
      })

    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: { ...item, date: addedDate }
    })
  } catch (err) {
    dispatch({ type: ADD_TO_CART_FAILURE })
  }
}

export const removeFromCart = id => async (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_CART_REQUEST, payload: id })
  const { auth } = getState()
  const userId = auth.user?.id

  try {
    await db
      .collection('carts')
      .doc(userId)
      .collection('items')
      .doc(id)
      .delete()

    dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: id })
  } catch (err) {
    dispatch({ type: REMOVE_FROM_CART_FAILURE })
    console.log(err)
  }
}

export const updateCart = () => {}

const initialState = {
  items: [],
  isLoading: false,
  inFocus: null
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    //eslint-disable-next-line
    switch (type) {
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
        draft.items.push(payload)
        draft.isLoading = false
        draft.inFocus = null
        break

      case REMOVE_FROM_CART_SUCCESS:
        draft.items = state.items.filter(item => item.id !== payload)
        draft.isLoading = false
        draft.inFocus = null
        break
    }
  })
