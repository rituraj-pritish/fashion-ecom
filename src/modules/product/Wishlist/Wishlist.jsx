import React from 'react'
import { Link } from 'react-router-dom'

import { PageContainer } from '../../../index.styles'
import CartItem from '../Cart/CartItem'
import { Container } from './Wishlist.styles'
import Text from '../../../atoms/Text'
import Button from '../../../atoms/Button'
import useWishlist from 'hooks/useWishlist'

const Wishlist = () => {
	const { wishlistItems } = useWishlist()
	
	return (
		<PageContainer>
			{wishlistItems.length === 0 && (
				<>
					<Text m='2rem 0'>Your wishlist is empty</Text>
					<Button maxWidth='200px' m='0 auto'>
						<Link to='/'>Continue Shopping</Link>
					</Button>
				</>
			)}
			<Container>
				{wishlistItems.map((item, idx) => (
					<CartItem key={idx} {...item} page='wishlist' />
				))}
			</Container>
		</PageContainer>
	)
}

export default Wishlist
