import React from 'react'
import { createState, useState } from '@hookstate/core'

import { db } from 'core/firebase'
import useAuthentication from './useAuthentication'

const CART_STATE = createState(null)

export default () => {
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

	return React.useMemo(() => ({
		cartItems,
		getCartItems
	}))
}