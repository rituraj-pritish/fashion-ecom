import produce from 'immer'
import { db } from 'services/firebase'

// types

const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_FILTER_CRITERIA = 'SET_FILTER_CRITERIA'

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

export const updateProductRating = (
  productId,
  rating,
  remove = false
) => async dispatch => {
  try {
    const product = await (
      await db.collection('products').doc(productId).get()
    ).data()
    const { avg_rating, total_ratings } = product

    let newRating
    let totalRatings

    if (remove) {
      newRating = ((avg_rating * total_ratings) - rating) / (total_ratings - 1)
      totalRatings = total_ratings - 1
    } else {
      newRating = (avg_rating * total_ratings + rating) / (total_ratings + 1)
      totalRatings = total_ratings + 1
    }

    await db
      .collection('products')
      .doc(productId)
      .update({
        avg_rating: Math.round(newRating * 100) / 100,
        total_ratings: totalRatings
      })
  } catch (err) {}
}

export const updateProductReviews = productId => async dispatch => {
  try {
    const product = await (
      await db.collection('products').doc(productId).get()
    ).data()
    const { total_ratings = 0 } = product

    await db
      .collection('products')
      .doc(productId)
      .update({
        total_ratings: total_ratings + 1
      })
  } catch (err) {}
}

export const setFilterCriteria = criteria => ({
  type: SET_FILTER_CRITERIA,
  payload: criteria
})

// reducer

const initialState = {
  allProducts: [],
  isLoading: true,
  filterCriteria: {
    price: 'all',
    brand: 'brand-all',
    sort: 'rating'
  }
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case SET_PRODUCTS:
        draft.allProducts = payload
        draft.isLoading = false
        break
      case SET_FILTER_CRITERIA:
        draft.filterCriteria = { ...state.filterCriteria, ...payload }
        break

      default:
        break
    }
  })
