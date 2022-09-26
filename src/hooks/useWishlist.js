import React from 'react'
import { createState, useState } from '@hookstate/core'

import {
	addToWishlist as addToWishlistApi,
	removeFromWishlist as removeFromWishlistApi,
	getWishlistItems as getWishlistItemsApi,
} from 'endpoints/wishlist'
import useAuthentication from './useAuthentication'

const WISHLIST_STATE = createState([])

export default () => {
	const { user } = useAuthentication()

	const wishlistState = useState(WISHLIST_STATE)

	const getWishlistItems = async () => {
		const res = await getWishlistItemsApi(user?.id)
		const items = res.docs.map(doc => doc.data())
		wishlistState.set(items)
	}

	const addToWishlist = async item => {
		await addToWishlistApi(user?.id, item)
		wishlistState.set(prevItems => prevItems.concat(item))
	}

	const removeFromWishlist = async id => {
		await removeFromWishlistApi(user?.id, id)
		wishlistState.set(prevItems => prevItems.filter(({ productId }) => productId !== id))
	}

	return React.useMemo(
		() => ({
			getWishlistItems,
			addToWishlist,
			removeFromWishlist,
			wishlistItems: wishlistState.get(),
		}),
		[user],
	)
}
