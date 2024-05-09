import { Appointments, History, Home } from '../../dashboard'
import { Sidebar } from '../../layouts'
import { Error } from '../../error'

const router = {
	path: '/dashboard',
	element: <Sidebar />,
	errorElement: <Error />,
	children: [
		{
			path: 'appointments',
			element: <Appointments />,
		},
		{
			path: 'history',
			element: <History />,
		},
		{
			path: 'home',
			element: <Home />,
		},
	],
}

export default router
