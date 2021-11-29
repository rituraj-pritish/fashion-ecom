import React from 'react'
import { createState, useState } from '@hookstate/core'

import { db } from 'core/firebase'
import useAuthentication from './useAuthentication'
import setAlert from 'setAlert'

const CART_STATE = createState(null)

export default () => {
	const { user } = useAuthentication()

	const cartState = useState(CART_STATE)
	const { userId } = useAuthentication()

	const cartItems = cartState.get()

	const getCartItems = async () => {
		const res = await db
			.collection('carts')
			.doc(userId)
			.collection('items')
			.get()

		const items = res.docs.map(doc => doc.data())
		cartState.set(items)
	}

	const addToCart = async item => {
		const addedDate = new Date().toISOString()
	
		const userId = user?.id
	
		if (!userId) {
			setAlert('Login to continue', 'danger')
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