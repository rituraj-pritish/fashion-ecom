import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import Button from '../../ui/Button'
import PaymentButton from './PaymentButton'
import {
  CardInfo,
  OrderSuccess,
  Amount,
  Container
} from './PaymentsPage.styles'
import { emptyCart } from '../../../redux/actions/userActions'
import { PageContainer } from '../../../index.styles'

const PaymentsPage = ({ cart, emptyCart }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const amount = cart.reduce(
    (total, curr) =>
      total + curr.product.variants[curr.variant].price * curr.qty,
    0
  )

  if (amount === 0) return <Redirect to='/' />

  return (
    <PageContainer>
      {!isOrderPlaced ? (
        <Container>
          <Amount>
            Total payable amount:
            <span>$ {amount}</span>
          </Amount>
          <PaymentButton
            amount={amount}
            setIsOrderPlaced={setIsOrderPlaced}
            emptyCart={emptyCart}
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

const mapStateToProps = state => ({
  cart: state.user.cart
})

export default connect(mapStateToProps, { emptyCart })(PaymentsPage)
