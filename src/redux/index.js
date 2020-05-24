import { combineReducers } from 'redux'
import auth from './auth'
import app from './app'
import products from './products'
import overlay from './overlay'
import cart from './cart'
import wishlist from './wishlist'

const appReducer =  combineReducers({
  app,
  products,
  auth,
  overlay,
  cart,
  wishlist
})

const rootReducer = (state, action) => {
  if(action.type === 'LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
