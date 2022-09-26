import { db } from 'core/firebase'

export const getCartItems = async userId => {
	return db.collection('carts').doc(userId).collection('items').get()
}

export const addToCart = async (userId, item) => {
	return await db.collection('carts').doc(userId).collection('items').doc(item.variantId).set(item)
}

export const removeFromCart = async (userId, productId) => {
	return db.collection('carts').doc(userId).collection('items').doc(productId).delete()
}

export const updateCart = async (userId, productId, payload) => {
	return db.collection('carts').doc(userId).collection('items').doc(productId).update(payload)
}

export const emptyCart = async userId => {
	return db
		.collection('carts')
		.doc(userId)
		.collection('items')
		.get()
		.then(res => {
			res.forEach(item => {
				item.ref.delete()
			})
		})
}
