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
      name='Blogg'
      description={`Payment of ${currency.symbol} ${(
        currency.rate * amount
      ).toFixed(2)}`}
      currency={currency.code}
      amount={(currency.rate * amount).toFixed(2) * 100}
      token={handleToken}
      stripeKey='pk_test_6MmX11WOCB7TLNjgyIQsEQN400FaACm2cQ'
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
