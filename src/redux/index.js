import { combineReducers } from 'redux'
import auth from './auth'
import app from './app'
import products from './products'
import overlay from './overlay'
import cart from './cart'
import wishlist from './wishlist'

export default combineReducers({
  app,
  products,
  auth,
  overlay,
  cart,
  wishlist
})
