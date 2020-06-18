import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { PageContainer } from 'index.styles'
import OrdersList from './OrdersList'
import { OrdersWrapper } from './OrdersProductList/Orders.styled'

const Orders = ({ fetchOrders, orders }) => {
  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  return (
    <PageContainer>
      <OrdersWrapper>
        <OrdersList orders={orders} />
      </OrdersWrapper>
    </PageContainer>
  )
}

Orders.propTypes = {
  fetchOrders: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired
}

export default Orders
