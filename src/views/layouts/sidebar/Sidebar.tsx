import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './sidebar.module.css'

function Sidebar() {
	const [activeNav, setActiveNav] = useState('/dashboard/home')
	const toggleNav = (url: string) => setActiveNav(url)

	return (
		<div className='flex justify-between'>
			<div className={styles.nav__container}>
				<nav className={styles.nav}>
					<Link to='/dashboard/home'>
						<h3 className={styles.nav__title}>PetCare</h3>
					</Link>
					<ul className={`${styles.nav__list} grid`}>
						<li className={styles.nav__item}>
							<Link
								className={`${styles.nav__link} ${
									activeNav === '/dashboard/home' ? styles.active__link : ''
								}`}
								onClick={() => toggleNav('/dashboard/home')}
								to='/dashboard/home'
							>
								Home
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link
								className={`${styles.nav__link} ${
									activeNav === '/dashboard/appointments'
										? styles.active__link
										: ''
								}`}
								onClick={() => toggleNav('/dashboard/appointments')}
								to='/dashboard/appointments'
							>
								Appointments
							</Link>
						</li>
						<li className={styles.nav__item}>
							<Link
								className={`${styles.nav__link} ${
									activeNav === '/dashboard/history' ? styles.active__link : ''
								}`}
								onClick={() => toggleNav('/dashboard/history')}
								to='/dashboard/history'
							>
								History
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className='min--100 grid place--center'>
				<Outlet />
			</div>
		</div>
	)
}

export default Sidebar
