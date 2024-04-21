import { Route, Redirect } from 'wouter'

function PrivateRoute({ children, isLoggedIn, ...rest }) {
	return (
		<Route
			{...rest}
			component={({ params }) =>
				isLoggedIn ? (
					children
				) : (
					<Redirect to={`/login?redirect=${encodeURIComponent(params.rest)}`} />
				)
			}
		/>
	)
}

export default PrivateRoute
