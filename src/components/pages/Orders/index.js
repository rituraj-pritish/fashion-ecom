import Orders from './Orders'
import { connect } from 'react-redux'
import { fetchOrders } from 'redux/user'

const mapStateToProps = ({user}) => ({
  orders: user.orders
})

export default connect(mapStateToProps, { fetchOrders })(Orders)
