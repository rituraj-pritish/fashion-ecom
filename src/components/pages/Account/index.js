import Account from './Account'
import { connect } from 'react-redux'
import { updateUserDetails } from 'redux/auth'

const mapStateToProps = ({ auth }) => ({
  user: auth.user
})

export default connect(mapStateToProps, { updateUserDetails })(Account)
