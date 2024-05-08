import { NavLink, NavLinkProps } from 'react-router-dom'
import styles from './nav-item.module.css'

interface INavItem extends NavLinkProps {}

function NavItem({ to, children, ...rest }: INavItem) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive
					? `${styles.nav__link} ${styles.active_link}`
					: styles.nav__link
			}
			{...rest}
		>
			{children}
		</NavLink>
	)
}

export default NavItem
