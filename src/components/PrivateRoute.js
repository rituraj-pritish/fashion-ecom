import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  auth: { isEmpty },
  loading,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isEmpty && !loading ? <Redirect to='/' /> : <Component {...props} />
    }
  />
);

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  loading: state.firebase.loading
});

export default connect(mapStateToProps)(PrivateRoute);
