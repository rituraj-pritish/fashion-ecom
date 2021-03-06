import React from 'react'

import Button from '../../../ui/Button'
import Text from '../../../ui/Text'
import { CheckoutBoxContainer, Container, Line } from './CheckoutBox.styles'

const CheckoutBox = ({ cart, history, isAuthenticated, currency }) => {
  const FREE_DELIVERY_AMOUNT = (currency.rate * 100).toFixed(2)
  const DELIVERY_FEE = (currency.rate * 10).toFixed(2)

  let subTotal = cart
    .reduce(
      (total, { price, quantity }) => total + currency.rate * price * quantity,
      0
    )
    .toFixed(2)

  const handleCheckout = () => {
    if (!isAuthenticated) {
      history.push('/signin')
      return
    }
    history.push('/user/checkout')
  }

  return (
    <CheckoutBoxContainer>
      <Container>
        Subtotal: <p>{subTotal}</p> <br />
        Shipping:{' '}
        <p>
          {parseFloat(subTotal) > parseFloat(FREE_DELIVERY_AMOUNT)
            ? 'FREE'
            : `${currency.symbol} ${DELIVERY_FEE}`}
        </p>
        <Line />
        Total:{' '}
        <p>
          {currency.symbol}{' '}
          {subTotal > FREE_DELIVERY_AMOUNT
            ? subTotal
            : (parseFloat(subTotal) + parseFloat(DELIVERY_FEE)).toFixed(2)}
        </p>
        <Button onClick={handleCheckout}>Proceed to buy</Button>

        {subTotal < FREE_DELIVERY_AMOUNT && (
          <Text mt='2rem' lineHeight='22px'>
            Free shipping on orders over
            {'  '}
            <Text color='primary'>{`${currency.symbol} ${FREE_DELIVERY_AMOUNT}`}</Text>
          </Text>
        )}
      </Container>
    </CheckoutBoxContainer>
  )
}

export default CheckoutBox
