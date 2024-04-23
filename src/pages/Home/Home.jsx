import { useState } from 'react'
import './Home.css'
import { Navigation } from '../../Components'

function Home() {
	const [activeNav, setActiveNav] = useState('/home')

	return (
		<div className='flex'>
			<Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
			<div className='home grid place--center'>
				<h1 className='section__title'>Hello, welcome back!</h1>
				<p className='section__subtitle'>Are you looking for something?</p>
			</div>
		</div>
	)
}

export default Home
