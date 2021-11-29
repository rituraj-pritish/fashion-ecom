import React from 'react'
import LazyLoad from 'react-lazy-load'

import QuantityCounter from 'components/shared/QuantityCounter'
import Button from 'components/ui/Button'

import Icon from '../../../ui/Icon'
import Text from '../../../ui/Text'
import TrashIcon from '../../../../assets/icons/TrashIcon'
import { CartItemContainer, Details, Remove } from './CartItem.styles'
import { Link } from 'react-router-dom'
import LoadingWrap from 'components/shared/LoadingWrap'
import theme from 'theme'
import useCart from 'hooks/useCart'
import useCurrency from 'hooks/useCurrency'
import useWishlist from 'hooks/useWishlist'

const CartItem = ({
	page,
	imageUrl,
	price,
	productId,
	variantId,
	name,
	quantity,
	isLoading,
	isSavedForLater,
}) => {
	const { currency } = useCurrency()
	const { 
		updateCart, 
		removeFromCart, 
		saveForLater, 
		backToCart 
	} = useCart()
	const { removeFromWishlist } = useWishlist()
	
	const handleRemove = () => {
		if (page === 'cart') {
			removeFromCart(variantId)
		} else {
			removeFromWishlist(productId)
		}
	}

	/* eslint-disable */
	const secondaryCallToAction = page === 'cart' ? (
    	isSavedForLater ? (
    		<Button variant='secondary' onClick={() => backToCart(variantId)}>
          Move to Cart
    		</Button>
    	) : (
    		<Button variant='secondary' onClick={() => saveForLater(variantId)}>
          Save for Later
    		</Button>
    	)
	) : (
    	<Button variant='secondary' onClick={() => {}}>
        move to cart
    	</Button>
	)
	/* eslint-enable */

	return (
		<LoadingWrap isLoading={isLoading}>
			<CartItemContainer>
				<LazyLoad className='lazyload'>
					<Link to={`/product/${productId}/variant/${variantId}`}>
						<img src={imageUrl} alt={name} />
					</Link>
				</LazyLoad>

				<Details>
					<p>{name}</p>

					{page === 'cart' && (
						<QuantityCounter
							count={quantity}
							onIncrement={() => {
								updateCart({ id: variantId, quantity: quantity + 1 })
							}}
							onDecrement={() => {
								if (quantity === 1) return
								updateCart({ id: variantId, quantity: quantity - 1 })
							}}
						/>
					)}
				</Details>

				<Text fontWeight='bold'>
					{`${currency.symbol} `}
					{quantity
						? (
							Math.round(quantity * (currency.rate * price) * 100) / 100
						).toFixed(2)
						: price}
				</Text>

				<Remove className='far fa-trash-alt'>
					<Icon
						width='16px'
						onClick={handleRemove}
						hoverColor={theme.colors.red}
					>
						<TrashIcon />
					</Icon>
					{false && secondaryCallToAction}
				</Remove>
			</CartItemContainer>
		</LoadingWrap>
	)
}

export default CartItem
