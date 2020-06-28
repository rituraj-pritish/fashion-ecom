import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import OrdersProductList from '../OrdersProductList'
import {
  Order,
  TopSection,
  DeliveryDetail,
  BottomSection
} from './OrdersList.styled'
import Button from 'components/ui/Button'
import RateProducts from '../RateProducts'
import ReviewProductList from '../ReviewProductList/ReviewProductList'

const OrdersList = ({ orders }) => {
  if (!orders.length) return 'No orders placed yet'

  return orders.map(order => {
    const { order_placed, order_total, shipping_name } = order

    const orderPlaced = moment(order_placed)
    const currentDate = moment(new Date().toISOString())
    const dateDifference = currentDate.diff(orderPlaced, 'days')

    const deliveryDetail =
      dateDifference > 4
        ? `Delivered ${moment(orderPlaced)
            .add(3, 'days')
            .format('DD MMM YYYY')}`
        : `Arriving ${moment(orderPlaced).add(3, 'days').format('dddd')}`

    return (
      <Order>
        <TopSection>
          <div>
            <div>ORDER PLACED</div>
            <div>{moment(order_placed).format('DD MMM YYYY')}</div>
          </div>
          <div>
            <div>ORDER TOTAL</div>
            <div>{order_total}</div>
          </div>
          <div>
            <div>SHIP TO</div>
            <div>{shipping_name}</div>
          </div>
        </TopSection>

        <DeliveryDetail>{deliveryDetail}</DeliveryDetail>

        <BottomSection>
          <OrdersProductList {...order} />
          <div>
            <ReviewProductList {...order} />
            <RateProducts {...order} />
            {/* <Button variant='secondary'>
              View Details
            </Button> */}
          </div>
        </BottomSection>
      </Order>
    )
  })
}

OrdersList.propTypes = {
  orders: PropTypes.array.isRequired
}

export default OrdersList
