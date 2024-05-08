import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { router } from './views'
import './css/variables.css'
import './css/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<>
			<Toaster />
			<RouterProvider router={router} />
		</>
	</React.StrictMode>
)
