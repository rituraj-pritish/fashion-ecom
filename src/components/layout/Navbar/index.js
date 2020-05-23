import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './Navbar'

const mapStateToProps = state => ({
  cartCount: state.cart.itemIds.length
})

export default withRouter(connect(mapStateToProps)(Navbar))
