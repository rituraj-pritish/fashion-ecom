import produce from 'immer'
import { db } from 'services/firebase'
import getNewUid from 'helpers/getNewUid'

// types

const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST'
const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS'
const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE'

const ADD_NEW_ORDER_REQUEST = 'ADD_NEW_ORDER_REQUEST'
const ADD_NEW_ORDER_SUCCESS = 'ADD_NEW_ORDER_SUCCESS'
const ADD_NEW_ORDER_FAILURE = 'ADD_NEW_ORDER_FAILURE'

// action creators

export const fetchOrders = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_ORDERS_REQUEST })
  const { auth } = getState()
  const userId = auth.user?.id

  try {
    const res = await db
      .collection('orders')
      .doc(userId)
      .collection('items')
      .get()
    const orders = res.docs.map(doc => doc.data())
    dispatch({ type: FETCH_ORDERS_SUCCESS, payload: orders })
  } catch (err) {
    dispatch({ type: FETCH_ORDERS_FAILURE })
  }
}

export const addNewOrder = data => async (dispatch, getState) => {
  dispatch({ type: ADD_NEW_ORDER_REQUEST })
  const { auth } = getState()
  const user = auth.user
  const id = getNewUid()

  try {
    const res = await db
      .collection('orders')
      .doc(user.id)
      .collection('items')
      .doc(id)
      .set({
        ...data,
        order_placed: new Date().toISOString(),
        shipping_address: user.address,
        shipping_name: user.name,
        order_id: id
      })
    const orders = res.docs.map(doc => doc.data())
    dispatch({ type: ADD_NEW_ORDER_SUCCESS, payload: orders })
  } catch (err) {
    dispatch({ type: ADD_NEW_ORDER_FAILURE })
  }
}

// reducer

const initialState = {
  orders: [],
  isLoading: false
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    //eslint-disable-next-line
    switch (type) {
      case ADD_NEW_ORDER_REQUEST:
      case FETCH_ORDERS_REQUEST:
        draft.isLoading = true
        break

      case FETCH_ORDERS_SUCCESS:
        draft.isLoading = false
        draft.orders = payload
        break

      case ADD_NEW_ORDER_SUCCESS:
      case ADD_NEW_ORDER_FAILURE:
      case FETCH_ORDERS_FAILURE:
        draft.isLoading = false
        break

      default:
        break
    }
  })
