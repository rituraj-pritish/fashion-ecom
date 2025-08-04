import React from 'react'
import PropTypes from 'prop-types'
import StripeCheckout from 'react-stripe-checkout'

import Button from '../../../atoms/Button'

const PaymentButton = ({ amount, onOrderComplete, currency }) => {
  const handleToken = () => {
    onOrderComplete()
  }

  return (
    <StripeCheckout
      name='Fashion'
      description={`Payment of ${currency.symbol} ${(
        currency.rate * amount
      ).toFixed(2)}`}
      currency={currency.code}
      amount={(currency.rate * amount).toFixed(2) * 100}
      token={handleToken}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      allowRememberMe={false}
    >
      <Button fullWidth>Checkout</Button>
    </StripeCheckout>
  )
}

PaymentButton.propTypes = {
  amount: PropTypes.number.isRequired,
  onOrderComplete: PropTypes.func.isRequired,
  currency: PropTypes.object.isRequired
}

export default PaymentButton
