import { Link } from 'wouter'
import './Navigation.css'

export default function Navigation({ activeNav, setActiveNav }) {
	const toggleNav = url => setActiveNav(url)

	return (
		<div className='nav__container'>
			<nav className='nav'>
				<Link to='/home'>
					<h3 className='nav__title'>PetCare</h3>
				</Link>
				<ul className='nav__list grid'>
					<li className='nav__item'>
						<Link
							className={
								activeNav === '/home' ? 'nav__link active__link' : 'nav__link'
							}
							onClick={() => toggleNav('/home')}
							to='/home'
						>
							Home
						</Link>
					</li>
					<li className='nav__item'>
						<Link
							className={
								activeNav === '/home/appointments'
									? 'nav__link active__link'
									: 'nav__link'
							}
							onClick={() => toggleNav('/home/appointments')}
							to='/home/appointments'
						>
							Appointments
						</Link>
					</li>
					<li className='nav__item'>
						<Link
							className={
								activeNav === '/home/history'
									? 'nav__link active__link'
									: 'nav__link'
							}
							onClick={() => toggleNav('/home/history')}
							to='/home/history'
						>
							History
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
