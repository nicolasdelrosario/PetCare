import { useState } from 'react'
import Navigation from '../Navigation/Navigation'

function History() {
	const [activeNav, setActiveNav] = useState('/home/history')

	return (
		<section className='flex'>
			<Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
			<div className='history section'>
				<h1 className='section__title'>History</h1>
				<p className='section__subtitle'>Testing smth</p>
			</div>
		</section>
	)
}

export default History
