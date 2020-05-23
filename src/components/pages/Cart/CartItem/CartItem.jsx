import React from 'react'
import LazyLoad from 'react-lazy-load'
import { connect } from 'react-redux'

import { removeFromCart, updateCart } from 'redux/cart'
import { removeFromWishlist } from 'redux/wishlist'
import Icon from '../../../ui/Icon'
import Text from '../../../ui/Text'
import PlusIcon from '../../../../assets/icons/PlusIcon'
import TrashIcon from '../../../../assets/icons/TrashIcon'
import MinusIcon from '../../../../assets/icons/MinusIcon'
import { CartItemContainer, Quantity, Details, Remove } from './CartItem.styles'
import { Link } from 'react-router-dom'

const CartItem = ({
  page,
  item,
  updateCart,
  removeFromCart,
  removeFromWishlist
}) => {
  const {
    product: { variants, name, id },
    variant,
    quantity
  } = item
  const imageUrl = variants[variant].images[0]
  const price = variants[variant].price

  const handleRemove = () => {
    if (page === 'cart') {
      removeFromCart(id)
    } else {
      removeFromWishlist(id)
    }
  }

  return (
    <CartItemContainer>
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
                updateCart({ id: item.product.id, quantity: quantity - 1 })
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
              onClick={() => updateCart({ id: item.product.id, quantity: quantity + 1 })}
            >
              <PlusIcon />
            </Icon>
          </Quantity>
        )}
      </Details>

      <Text fontWeight='bold'>
        $ {quantity ? (Math.round(quantity * price * 100) / 100).toFixed(2) : price}
      </Text>

      <Remove onClick={handleRemove} className='far fa-trash-alt'>
        <Icon width='16px'>
          <TrashIcon />
        </Icon>
      </Remove>
    </CartItemContainer>
  )
}

export default connect(null, {
  updateCart,
  removeFromCart,
  removeFromWishlist
})(CartItem)
