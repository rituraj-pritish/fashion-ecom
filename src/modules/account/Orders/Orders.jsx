import React, { useEffect } from 'react'

import { PageContainer } from 'index.styles'
import OrdersList from './OrdersList'
import {
	OrdersWrapper,
	SpinnerWrapper
} from './OrdersProductList/Orders.styled'
import Spinner from 'components/Spinner' 
import useOrders from 'hooks/useOrders'

const Orders = () => {
	const { orders, fetchOrders } = useOrders()

	useEffect(() => {
		fetchOrders()
	}, [])

	return (
		<PageContainer>
			<OrdersWrapper>
				{!orders ? (
					<SpinnerWrapper>
						<Spinner size={35} />
					</SpinnerWrapper>
				) : (
					<OrdersList orders={orders} />
				)}
			</OrdersWrapper>
		</PageContainer>
	)
}

export default Orders
