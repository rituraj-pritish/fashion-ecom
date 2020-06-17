import React, { useState } from 'react'
import LazyLoad from 'react-lazy-load'
import ReactTooltip from 'react-tooltip'

import setAlert from 'setAlert'
import returnImg from 'assets/images/return.webp'
import worldwideImg from 'assets/images/worldwide.webp'
import Button from 'components/ui/Button'
import Text from 'components/ui/Text'
import Icon from 'components/ui/Icon'
import HeartIcon from 'assets/icons/HeartIcon'
import StarIcon from 'assets/icons/StarIcon'
import Image from 'components/shared/Image'
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
import QuantityCounter from 'components/shared/QuantityCounter'

const ProductOverview = ({
  product,
  cart,
  wishlist,
  addToCart,
  addToWishlist,
  isAuthenticated,
  history,
  cartLoading,
  variantId,
  currency
}) => {
  const { name, rating, brand, variants, id } = product

  const [variant, setVariant] = useState(variantId)
  const [currentImg, setCurrentImg] = useState()
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setVariant(variantId)
    ReactTooltip.rebuild()
    return () => {
      setVariant('')
    }
  }, [id, variantId])

  useEffect(() => {
    setCurrentImg(variants[variant]?.images[0])
    setPrice(variants[variant]?.price)
    setQuantity(1)
  }, [id, variant, variantId, variants])

  if (!variant) return 'loading'

  const images = variants[variant]?.images.map(imageUrl => {
    const isCurrentImage = imageUrl === currentImg
    return (
      <SmallImage
        key={imageUrl}
        isCurrentImage={isCurrentImage}
        onClick={() => setCurrentImg(imageUrl)}
      >
        <LazyLoad className='lazyload'>
          <Image src={imageUrl} alt='img' size='small' />
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

  const isInStock = variants[variant]?.stock > 0
  const isInCart = cart.find(item => item.variantId === variantId)
  const isInWishlist = wishlist.find(item => item.productId === id)

  const changeVariant = varId => {
    if (varId === variant) return
    setVariant(varId)
    setCurrentImg(variants[varId].images[0])
    setPrice(variants[varId].price)
    history.push(`/product/${id}/variant/${varId}`)
  }

  const handleCartBtn = () => {
    if (isInCart) return
    addToCart({
      productId: id,
      variantId,
      name,
      price,
      imageUrl: variants[variant].images[0],
      quantity: quantity
    })
  }

  const handleWishlist = () => {
    if (!isAuthenticated) {
      setAlert('Login to continue', 'danger')
      return
    }
    if (isInWishlist) return
    addToWishlist({
      productId: id,
      variantId,
      name,
      price,
      imageUrl: variants[variant].images[0]
    })
  }

  const handleBuy = e => {
    e.preventDefault()

    if (!isAuthenticated) {
      history.push('/signin')
      return
    }
    addToCart({
      productId: id,
      variantId,
      name,
      price,
      imageUrl: variants[variant].images[0],
      quantity: 1
    })
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
          {`${currency.symbol} ${(currency.rate * price).toFixed(2)}`}
        </Text>
        <Rating>{stars}</Rating>
        <Text fontSize='1.9rem' color={isInStock ? 'green' : 'red'}>
          {isInStock ? 'In Stock' : 'Out of stock'}
        </Text>

        <Variants>
          {Object.values(variants).map(item => (
            <Variant
              key={item.id}
              data-tip={item.variant[0].toUpperCase() + item.variant.slice(1)}
              onClick={() => changeVariant(item.id)}
              color={item.color}
            />
          ))}
        </Variants>

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
          <QuantityCounter
            disabled={!isInStock}
            count={quantity}
            setCount={setQuantity}
          />
          <Button
            variant='secondary'
            isLoading={cartLoading}
            disabled={!isInStock}
            onClick={handleCartBtn}
          >
            {isInCart ? 'ADDED TO CART' : 'ADD TO CART'}
          </Button>
        </CartBtn>

        <Button
          height='50px'
          fontWeight='bold'
          fontSize='2rem'
          letterSpacing='4px'
          onClick={handleBuy}
          disabled={!isInStock}
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

export default ProductOverview
