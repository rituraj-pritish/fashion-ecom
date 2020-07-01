import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { PageContainer } from 'index.styles'
import OrdersList from './OrdersList'
import {
  OrdersWrapper,
  SpinnerWrapper
} from './OrdersProductList/Orders.styled'
import Spinner from 'components/shared/Spinner' 

const Orders = ({ fetchOrders, orders, isLoading }) => {
  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  return (
    <PageContainer>
      <OrdersWrapper>
        {isLoading ? (
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

Orders.propTypes = {
  fetchOrders: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default Orders
