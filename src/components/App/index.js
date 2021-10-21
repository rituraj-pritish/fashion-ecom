import { connect } from 'react-redux'

import { getCurrencies } from 'redux/currency'
import { authStateChangeHandler } from 'redux/auth'
import { getProducts } from 'redux/products'
import App from './App'

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  products: state.products.allProducts
})

export default connect(mapStateToProps, {
  getProducts,
  authStateChangeHandler,
  getCurrencies
})(App)