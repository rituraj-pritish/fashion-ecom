import { connect } from 'react-redux'

import Home from './Home'

const mapStateToProps = ({ products }) => ({
  products: products.allProducts
})

export default connect(mapStateToProps)(Home)
