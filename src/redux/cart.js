import produce from 'immer'
import { db } from 'services/firebase'

// types

const SET_CART_PRODUCT_IDS = 'SET_CART_PRODUCT_IDS'

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

export const setCartIds = ids => ({
  type: SET_CART_PRODUCT_IDS,
  payload: ids
})

export const addToCart = item => async (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART_REQUEST })
  const addedDate = new Date().toISOString()
  const { auth } = getState()
  console.log('a', item);
  const userId = auth.user?.id
  const userCart = auth.user?.cart || []

  try {
    await db
      .collection('users')
      .doc(userId)
      .update({
        cart: [{
          productId: item.product.id,
          variant: item.variant,
          quantity: item.quantity,
          date: addedDate
        }, ...userCart]
      })

    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: { ...item, date: addedDate }
    })
  } catch (err) {
    dispatch({ type: ADD_TO_CART_FAILURE })
    console.log('er', err);
  }

  dispatch({ type: 'some' })
}

export const removeFromCart = () => {}

export const updateCart = () => {}

const initialState = {
  itemIds: [],
  items: [],
  isLoading: false
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    //eslint-disable-next-line
    switch (type) {
      case SET_CART_PRODUCT_IDS:
        draft.itemIds = payload
        break

      case ADD_TO_CART_REQUEST:
      case UPDATE_CART_REQUEST:
      case REMOVE_FROM_CART_REQUEST:
        draft.isLoading = true
        break

      case ADD_TO_CART_SUCCESS:
        draft.itemIds.unshift(payload.product.id)
        draft.items.unshift(payload)
    }
  })
