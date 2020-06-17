import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { PageContainer } from 'index.styles'

const Orders = ({fetchOrders, orders}) => {
  useEffect(() => {
    fetchOrders()
  },[fetchOrders])

  console.log('or', orders)

  return (
    <PageContainer>
      ord
    </PageContainer>
  )
}

Orders.propTypes = {
  fetchOrders: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
}

export default Orders
