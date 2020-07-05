import ForgotPassword from './ForgotPassword'
import { connect } from 'react-redux'
import { resetPassword } from 'redux/auth'

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: auth.isSendingResetLink,
  linkSent: auth.linkSent
})

export default connect(mapStateToProps, { resetPassword })(ForgotPassword)
