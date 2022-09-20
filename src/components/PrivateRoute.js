import useAuthentication from 'hooks/useAuthentication'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({
	component: Component,
	...rest
}) => {
	const { isAuthenticated, isLoading } = useAuthentication()

	return (
		<Route
			{...rest}
			render={props =>
				!isAuthenticated && !isLoading ? <Redirect to='/' /> : <Component {...props} />
			}
		/>
	)
}

export default PrivateRoute
