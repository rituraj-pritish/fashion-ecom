import React, { useState } from 'react'
import { connect } from 'react-redux'
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

const PaymentsPage = ({ cart }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const amount = cart.reduce(
    (total, curr) =>
      total + curr.product.variants[curr.variant].price * curr.quantity,
    0
  )

  return (
    <PageContainer>
      {!isOrderPlaced ? (
        <Container>
          <Amount>
            Total payable amount:
            <span>$ {amount}</span>
          </Amount>
          <PaymentButton amount={amount} setIsOrderPlaced={setIsOrderPlaced} />

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

const mapStateToProps = state => ({
  cart: state.products.cart
})

export default connect(mapStateToProps)(PaymentsPage)
