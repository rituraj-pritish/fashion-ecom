import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../ui/Button'
import PaymentButton from './PaymentButton'
import {
  CardInfo,
  OrderSuccess,
  Amount,
  Container
} from './PaymentsPage.styles'
import { PageContainer } from '../../../index.styles'

const PaymentsPage = ({ cart, emptyCart, currency }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const amount = cart.reduce(
    (total, curr) => total + curr.price * curr.quantity,
    0
  )

  const finalAmount = amount > 100 ? amount : amount + 10

  return (
    <PageContainer>
      {!isOrderPlaced ? (
        <Container>
          <Amount>
            Total payable amount:
            <span>{`${currency.symbol} ${(currency.rate * finalAmount).toFixed(
              2
            )}`}</span>
          </Amount>
          <PaymentButton
            amount={finalAmount}
            emptyCart={emptyCart}
            setIsOrderPlaced={setIsOrderPlaced}
            currency={currency}
          />

          <CardInfo>
            *email: email@email.com <br />
            *card no: 4242 4242 4242 4242 <br />
            *exp: 2/22 *cvc: 222
          </CardInfo>
        </Container>
      ) : (
        <Container>
          <OrderSuccess>
            Your order has been placed <br />
            Thankyou for shopping
          </OrderSuccess>
          <Link to='/'>
            <Button secondary fullWidth>
              Continue Shopping
            </Button>
          </Link>
        </Container>
      )}
    </PageContainer>
  )
}

export default PaymentsPage
