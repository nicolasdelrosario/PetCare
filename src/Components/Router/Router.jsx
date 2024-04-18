import { Route } from 'wouter'
import App from '../App/App'
import SignUp from '../SignUp/SignUp'
import Dashboard from '../Dashboard/Dashboard'
import Error from '../Error/Error'

function Router() {
	return (
		<>
			<Route path='/' component={App} />
			<Route path='/signup' component={SignUp} />
			<Route path='/dashboard' component={Dashboard} />
			<Route path='/error' component={Error} />
		</>
	)
}

export default Router
