import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { UIProvider } from './contexts/ui-context/UIContext'
import { AppointmentsProvider } from './contexts/appointments-context/AppointmentsContext'
import { Toaster } from 'sonner'
import { router } from './views'
import './css/variables.css'
import './css/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<>
			<AppointmentsProvider>
				<UIProvider>
					<Toaster />
					<RouterProvider router={router} />
				</UIProvider>
			</AppointmentsProvider>
		</>
	</React.StrictMode>
)
