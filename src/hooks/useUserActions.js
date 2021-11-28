import React from 'react'

import { db } from 'core/firebase'
import useAuthentication from './useAuthentication'
import getNewUid from 'helpers/getNewUid'

export default () => {
	const { user } = useAuthentication()

	const rateProduct = async (rating, orderId, productId, products) => {
		const product = products.find(({ productId: pId }) => pId === productId)
		const idx = products.findIndex(({ productId: pId }) => pId === productId)
  
		const newProductsArray = [...products]
		newProductsArray[idx] = {
			...product,
			rating
		}
  
		await db
			.collection('orders')
			.doc(user.id)
			.collection('items')
			.doc(orderId)
			.update({
				products: newProductsArray
			})
			//todo await dispatch(updateProductRating(productId, rating))
	}
  
	const removeRating = async (rating, orderId, productId, products) => {
		const idx = products.findIndex(({ productId: pId }) => pId === productId)
  
		const newProductsArray = [...products]
		const newProductObject = { ...newProductsArray[idx] }
		delete newProductObject.rating
  
		newProductsArray[idx] = newProductObject

		await db
			.collection('orders')
			.doc(user.id)
			.collection('items')
			.doc(orderId)
			.update({
				products: newProductsArray
			})
  
		//todo await dispatch(updateProductRating(productId, rating, true))
	}
  
	const addReview = async (values, productId, orderId, reviewId) => {
		const id = getNewUid()
  
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
	}
  
	const getReview = async (productId, orderId) => {
		try {
			const res = await db
				.collection('reviews')
				.doc('items')
				.collection(productId)
				.where('order_id', '==', orderId)
				.get()
			return res.docs.map(doc => doc.data())[0]
		} catch (err) {
			console.log('err', err)
		}
	}
  
	const getProductReviews = async productId => {
		try {
			const res = await db
				.collection('reviews')
				.doc('items')
				.collection(productId)
				.get()
			return res.docs.map(doc => doc.data())
		} catch (err) {
			console.log('err', err)
		}
	}

	return React.useMemo(() => ({
		rateProduct,
		removeRating,
		addReview,
		getReview,
		getProductReviews
	}))
}