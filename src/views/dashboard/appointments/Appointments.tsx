import { useContext } from 'react'
import { AppointmentsContext, UIContext } from '../../../contexts'
import { AddCircleButton } from '../components'
import OverlayModal from '../../../portals/overlay-add-modal/OverlayAddModal'
import styles from './appointments.module.css'
import close from '../../../assets/icons/close.svg'

function Appointments() {
	const { appointments } = useContext(AppointmentsContext)
	const { toggleDeactivatedModal } = useContext(UIContext)

	return (
		<>
			<OverlayModal />
			<AddCircleButton />
			<div className={`${styles.appointments} section`}>
				<h1 className='section__title'>Appointments</h1>
				<p className='section__subtitle'>Upcoming</p>
				<div
					className={`${styles.appointments__container} container grid justify-i-center`}
				>
					{appointments
						.filter(appointment => appointment.activated)
						.map(appointment => (
							<div key={appointment.id} className={styles.appointment}>
								<img
									src={close}
									className={styles.appointment__close}
									onClick={() => toggleDeactivatedModal()}
								/>

								<h3 className={styles.appointment__title}>
									{appointment.petName}
								</h3>
								<p className={styles.appointment__description}>
									Owner: {appointment.ownerName}
								</p>
								<p className={styles.appointment__description}>
									Date: {new Date(appointment.date).toLocaleDateString('en-US')}
								</p>
								<p className={styles.appointment__description}>
									Hour: {appointment.hour}
								</p>

								<span className={styles.appointment__button}>
									Update
									{/* <box-icon
								color='gray'
								class={styles.appointment__button_icon}
								name='right-arrow-alt'
							></box-icon> */}
								</span>
							</div>
						))}
				</div>
			</div>
		</>
	)
}

export default Appointments
