import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'

import HeartIcon from 'assets/icons/HeartIcon'
import SaleBanner from '../../Product/SaleBanner'
import {
	ItemBottom,
	ProductItemContainer,
	Wishlist
} from './ProductItem.styles'
import setAlert from 'setAlert'
import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import useAuthentication from 'hooks/useAuthentication'
import useCurrency from 'hooks/useCurrency'

const ProductItem = ({
	product,
	addToCart,
	addToWishlist,
	cart,
	wishlist,
	isLoading,
	inFocus
}) => {
	const { currency } = useCurrency()
	const { isAuthenticated } = useAuthentication()
  
	const { name, variants, id, sale } = product
	const variant = variants[Object.keys(variants)[0]]
	const image = variant.images[0]

	const isInCart = cart.find(item => item.variantId === variant.id)
	const isInWishlist = wishlist.find(item => item.productId === id)

	const handleCartBtn = e => {
		e.preventDefault()

		if (isInCart) return
		addToCart({
			productId: id,
			variantId: variant.id,
			price: variant.price,
			name,
			imageUrl: image,
			quantity: 1
		})
	}

	const handleWishlist = () => {
		if (!isAuthenticated) {
			setAlert('Login to add to wishlist', 'danger')
			return
		}
		if (isInWishlist) return

		addToWishlist({
			productId: id,
			variantId: variant.id,
			price: variant.price,
			name,
			imageUrl: image
		})
	}

	return (
		<ProductItemContainer>
			<Link to={`/product/${id}/variant/${variant.id}`}>
				<LazyLoad className='lazyload'>
					<img src={image} alt={name} />
				</LazyLoad>
			</Link>
			{sale && <SaleBanner />}
			<ItemBottom>
				<Wishlist>
					<Icon
						onClick={handleWishlist}
						color={isInWishlist ? 'red' : 'lightGrey'}
					>
						<HeartIcon />
					</Icon>
				</Wishlist>

				<h3>{name}</h3>
				<p>
					{`${currency.symbol} ${(variant.price * currency.rate).toFixed(2)}`}
				</p>
				<Button
					onClick={handleCartBtn}
					variant={isInCart ? 'secondary' : 'primary'}
					minHeight='35px'
					height='auto'
					isLoading={isLoading && inFocus === variant.id}
				>
					{isInCart ? 'ADDED TO CART' : 'ADD TO CART'}
				</Button>
			</ItemBottom>
		</ProductItemContainer>
	)
}

ProductItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		brand: PropTypes.string.isRequired,
		variants: PropTypes.object.isRequired
	}).isRequired,
	addToCart: PropTypes.func.isRequired,
	addToWishlist: PropTypes.func.isRequired,
	cart: PropTypes.array.isRequired,
	wishlist: PropTypes.array.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	inFocus: PropTypes.string,
	isLoading: PropTypes.bool.isRequired,
	currency: PropTypes.object.isRequired
}

export default ProductItem
