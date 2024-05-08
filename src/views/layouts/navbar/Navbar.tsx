import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavItem } from '../components/nav-item'
import styles from './navbar.module.css'
import menu from '../../../assets/icons/menu.svg'
import close from '../../../assets/icons/close.svg'


const Navbar = () => {
	// Toggle menu
	const [toggle, setToggle] = useState(false)

	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} container`}>
				<Link to='/' className={styles.nav__logo}>
					PetCare
				</Link>
				<div
					className={`${styles.nav__menu} ${toggle ? styles.show__menu : ''}`}
				>
					<ul className={styles.nav__list}>
						<li className='text--center'>
							<NavItem to='/login'>Login</NavItem>
						</li>
						<li className='text--center'>
							<NavItem to='/signup'>Signup</NavItem>
						</li>
					</ul>
					<img src={close} className={styles.nav__close} onClick={() => setToggle(!toggle)} />
				</div>

				<div className={styles.nav__toggle} onClick={() => setToggle(!toggle)}>
					<img src={menu} className={styles.nav__icon} />
				</div>
			</nav>
		</header>
	)
}

export default Navbar
