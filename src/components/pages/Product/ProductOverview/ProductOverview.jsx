import React, { useState } from 'react'
import LazyLoad from 'react-lazy-load'
import { withRouter } from 'react-router-dom'

import returnImg from 'assets/images/return.webp'
import worldwideImg from 'assets/images/worldwide.webp'
import Button from '../../../ui/Button'
import Text from '../../../ui/Text'
import Icon from '../../../ui/Icon'
import PlusIcon from 'assets/icons/PlusIcon'
import MinusIcon from 'assets/icons/MinusIcon'
import HeartIcon from 'assets/icons/HeartIcon'
import StarIcon from 'assets/icons/StarIcon'
import Image from './Image'
import {
  SmallImages,
  SmallImage,
  ActionsContainer,
  ImagesContainer,
  ProductOverviewContainer,
  Variants,
  Variant,
  Rating,
  CartBtn,
  Policy,
  Wishlist
} from './ProductOverview.styles'
import { useEffect } from 'react'
import ProductDetails from '../ProductDetails'

const ProductOverview = ({
  product,
  variant,
  setVariant,
  cart,
  wishlist,
  addToCart,
  addToWishlist,
  isAuthenticated,
  setAlert,
  history
}) => {
  const { name, rating, brand, variants, id } = product

  const [currentImg, setCurrentImg] = useState()
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setCurrentImg(variants[variant].images[0])
    setPrice(variants[variant].price)
    setQuantity(1)
  }, [id, variant, variants])

  const images = variants[variant].images.map(imageUrl => {
    const isCurrentImage = imageUrl === currentImg
    return (
      <SmallImage
        key={imageUrl}
        isCurrentImage={isCurrentImage}
        onClick={() => setCurrentImg(imageUrl)}
      >
        <LazyLoad className='lazyload'>
          <img src={imageUrl} alt='img' />
        </LazyLoad>
      </SmallImage>
    )
  })

  const stars = []
  for (let i = 1; i <= rating; i++) {
    stars.push(
      <Icon key={i} color='golden'>
        <StarIcon />
      </Icon>
    )
  }

  const isInCart = cart.find(item => item.product.id === product.id)
  const isInWishlist = wishlist.find(item => item.product.id === product.id)

  const changeVariant = item => {
    const index = variants.indexOf(item)
    if (index === variant) return
    setVariant(index)
    setCurrentImg(variants[index].images[0])
    setPrice(variants[index].price)
  }

  const handleCartBtn = () => {
    if (isInCart) return
    addToCart({ product, variant, qty: quantity })
  }

  const handleWishlist = () => {
    if (!isAuthenticated) {
      setAlert('Login to continue', 'danger')
      return
    }
    if (isInWishlist) return
    addToWishlist({
      product,
      variant
    })
  }

  const handleBuy = e => {
    e.preventDefault()

    if (!isAuthenticated) {
      history.push('/signin')
      return
    }
    addToCart({ product, variant, qty: 1 })
    history.push('/user/cart')
  }

  return (
    <ProductOverviewContainer>
      <div>
        <ImagesContainer>
          <SmallImages>{images}</SmallImages>
          <LazyLoad>
            <LazyLoad className='lazyload'>
              <Image src={currentImg} alt={name} />
            </LazyLoad>
          </LazyLoad>
        </ImagesContainer>
      </div>

      <ActionsContainer>
        <Text fontSize='3rem'>{name}</Text>
        <Text fontSize='1.5rem' color='grey' mt='-15px'>
          {brand.toUpperCase()}
        </Text>
        <Text fontSize='2.3rem'>
          $ {price}
          {price % 1 === 0 && '.00'}
        </Text>
        <Rating>{stars}</Rating>
        <Text fontSize='1.9rem' color='green'>
          In Stock
        </Text>
        {variants.length > 1 && (
          <Variants>
            {variants.map(item => (
              <Variant
                key={item.color}
                data-tip={item.variant[0].toUpperCase() + item.variant.slice(1)}
                onClick={() => changeVariant(item)}
                color={item.color}
              />
            ))}
          </Variants>
        )}
        <Policy>
          <span>
            <LazyLoad className='lazyload'>
              <img src={worldwideImg} alt='worldwide shipping' />
            </LazyLoad>
            <p>
              Worldwide <br /> Shipping
            </p>
          </span>
          <span>
            <LazyLoad className='lazyload'>
              <img src={returnImg} alt={'return policy'} />
            </LazyLoad>
            <p>
              30 Days
              <br />
              Return
            </p>
          </span>
        </Policy>

        <CartBtn>
          <div>
            <Icon
              width='10px'
              onClick={() => {
                if (quantity === 1) return
                setQuantity(quantity - 1)
              }}
            >
              <MinusIcon />
            </Icon>
            <Text mb='3px'>{quantity}</Text>
            <Icon width='10px' onClick={() => setQuantity(quantity + 1)}>
              <PlusIcon />
            </Icon>
          </div>
          <Button variant='secondary' onClick={handleCartBtn}>
            {isInCart ? 'ADDED TO CART' : 'ADD TO CART'}
          </Button>
        </CartBtn>

        <Button
          height='50px'
          fontWeight='bold'
          fontSize='2rem'
          letterSpacing='4px'
          onClick={handleBuy}
        >
          BUY NOW
        </Button>

        <Wishlist onClick={handleWishlist}>
          <Icon color={isInWishlist ? 'red' : 'lightGrey'} mr='1rem'>
            <HeartIcon />
          </Icon>
          <Text>{isInWishlist ? 'Added To Wishlist' : 'Add To Wishlist'}</Text>
        </Wishlist>
        <ProductDetails product={product} variant={variant} />
      </ActionsContainer>
    </ProductOverviewContainer>
  )
}

export default withRouter(ProductOverview)
