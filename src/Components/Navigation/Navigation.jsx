import styles from './navigation.module.css'
import { Link } from 'wouter'

export default function Navigation({ activeNav, setActiveNav }) {
	const toggleNav = url => setActiveNav(url)

	return (
		<div className={styles.nav__container}>
			<nav className={styles.nav}>
				<Link to='/home'>
					<h3 className={styles.nav__title}>PetCare</h3>
				</Link>
				<ul className={`${styles.nav__list} grid`}>
					<li className={styles.nav__item}>
						<Link
							className={`${styles.nav__link} ${
								activeNav === '/home' ? styles.active__link : ''
							}`}
							onClick={() => toggleNav('/home')}
							to='/home'
						>
							Home
						</Link>
					</li>
					<li className={styles.nav__item}>
						<Link
							className={`${styles.nav__link} ${
								activeNav === '/home/appointments' ? styles.active__link : ''
							}`}
							onClick={() => toggleNav('/home/appointments')}
							to='/home/appointments'
						>
							Appointments
						</Link>
					</li>
					<li className={styles.nav__item}>
						<Link
							className={`${styles.nav__link} ${
								activeNav === '/home/history' ? styles.active__link : ''
							}`}
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
