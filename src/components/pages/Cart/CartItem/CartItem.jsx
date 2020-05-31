import React from 'react'
import LazyLoad from 'react-lazy-load'

import QuantityCounter from 'components/shared/QuantityCounter'
import Button from 'components/ui/Button'
import MoonLoader from 'react-spinners/MoonLoader'

import Icon from '../../../ui/Icon'
import Text from '../../../ui/Text'
import TrashIcon from '../../../../assets/icons/TrashIcon'
import { CartItemContainer, Details, Remove, Loader } from './CartItem.styles'
import { Link } from 'react-router-dom'

const CartItem = ({
  page,
  updateCart,
  removeFromCart,
  removeFromWishlist,
  imageUrl,
  price,
  productId,
  variantId,
  name,
  quantity,
  isLoading,
  isSavedForLater,
  saveForLater,
  backToCart,
  currency
}) => {
  const handleRemove = () => {
    if (page === 'cart') {
      removeFromCart(variantId)
    } else {
      removeFromWishlist(productId)
    }
  }

  const secondaryCallToAction =
    page === 'cart' ? (
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

  return (
    <CartItemContainer isLoading={isLoading}>
      {isLoading && (
        <Loader>
          <MoonLoader size={35} />
        </Loader>
      )}
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
              updateCart({ variantId, quantity: quantity + 1 })
            }}
            onDecrement={() => {
              if (quantity === 1) return
              updateCart({ variantId, quantity: quantity - 1 })
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
        <Icon width='16px' onClick={handleRemove}>
          <TrashIcon />
        </Icon>
        {false && secondaryCallToAction}
      </Remove>
    </CartItemContainer>
  )
}

export default CartItem
