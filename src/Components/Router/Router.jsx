import { Route } from 'wouter'
import App from '../../App/App'
import SignUp from '../SignUp/SignUp'
import Home from '../Home/Home'
import Appointments from '../Appointments/Appointments'
import History from '../History/History'
import Error from '../Error/Error'

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
