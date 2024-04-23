import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router/Router'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Toaster expand={true} position='top-right' />
		<Router />
	</React.StrictMode>
)
