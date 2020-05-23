import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { PageContainer } from '../../../index.styles'
import CartItem from './CartItem'
import CheckoutBox from './CheckoutBox'
import { ItemsContainer, Container } from './Cart.styles'
import Text from '../../ui/Text'
import Button from '../../ui/Button'

const Cart = ({ cart }) => {
  return (
    <PageContainer>
      {cart.length === 0 ? (
        <>
          <Text m='2rem 0'>Your cart is empty.</Text>
          <Button maxWidth='200px' m='0 auto'>
            <Link to='/'>Continue Shopping</Link>
          </Button>
        </>
      ) : (
        <Container>
          <ItemsContainer>
            {cart.map(item => (
              <CartItem page='cart' key={item.id} {...item} />
            ))}
          </ItemsContainer>
          <CheckoutBox cart={cart} />
        </Container>
      )}
    </PageContainer>
  )
}

const mapStateToProps = ({ cart }) => ({
  cart: cart.items
})

export default connect(mapStateToProps)(Cart)
