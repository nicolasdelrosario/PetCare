import { Navbar } from '../layouts'
import styles from './home.module.css'
import logo from '../../assets/icons/logo.svg'
function Main() {
	return (
		<>
			<Navbar />
			<div className={`${styles.home} section grid place--center`}>
				<div className={`${styles.home__container} container grid`}>
					<div className={styles.home__data}>
						<h1 className='section__title'>
							Welcome to PetCare: Your Partner in Pet Wellness
						</h1>
						<ul className={`${styles.home__list} flex flex--column`}>
							<li>
								<h3 className={styles.home__subtitle}>
									Efficient Scheduling at Your Fingertips
								</h3>
								<span className={styles.home__text}>
									Optimize your appointment booking process with our easy-to-use
									interface designed for veterinary clinics.
								</span>
							</li>
							<li>
								<h3 className={styles.home__subtitle}>
									Everything You Need to Manage Pet Care
								</h3>
								<span className={styles.home__text}>
									From appointment scheduling to client management, handle all
									your administrative tasks in one integrated platform.
								</span>
							</li>
							<li>
								<h3 className={styles.home__subtitle}>
									Seamless Integration, Simplified Operations
								</h3>
								<span className={styles.home__text}>
									Our tools are built to integrate smoothly with your existing
									systems, ensuring that your clinic operates more efficiently
									than ever.
								</span>
							</li>
						</ul>
					</div>
					<figure>
						<img className={styles.home__image} src={logo} alt='Logo' />
					</figure>
				</div>
			</div>
		</>
	)
}

export default Main
