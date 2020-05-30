import produce from 'immer'
import { db } from 'services/firebase'

// types

const GET_WISHLIST_ITEMS_REQUEST = 'GET_WISHLIST_ITEMS_REQUEST'
const GET_WISHLIST_ITEMS_SUCCESS = 'GET_WISHLIST_ITEMS_SUCCESS'
const GET_WISHLIST_ITEMS_FAILURE = 'GET_WISHLIST_ITEMS_FAILURE'

const ADD_TO_WISHLIST_REQUEST = 'ADD_TO_WISHLIST_REQUEST'
const ADD_TO_WISHLIST_SUCCESS = 'ADD_TO_WISHLIST_SUCCESS'
const ADD_TO_WISHLIST_FAILURE = 'ADD_TO_WISHLIST_FAILURE'

const REMOVE_FROM_WISHLIST_REQUEST = 'REMOVE_FROM_WISHLIST_REQUEST'
const REMOVE_FROM_WISHLIST_SUCCESS = 'REMOVE_FROM_WISHLIST_SUCCESS'
const REMOVE_FROM_WISHLIST_FAILURE = 'REMOVE_FROM_WISHLIST_FAILURE'

// action creators

export const getWishlistItems = userId => async dispatch => {
  dispatch({ type: GET_WISHLIST_ITEMS_REQUEST })

  try {
    const res = await db
      .collection('wishlists')
      .doc(userId)
      .collection('items')
      .get()
    const items = res.docs.map(doc => doc.data())

    dispatch({ type: GET_WISHLIST_ITEMS_SUCCESS, payload: items })
  } catch (err) {
    dispatch({ type: GET_WISHLIST_ITEMS_FAILURE })
  }
}

export const addToWishlist = item => async (dispatch, getState) => {
  dispatch({ type: ADD_TO_WISHLIST_REQUEST, payload: item.productId })

  const { auth } = getState()
  const userId = auth.user?.id

  try {
    await db
      .collection('wishlists')
      .doc(userId)
      .collection('items')
      .doc(item.productId)
      .set(item)

    dispatch({ type: ADD_TO_WISHLIST_SUCCESS, payload: item })
  } catch (err) {
    dispatch({ type: ADD_TO_WISHLIST_FAILURE, payload: item })
    console.log(err)
  }
}

export const removeFromWishlist = id => async (dispatch, getState) => {
  dispatch({ type: REMOVE_FROM_WISHLIST_REQUEST, payload: id })

  const { auth } = getState()
  const userId = auth.user?.id

  try {
    await db
      .collection('wishlists')
      .doc(userId)
      .collection('items')
      .doc(id)
      .delete()

    dispatch({ type: REMOVE_FROM_WISHLIST_SUCCESS, payload: id })
  } catch (err) {
    dispatch({ type: REMOVE_FROM_WISHLIST_FAILURE })
  }
}
const initialState = {
  items: [],
  isLoading: false,
  inFocus: null
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    // eslint-disable-next-line
    switch (type) {
      case GET_WISHLIST_ITEMS_REQUEST:
      case ADD_TO_WISHLIST_REQUEST:
      case REMOVE_FROM_WISHLIST_REQUEST:
        draft.isLoading = true
        draft.inFocus = payload || null
        break

      case GET_WISHLIST_ITEMS_SUCCESS:
        draft.items = payload
        break

      case ADD_TO_WISHLIST_SUCCESS:
        draft.items.push(payload)
        draft.isLoading = false
        draft.inFocus = null
        break

      case REMOVE_FROM_WISHLIST_SUCCESS:
        draft.items = state.items.slice().filter(item => item.productId !== payload)
        draft.isLoading = false
        draft.inFocus = null
        break
    }
  })
