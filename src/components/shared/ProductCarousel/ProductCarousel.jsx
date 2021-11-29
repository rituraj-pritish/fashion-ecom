import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import setAlert from 'setAlert'
import HeartIcon from 'assets/icons/HeartIcon'
import SaleBanner from 'components/pages/Product/SaleBanner'
import {
	ProductCarouselContainer,
	CarouselItemContainer,
	ItemBottom,
	Title
} from './ProductCarousel.styles'
import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import Text from 'components/ui/Text'
import useAuthentication from 'hooks/useAuthentication'
import useCurrency from 'hooks/useCurrency'
import useWishlist from 'hooks/useWishlist'
import useCart from 'hooks/useCart'

const settings = {
	infinite: false,
	slidesToScroll: 5,
	slidesToShow: 5,
	speed: 500,
	swipeToSlide: true,
	arrows: true,
	rows: 1,
	responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		}
	]
}

const ProductCarousel = ({
	title,
	data,
	cartIds = [],
	wishlistIds = [],
	isLoading,
	inFocus,
	excludeProduct
}) => {
	const { addToWishlist, removeFromWishlist } = useWishlist()
	const { addToCart, removeFromCart } = useCart()
	const { currency } = useCurrency()
	const { isAuthenticated } = useAuthentication()
  
	const render = data
	// filter out out of stock products
		.filter(product => {
			if (excludeProduct === product.id) return null
			const variant = Object.values(product.variants).find(
				({ stock }) => stock > 0
			)
			if (!variant) return null
			return product
		})
		.map(product => {
			const { name, variants, id, sale } = product
			const { price, images, id: variantId } = variants[
				Object.values(variants).find(({ stock }) => stock > 0).id
			]

			const isInCart = cartIds.find(id => id === variantId)
			const isInWishlist = wishlistIds.find(id => id === product.id)

			const handleCartBtn = e => {
				if (isInCart) return
				addToCart({
					productId: id,
					variantId,
					imageUrl: images[0],
					name,
					price,
					quantity: 1
				})
			}

			const handleWishlist = () => {
				if (!isAuthenticated) {
					setAlert('Login to continue', 'danger')
					return
				}

				if (isInWishlist) {
					removeFromWishlist(id)
				} else {
					addToWishlist({
						productId: id,
						variantId,
						imageUrl: images[0],
						name,
						price,
						quantity: 1
					})
				}
			}

			return (
				<CarouselItemContainer key={id}>
					<Link to={`/product/${id}/variant/${variantId}`}>
						<LazyLoad
							className='lazyload'
							offsetBottom={250}
							offsetRight={2000}
						>
							<img src={images[0]} alt={name} />
						</LazyLoad>
					</Link>
					{sale && <SaleBanner />}
					<ItemBottom>
						<Icon
							className='wishlist-icon'
							color={isInWishlist ? 'red' : 'lightGrey'}
							onClick={handleWishlist}
						>
							<HeartIcon />
						</Icon>
						<Text fontWeight='bold'>{name}</Text>
						<Text mt='0.5rem' mb='1.5rem'>
							{`${currency.symbol} ${(currency.rate * price).toFixed(2)}`}
						</Text>
						<Button
							onClick={handleCartBtn}
							variant={isInCart ? 'secondary' : 'primary'}
							minHeight='35px'
							height='auto'
							isLoading={isLoading && inFocus === variantId}
						>
							{isInCart ? 'ADDED TO CART' : 'ADD TO CART'}
						</Button>
					</ItemBottom>
				</CarouselItemContainer>
			)
		})

	return (
		<ProductCarouselContainer>
			<Title>{title[0].toUpperCase() + title.slice(1)}</Title>
			<Slider {...settings}>{render}</Slider>
		</ProductCarouselContainer>
	)
}

export default ProductCarousel
