import { createBrowserRouter } from 'react-router-dom'
import { Main } from '..'
import { ForgotPassword, Login, Signup } from '../auth'
import { Error } from '../error'
import { router as DashboardRouter } from '../dashboard'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <Error />,
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <Error />,
	},
	{
		path: '/forgot-password',
		element: <ForgotPassword />,
		errorElement: <Error />,
	},
	{
		path: '/signup',
		element: <Signup />,
		errorElement: <Error />,
	},
	DashboardRouter,
])

export default router
