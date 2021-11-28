import produce from 'immer'
import { db } from 'core/firebase'
import getNewUid from 'helpers/getNewUid'
// import { updateProductRating, updateProductReviews } from './products'

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

const REMOVE_RATING_REQUEST = 'REMOVE_RATING_REQUEST'
const REMOVE_RATING_SUCCESS = 'REMOVE_RATING_SUCCESS'
const REMOVE_RATING_FAILURE = 'REMOVE_RATING_FAILURE'

const GET_REVIEWS_REQUEST = 'GET_REVIEWS_REQUEST'
const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS'
const GET_REVIEWS_FAILURE = 'GET_REVIEWS_FAILURE'

const GET_REVIEW_REQUEST = 'GET_REVIEW_REQUEST'
const GET_REVIEW_SUCCESS = 'GET_REVIEW_SUCCESS'
const GET_REVIEW_FAILURE = 'GET_REVIEW_FAILURE'

const ADD_REVIEW_REQUEST = 'ADD_REVIEW_REQUEST'
const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS'
const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE'

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
		//todo await dispatch(updateProductRating(productId, rating))
		dispatch({
			type: RATE_PRODUCT_SUCCESS,
			payload: { orderId, productId, rating, products }
		})
	} catch (err) {
		dispatch({ type: RATE_PRODUCT_FAILURE, payload: productId })
	}
}

export const removeRating = (rating, orderId, productId, products) => async (
	dispatch,
	getState
) => {
	dispatch({ type: REMOVE_RATING_REQUEST, payload: productId })
	const { auth } = getState()
	const user = auth.user

	const idx = products.findIndex(({ productId: pId }) => pId === productId)

	const newProductsArray = [...products]
	const newProductObject = { ...newProductsArray[idx] }
	delete newProductObject.rating

	newProductsArray[idx] = newProductObject

	try {
		await db
			.collection('orders')
			.doc(user.id)
			.collection('items')
			.doc(orderId)
			.update({
				products: newProductsArray
			})

		//todo await dispatch(updateProductRating(productId, rating, true))
		dispatch({
			type: REMOVE_RATING_SUCCESS,
			payload: { orderId, productId, products }
		})
	} catch (err) {
		dispatch({ type: REMOVE_RATING_FAILURE, payload: productId })
	}
}

export const addReview = (values, productId, orderId, reviewId) => async (
	dispatch,
	getState
) => {
	dispatch({ type: ADD_REVIEW_REQUEST })
	const { auth } = getState()
	const user = auth.user
	const id = getNewUid()

	try {
		if (reviewId) {
			await db
				.collection('reviews')
				.doc('items')
				.collection(productId)
				.doc(reviewId)
				.update({
					...values
				})
		} else {
			await db
				.collection('reviews')
				.doc('items')
				.collection(productId)
				.doc(id)
				.set({
					...values,
					product_id: productId,
					order_id: orderId,
					author: user.name,
					date: new Date().toISOString(),
					id
				})
		}

		//todo dispatch(updateProductReviews)
		dispatch({ type: ADD_REVIEW_SUCCESS })
	} catch (err) {
		dispatch({ type: ADD_REVIEW_FAILURE })
	}
}

export const getReview = (productId, orderId) => async dispatch => {
	dispatch({ type: GET_REVIEW_REQUEST })
	try {
		const res = await db
			.collection('reviews')
			.doc('items')
			.collection(productId)
			.where('order_id', '==', orderId)
			.get()

		dispatch({ type: GET_REVIEW_SUCCESS })
		return res.docs.map(doc => doc.data())[0]
	} catch (err) {
		console.log('err', err)
		dispatch({ type: GET_REVIEW_FAILURE })
	}
}

export const getProductReviews = productId => async dispatch => {
	dispatch({ type: GET_REVIEWS_REQUEST })
	try {
		const res = await db
			.collection('reviews')
			.doc('items')
			.collection(productId)
			.get()
		dispatch({ type: GET_REVIEWS_SUCCESS })
		return res.docs.map(doc => doc.data())
	} catch (err) {
		console.log('err', err)
		dispatch({ type: GET_REVIEWS_FAILURE })
	}
}

// reducer

const initialState = {
	orders: [],
	isLoading: false,
	isRating: [],
	addingReview: false
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

		case REMOVE_RATING_REQUEST:
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

		case REMOVE_RATING_SUCCESS: {
			const orderIdx = state.orders.findIndex(
				({ order_id }) => order_id === payload.orderId
			)
			const productIdx = state.orders[orderIdx].products.findIndex(
				({ productId }) => productId === payload.productId
			)
			const product = { ...state.orders[orderIdx].products[productIdx] }
			delete product.rating

			draft.orders[orderIdx].products[productIdx] = product
			draft.isRating = state.isRating.filter(id => id !== payload.productId)
			break
		}

		case REMOVE_RATING_FAILURE:
		case RATE_PRODUCT_FAILURE:
			draft.isRating = state.isRating.filter(id => id !== payload)
			break

		case ADD_REVIEW_REQUEST:
			draft.addingReview = true
			break

		case ADD_REVIEW_SUCCESS:
		case ADD_REVIEW_FAILURE:
			draft.addingReview = false
			break

		default:
			break
		}
	})
