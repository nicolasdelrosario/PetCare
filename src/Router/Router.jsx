import { Route } from 'wouter'
import App from '../App/App'
import SignUp from '../pages/SignUp/SignUp'
import Home from '../pages/Home/Home'
import Appointments from '../pages/Appointments/Appointments'
import History from '../pages/History/History'
import Error from '../pages/Error/Error'

function Router() {
	return (
		<>
			<Route path='/' component={App} />
			<Route path='/signup' component={SignUp} />
			<Route path='/home' exact component={Home} />
			<Route path='/home/appointments' component={Appointments} />
			<Route path='/home/history' component={History} />
			<Route path='/error' component={Error} />
		</>
	)
}

export default Router
