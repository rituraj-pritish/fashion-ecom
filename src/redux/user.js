import produce from 'immer'
import { db } from 'services/firebase'

// types

const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST'
const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS'
const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE'

// action creators

export const fetchUserDetails = () => async (dispatch, getState) => {
  const { auth } = getState()
  const userId = auth.user?.id

  db.collection('users').doc(userId)
}

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

// reducer

const initialState = {
  orders: [],
  isFetching: false
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    //eslint-disable-next-line
    switch (type) {
      case FETCH_ORDERS_REQUEST:
        draft.isFetching = true
        break

      case FETCH_ORDERS_SUCCESS:
        draft.isFetching = false
        draft.orders = payload
        break

      case FETCH_ORDERS_FAILURE:
        draft.isFetching = false
        break

      default:
        break
    }
  })
