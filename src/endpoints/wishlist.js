import { db } from 'core/firebase'

export const getWishlistItems = async (userId) => {
	return db
		.collection('wishlists')
		.doc(userId)
		.collection('items')
		.get()
}

export const addToWishlist = async (userId, item) => {
	return db
		.collection('wishlists')
		.doc(userId)
		.collection('items')
		.doc(item.productId)
		.set(item)
}

export const removeFromWishlist = async (userId, productId) => {
	return db
		.collection('wishlists')
		.doc(userId)
		.collection('items')
		.doc(productId)
		.delete()
}
