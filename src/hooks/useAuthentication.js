import React from 'react'
import { createState, useState } from '@hookstate/core'
import { useHistory } from 'react-router'

import { db, firebase } from 'core/firebase'

const INITIAL_STATE = {
	isAuthenticated: false,
	user: null
}

const AUTH_STATE = createState(INITIAL_STATE)

export default () => {
	const history = useHistory()
	const authState = useState(AUTH_STATE)

	const signup = async (data, goBack) => {  
		const { email, password, name, phone } = data

		const res = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
  
		if (res.user.uid) {
			const userPayload = {
				name,
				phone,
				id: res.user.uid,
				email
			}
  
			Object.keys(userPayload).forEach(key => {
				userPayload[key] === undefined && delete userPayload[key]
			})
  
			db.collection('users').doc(res.user.uid).set(userPayload)
			authState.set({
				user: userPayload,
				isAuthenticated: true
			})

			goBack()
		}
	}
  
	const signin = async ({ email, password }, goBack) => {
		const res = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
  
		let user

		if (res.user.uid) {
			// dispatch(getCartItems(res.user.uid))
			// dispatch(getWishlistItems(res.user.uid))
			user = await db.collection('users').doc(res.user.uid).get()
		}
  
		const userData = user.data()
  
		if (userData) {
			goBack()
			authState.set({
				user: userData,
				isAuthenticated: true
			})
		}
	}
  
	const authStateChangeHandler = async () => {
		firebase.auth().onAuthStateChanged(async user => {
			if (user) {
				const res = await db.collection('users').doc(user.uid).get()
				// dispatch(getCartItems(user.uid))
				// dispatch(getWishlistItems(user.uid))
  
				const userData = res.data()
				authState.set({
					user: userData,
					isAuthenticated: true
				})
			} else {
				authState.set(INITIAL_STATE)
			}
		})
	}
  
	const resetPassword = async ({ email }) => {
		const user = await db.collection('users').where('email', '==', email).get()
  
		if (!user.docs.length) {
			throw new Error('The email is not registered')
		}
  
		await firebase.auth().sendPasswordResetEmail(email)
	}
  
	const signOut = async () => {
		await firebase.auth().signOut()
		history.push('/')
	}
  
	const updateUserDetails = async data => {
		const userId = authState.user.id
		await db.collection('users').doc(userId).update(data)
	}

	return React.useMemo(() => ({
		...authState.get(),
		signup,
		signin,
		authStateChangeHandler,
		updateUserDetails,
		resetPassword,
		signOut
	}))
}