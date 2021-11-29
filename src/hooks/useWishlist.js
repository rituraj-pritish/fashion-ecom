import React from 'react'
import { createState, useState } from '@hookstate/core'

import { db } from 'core/firebase'
import useAuthentication from './useAuthentication'

const WISHLIST_STATE = createState([])

export default () => {
	const { user } = useAuthentication()

	const wishlistState = useState(WISHLIST_STATE)

	const getWishlistItems = async userId => {
		const res = await db
			.collection('wishlists')
			.doc(userId)
			.collection('items')
			.get()
		const items = res.docs.map(doc => doc.data())
		wishlistState.set(items)
	}
  
	const addToWishlist = async item => {

		const userId = user?.id
  
		try {
			await db
				.collection('wishlists')
				.doc(userId)
				.collection('items')
				.doc(item.productId)
				.set(item)
		} catch (err) {
			console.log(err)
		}
	}
  
	const removeFromWishlist = async id => {
		const userId = user?.id
  
		await db
			.collection('wishlists')
			.doc(userId)
			.collection('items')
			.doc(id)
			.delete()
	}

	return React.useMemo(() => ({
		getWishlistItems,
		addToWishlist,
		removeFromWishlist,
		wishlist: wishlistState.get()
	}))
}