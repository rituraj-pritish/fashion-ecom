import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { PageContainer } from '../../../index.styles'
import CartItem from './CartItem'
import CheckoutBox from './CheckoutBox'
import { ItemsContainer, Container } from './Cart.styles'
import Text from '../../ui/Text'
import Button from '../../ui/Button'
import useCart from 'hooks/useCart'

const Cart = () => {
	const { cartItems } = useCart()
	
	return (
		<PageContainer>
			{!cartItems.length ? (
				<>
					<Text m='2rem 0'>Your cart is empty.</Text>
					<Button maxWidth='200px' m='0 auto'>
						<Link to='/'>Continue Shopping</Link>
					</Button>
				</>
			) : (
				<Container>
					<ItemsContainer>
						{cartItems.map(item => (
							<CartItem page='cart' key={item.variantId} {...item} />
						))}
						{/* 
            Saved For Later

            {forLater.map(item => (
              <CartItem page='cart' key={item.id} {...item} />
            ))} */}
					</ItemsContainer>
					<CheckoutBox cart={cartItems} />
				</Container>
			)}
		</PageContainer>
	)
}

Cart.propTypes = {
	cart: PropTypes.arrayOf(
		PropTypes.shape({
			productId: PropTypes.string.isRequired,
			variantId: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired
		}).isRequired
	)
}

export default Cart
