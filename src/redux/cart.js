import produce from 'immer'
import { db } from 'services/firebase'
import setAlert from 'setAlert'

// types

const BACK_TO_CART_REQUEST = 'BACK_TO_CART_REQUEST'
const BACK_TO_CART_SUCCESS = 'BACK_TO_CART_SUCCESS'
const BACK_TO_CART_FAILURE = 'BACK_TO_CART_FAILURE'

const SAVE_FOR_LATER_REQUEST = 'SAVE_FOR_LATER_REQUEST'
const SAVE_FOR_LATER_SUCCESS = 'SAVE_FOR_LATER_SUCCESS'
const SAVE_FOR_LATER_FAILURE = 'SAVE_FOR_LATER_FAILURE'

const EMPTY_CART_REQUEST = 'EMPTY_CART_REQUEST'
const EMPTY_CART_SUCCESS = 'EMPTY_CART_SUCCESS'
const EMPTY_CART_FAILURE = 'EMPTY_CART_FAILURE'

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

export const getCartItems = userId => async dispatch => {
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
  dispatch({ type: ADD_TO_CART_REQUEST, payload: item.variantId })
  const addedDate = new Date().toISOString()

  const { auth } = getState()
  const userId = auth.user?.id

  if (!userId) {
    setAlert('Login to continue', 'danger')
    dispatch({ type: ADD_TO_CART_FAILURE })
  }

  try {
    await db
      .collection('carts')
      .doc(userId)
      .collection('items')
      .doc(item.variantId)
      .set({
        ...item,
        forLater: false,
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

export const updateCart = ({ id, quantity }) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_CART_REQUEST, payload: id })

  const { auth } = getState()
  const userId = auth.user?.id
  try {
    db.collection('carts').doc(userId).collection('items').doc(id).update({
      quantity
    })

    dispatch({ type: UPDATE_CART_SUCCESS, payload: { id, quantity } })
  } catch (err) {
    dispatch({ type: UPDATE_CART_FAILURE })
    console.log(err)
  }
}

export const emptyCart = () => async (dispatch, getState) => {
  dispatch({ type: EMPTY_CART_REQUEST })

  const userId = getState().auth.user?.id

  db.collection('carts')
    .doc(userId)
    .collection('items')
    .get()
    .then(res => {
      res.forEach(item => {
        item.ref.delete()
      })
    })
    .then(() => {
      dispatch({ type: EMPTY_CART_SUCCESS })
    })
    .catch(err => {
      if (err) dispatch({ type: EMPTY_CART_FAILURE })
    })
}

export const saveForLater = id => async (dispatch, getState) => {
  dispatch({ type: SAVE_FOR_LATER_REQUEST, payload: id })
  const userId = getState().auth.user?.id

  try {
    await db
      .collection('carts')
      .doc(userId)
      .collection('items')
      .doc(id)
      .update({
        forLater: true
      })
    dispatch({ type: SAVE_FOR_LATER_SUCCESS, payload: id })
  } catch (err) {
    dispatch({ type: SAVE_FOR_LATER_FAILURE })
    console.log(err)
  }
}

export const backToCart = id => async (dispatch, getState) => {
  dispatch({ type: BACK_TO_CART_REQUEST, payload: id })
  const userId = getState().auth.user?.id

  try {
    await db
      .collection('carts')
      .doc(userId)
      .collection('items')
      .doc(id)
      .update({
        forLater: false
      })
    dispatch({ type: BACK_TO_CART_SUCCESS, payload: id })
  } catch (err) {
    dispatch({ type: BACK_TO_CART_FAILURE })
    console.log(err)
  }
}

const initialState = {
  items: [],
  forLater: [],
  isLoading: false,
  inFocus: null
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case BACK_TO_CART_REQUEST:
      case SAVE_FOR_LATER_REQUEST:
      case EMPTY_CART_REQUEST:
      case GET_CART_ITEMS_REQUEST:
      case ADD_TO_CART_REQUEST:
      case UPDATE_CART_REQUEST:
      case REMOVE_FROM_CART_REQUEST:
        draft.isLoading = true
        draft.inFocus = payload || null
        break

      case BACK_TO_CART_FAILURE:
      case SAVE_FOR_LATER_FAILURE:
      case EMPTY_CART_FAILURE:
      case GET_CART_ITEMS_FAILURE:
      case ADD_TO_CART_FAILURE:
      case UPDATE_CART_FAILURE:
      case REMOVE_FROM_CART_FAILURE:
        draft.isLoading = false
        draft.inFocus = null
        break

      case GET_CART_ITEMS_SUCCESS:
        draft.items = payload.filter(({ forLater }) => forLater === false)
        draft.forLater = payload.filter(({ forLater }) => forLater === true)
        draft.isLoading = false
        break

      case ADD_TO_CART_SUCCESS:
        draft.items.push(payload)
        draft.isLoading = false
        draft.inFocus = null
        break

      case REMOVE_FROM_CART_SUCCESS:
        draft.items = state.items.filter(item => item.variantId !== payload)
        draft.isLoading = false
        draft.inFocus = null
        break

      case UPDATE_CART_SUCCESS: {
        const idx = draft.items.findIndex(item => item.variantId === payload.id)
        draft.items[idx].quantity = payload.quantity
        draft.isLoading = false
        draft.inFocus = null
        break
      }

      case EMPTY_CART_SUCCESS:
        draft.inFocus = null
        draft.items = []
        draft.isLoading = false
        break

      case SAVE_FOR_LATER_SUCCESS: {
        const item = draft.items.find(item => item.id === payload)
        item.forLater = true

        draft.forLater.push(item)
        draft.items = state.items.slice().filter(item => item.id !== payload)
        draft.inFocus = null
        draft.isLoading = false
        break
      }

      case BACK_TO_CART_SUCCESS: {
        const item = draft.forLater.find(item => item.id === payload)
        item.forLater = false

        draft.forLater = state.forLater
          .slice()
          .filter(item => item.id !== payload)
        draft.inFocus = null
        draft.items.push(item)
        draft.isLoading = false
        break
      }

      default:
        break
    }
  })
