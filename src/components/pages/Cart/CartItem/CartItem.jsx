import React from 'react'
import LazyLoad from 'react-lazy-load'
import { connect } from 'react-redux'

import Button from 'components/ui/Button'
import MoonLoader from 'react-spinners/MoonLoader'
import {
  removeFromCart,
  updateCart,
  saveForLater,
  backToCart,
  addToCart
} from 'redux/cart'
import { removeFromWishlist } from 'redux/wishlist'
import Icon from '../../../ui/Icon'
import Text from '../../../ui/Text'
import PlusIcon from '../../../../assets/icons/PlusIcon'
import TrashIcon from '../../../../assets/icons/TrashIcon'
import MinusIcon from '../../../../assets/icons/MinusIcon'
import {
  CartItemContainer,
  Quantity,
  Details,
  Remove,
  Loader
} from './CartItem.styles'
import { Link } from 'react-router-dom'

const CartItem = ({
  page,
  updateCart,
  removeFromCart,
  removeFromWishlist,
  imageUrl,
  price,
  id,
  name,
  quantity,
  isLoading,
  isSavedForLater,
  saveForLater,
  backToCart
}) => {
  const handleRemove = () => {
    if (page === 'cart') {
      removeFromCart(id)
    } else {
      removeFromWishlist(id)
    }
  }

  const secondaryCallToAction =
    page === 'cart' ? (
      isSavedForLater ? (
        <Button variant='secondary' onClick={() => backToCart(id)}>Move to Cart</Button>
      ) : (
        <Button variant='secondary' onClick={() => saveForLater(id)}>Save for Later</Button>
      )
    ) : (
      <Button variant='secondary' onClick={() => {}}>move to cart</Button>
    )

  return (
    <CartItemContainer isLoading={isLoading}>
      {isLoading && (
        <Loader>
          <MoonLoader size={35} />
        </Loader>
      )}
      <LazyLoad className='lazyload'>
        <Link to={`/product/${id}`}>
          <img src={imageUrl} alt={name} />
        </Link>
      </LazyLoad>

      <Details>
        <p>{name}</p>

        {quantity && (
          <Quantity>
            <Icon
              m='5px'
              p='5px'
              onClick={() => {
                if (quantity === 1) return
                updateCart({ id, quantity: quantity - 1 })
              }}
            >
              <MinusIcon />
            </Icon>
            <Text m='5px' p='5px' mb='8px'>
              {quantity}
            </Text>
            <Icon
              m='5px'
              p='5px'
              onClick={() => updateCart({ id, quantity: quantity + 1 })}
            >
              <PlusIcon />
            </Icon>
          </Quantity>
        )}
      </Details>

      <Text fontWeight='bold'>
        ${' '}
        {quantity
          ? (Math.round(quantity * price * 100) / 100).toFixed(2)
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

const mapStateToProps = ({ cart, wishlist }, { page, id }) => ({
  isLoading:
    page === 'cart'
      ? cart.isLoading && cart.inFocus === id
      : wishlist.isLoading && wishlist.inFocus === id,
  isSavedForLater: cart.forLater.find(item => item.id === id)
})

export default connect(mapStateToProps, {
  updateCart,
  removeFromCart,
  removeFromWishlist,
  saveForLater,
  backToCart
})(CartItem)
