import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  isLoading,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && !isLoading ? <Redirect to='/' /> : <Component {...props} />
    }
  />
)

const mapStateToProps = ({ auth: { isAuthenticated, isLoading } }) => ({
  isAuthenticated,
  isLoading
})

export default connect(mapStateToProps)(PrivateRoute)
