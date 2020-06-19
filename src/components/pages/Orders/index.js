import Orders from './Orders'
import { connect } from 'react-redux'
import { fetchOrders } from 'redux/user'

const mapStateToProps = ({user}) => ({
  orders: user.orders,
  isLoading: user.isLoading
})

export default connect(mapStateToProps, { fetchOrders })(Orders)
