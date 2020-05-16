import produce from 'immer'
import { db } from 'services/firebase'

// types

const SET_PRODUCTS = 'SET_PRODUCTS'

// action creators

export const getProducts = () => async dispatch => {
  try {
    await db.collection('products').onSnapshot(data => {
      const products = data.docs.map(doc => doc.data())
      dispatch({ type: SET_PRODUCTS, payload: products })
    })
  } catch (err) {
    console.log(err)
  }
}

// reducer

const initialState = {
  allProducts: [],
  isLoading: true,
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    //eslint-disable-next-line
    switch (type) {
      case SET_PRODUCTS:
        draft.allProducts = payload
        draft.isLoading = false
        break
    }
  })
