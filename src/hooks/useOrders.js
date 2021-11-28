import React from 'react'
import { createState, useState } from '@hookstate/core'

import { db } from 'core/firebase'
import getNewUid from 'helpers/getNewUid'
import useAuthentication from './useAuthentication'

const ORDERS_STATE = createState(null)

export default () => {
	const ordersState = useState(ORDERS_STATE)
	const { user } = useAuthentication()
  
	const fetchOrders = async () => {
		const userId = user.id
  
		const res = await db
			.collection('orders')
			.doc(userId)
			.collection('items')
			.get()
		const orders = res.docs.map(doc => doc.data())
		ordersState.set(orders)
	}
  
	const addNewOrder = data => async (dispatch, getState) => {
		const { auth } = getState()
		const user = auth.user
		const id = getNewUid()
  
		const res = await db
			.collection('orders')
			.doc(user.id)
			.collection('items')
			.doc(id)
			.set({
				...data,
				order_placed: new Date().toISOString(),
				shipping_address: user.address,
				shipping_name: user.name,
				order_id: id
			})
		const orders = res.docs.map(doc => doc.data())
		ordersState.set(orders)
	}

	return React.useMemo(() => ({
		orders: ordersState.get(),
		fetchOrders,
		addNewOrder
	}))
}