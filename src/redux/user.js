import produce from 'immer'
import { db } from 'services/firebase'
import getNewUid from 'helpers/getNewUid'
import { updateProductRating } from './products'

// types

const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST'
const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS'
const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE'

const ADD_NEW_ORDER_REQUEST = 'ADD_NEW_ORDER_REQUEST'
const ADD_NEW_ORDER_SUCCESS = 'ADD_NEW_ORDER_SUCCESS'
const ADD_NEW_ORDER_FAILURE = 'ADD_NEW_ORDER_FAILURE'

const RATE_PRODUCT_REQUEST = 'RATE_PRODUCT_REQUEST'
const RATE_PRODUCT_SUCCESS = 'RATE_PRODUCT_SUCCESS'
const RATE_PRODUCT_FAILURE = 'RATE_PRODUCT_FAILURE'

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

export const rateProduct = (rating, orderId, productId, products) => async (
  dispatch,
  getState
) => {
  dispatch({ type: RATE_PRODUCT_REQUEST, payload: productId })
  const { auth } = getState()
  const user = auth.user

  const product = products.find(({ productId: pId }) => pId === productId)
  const idx = products.findIndex(({ productId: pId }) => pId === productId)

  const newProductsArray = [...products]
  newProductsArray[idx] = {
    ...product,
    rating
  }

  try {
    await db
      .collection('orders')
      .doc(user.id)
      .collection('items')
      .doc(orderId)
      .update({
        products: newProductsArray
      })
    dispatch({
      type: RATE_PRODUCT_SUCCESS,
      payload: { orderId, productId, rating, products }
    })
    dispatch(updateProductRating(productId, rating))
  } catch (err) {
    dispatch({ type: RATE_PRODUCT_FAILURE, payload: productId })
  }
}

// reducer

const initialState = {
  orders: [],
  isLoading: false,
  isRating: []
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
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

      case RATE_PRODUCT_REQUEST:
        draft.isRating = [...state.isRating, payload]
        break

      case RATE_PRODUCT_SUCCESS: {
        const orderIdx = state.orders.findIndex(
          ({ order_id }) => order_id === payload.orderId
        )
        const productIdx = state.orders[orderIdx].products.findIndex(
          ({ productId }) => productId === payload.productId
        )

        draft.orders[orderIdx].products[productIdx].rating = payload.rating
        draft.isRating = state.isRating.filter(id => id !== payload.productId)
        break
      }

      case RATE_PRODUCT_FAILURE:
        draft.isRating = state.isRating.filter(id => id !== payload)
        break

      default:
        break
    }
  })
