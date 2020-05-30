import React from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'

import setAlert from 'setAlert'
import HeartIcon from '../../assets/icons/HeartIcon'
import SaleBanner from '../pages/Product/SaleBanner'
import {
  ProductCarouselContainer,
  CarouselItemContainer,
  ItemBottom,
  Title
} from './ProductCarousel.styles'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Text from '../ui/Text'

const params = {
  slidesPerView: 2,
  breakpoints: {
    600: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    800: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    1000: {
      slidesPerView: 5,
      slidesPerGroup: 5
    }
  },
  lazy: true,
  slidesPerGroup: 2,
  loop: false,
  spaceBetween: 20,
  containerClass: 'carousel-container',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}

const ProductCarousel = ({
  title,
  data,
  addToCart,
  addToWishlist,
  removeFromWishlist,
  cartIds,
  wishlistIds,
  isAuthenticated,
  isLoading,
  inFocus,
  excludeProduct
}) => {
  const render = data
    // filter out out of stock products
    .filter(product => {
      if(excludeProduct === product.id) return null
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
              $ {price}
              {price % 1 === 0 && '.00'}
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
      <Swiper {...params}>{render}</Swiper>
    </ProductCarouselContainer>
  )
}

ProductCarousel.propTypes = {
  data: PropTypes.array.isRequired
}

export default ProductCarousel
