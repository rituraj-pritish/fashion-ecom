import React from 'react'
import { createState, useState } from '@hookstate/core'

import { db } from 'core/firebase'
import useAuthentication from './useAuthentication'
import alert from 'core/alert'

const CART_STATE = createState([])

export default () => {
	const { user } = useAuthentication()
	const cartState = useState(CART_STATE)
	const cartItems = cartState.get()

	const getCartItems = async () => {
		const res = await db
			.collection('carts')
			.doc(user.id)
			.collection('items')
			.get()

		const items = res.docs.map(doc => doc.data())
		cartState.set(items)
	}

	const addToCart = async item => {
		const addedDate = new Date().toISOString()
	
		const userId = user?.id
	
		if (!userId) {
			return alert.error({ message: 'Login to continue'})
		}
	
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

	}
	
	const removeFromCart = async id => {
		const userId = user?.id
	
		try {
			await db
				.collection('carts')
				.doc(userId)
				.collection('items')
				.doc(id)
				.delete()
		} catch (err) {
			console.log(err)
		}
	}
	
	const updateCart = async ({ id, quantity }) => {	
		const userId = user?.id
		try {
			db.collection('carts').doc(userId).collection('items').doc(id).update({
				quantity
			})
		} catch (err) {
			console.log(err)
		}
	}
	
	const emptyCart = async () => {	
		const userId = user?.id
	
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
			})
			.catch(err => {
			})
	}
	
	const saveForLater = id => async (dispatch, getState) => {
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
		} catch (err) {
			console.log(err)
		}
	}
	
	const backToCart = async id => {
		const userId = user?.id
	
		try {
			await db
				.collection('carts')
				.doc(userId)
				.collection('items')
				.doc(id)
				.update({
					forLater: false
				})
		} catch (err) {
			console.log(err)
		}
	}

	return React.useMemo(() => ({
		cartItems,
		getCartItems,
		saveForLater,
		backToCart,
		addToCart,
		removeFromCart,
		emptyCart,
		updateCart
	}))
}