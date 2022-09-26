import React from 'react'
import { createState, useState } from '@hookstate/core'

import {
	getCartItems as getCartItemsApi,
	addToCart as addToCartApi,
	removeFromCart as removeFromCartApi,
	updateCart as updateCartApi,
	emptyCart as emptyCartApi,
} from 'endpoints/cart'
import useAuthentication from './useAuthentication'
import alert from 'core/alert'

const CART_STATE = createState([])

export default () => {
	const { user } = useAuthentication()
	const [isFetching, setIsFetching] = React.useState(false)

	const cartState = useState(CART_STATE)
	const cartItems = cartState.get()

	const getCartItems = async () => {
		setIsFetching(true)
		const res = await getCartItemsApi(user?.id)
		const items = res.docs.map(doc => doc.data())
		cartState.set(items)
		setIsFetching(false)
	}

	const addToCart = async item => {
		const addedDate = new Date().toISOString()
		const userId = user?.id
		if (!userId) {
			return alert.error({ message: 'Login to continue' })
		}
		await addToCartApi(userId, {
			...item,
			forLater: false,
			date: addedDate,
		})
		cartState.set(prevItems => prevItems.concat(item))
	}

	const removeFromCart = async productId => {
		const userId = user?.id
		await removeFromCartApi(userId, productId)
		cartState.set(prevItems => prevItems.filter(({ variantId }) => variantId !== productId))
	}

	const updateCart = async ({ id, quantity }) => {
		const userId = user?.id
		await updateCartApi(userId, id, { quantity })
		cartState.set(prevItems => prevItems.map(item => item.variantId === id ? {	
			...item,
			quantity
		} : item))
	}

	const emptyCart = async () => {
		const userId = user?.id
		await emptyCartApi(userId)
		cartState.set([])
	}

	const saveForLater = async id => {
		const userId = user?.id
		await updateCartApi(userId, id, { forLater: true })
		cartState.set(prevItems => prevItems.map(item => item.variantId === id ? {	
			...item,
			forLater: true
		} : item))
	}

	const backToCart = async id => {
		const userId = user?.id
		await updateCartApi(userId, id, { forLater: false })
		cartState.set(prevItems => prevItems.map(item => item.variantId === id ? {	
			...item,
			forLater: false
		} : item))
	}

	return React.useMemo(
		() => ({
			cartItems,
			getCartItems,
			saveForLater,
			backToCart,
			addToCart,
			removeFromCart,
			emptyCart,
			updateCart,
			isFetching,
		}),
		[user],
	)
}
