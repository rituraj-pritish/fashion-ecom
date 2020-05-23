import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'

import { addToCart } from 'redux/cart'
import { addToWishlist } from 'redux/wishlist'
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

const ProductItem = ({
  product,
  addToCart,
  addToWishlist,
  cart,
  wishlist,
  isAuthenticated
}) => {
  const { name, variants, id, sale } = product
  const variant = variants[0]
  const image = variant.images[0]

  const isInCart = cart.find(item => item.product.id === id)
  const isInWishlist = wishlist.find(item => item.product.id === id)

  const handleCartBtn = e => {
    e.preventDefault()

    if (isInCart) return
    addToCart({ product, variant: 0, quantity: 1 })
  }

  const handleWishlist = () => {
    if (!isAuthenticated) {
      setAlert('Login to add to wishlist', 'danger')
      return
    }
    if (isInWishlist) return

    addToWishlist({ product, variant: 0 })
  }

  return (
    <ProductItemContainer>
      <Link to={`/product/${id}`}>
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
          $ {variant.price} {variant.price % 1 === 0 && '.00'}
        </p>
        <Button
          onClick={handleCartBtn}
          variant={isInCart ? 'secondary' : 'primary'}
          minHeight='35px'
          height='auto'
        >
          {isInCart ? 'ADDED TO CART' : 'ADD TO CART'}
        </Button>
      </ItemBottom>
    </ProductItemContainer>
  )
}

const mapStateToProps = state => ({
  cart: state.products.cart,
  wishlist: state.products.wishlist,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addToCart, addToWishlist })(
  ProductItem
)

ProductItem.propTypes = {
  item: PropTypes.object.isRequired
}
