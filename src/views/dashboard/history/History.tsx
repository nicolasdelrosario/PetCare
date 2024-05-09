import { useContext } from 'react'
import { AppointmentsContext, UIContext } from '../../../contexts'
import styles from './history.module.css'
import close from '../../../assets/icons/close.svg'
import OverlayModal from '../../../portals/overlay-add-modal/OverlayAddModal'

function History() {
	const { appointments } = useContext(AppointmentsContext)
	const { toggleModal } = useContext(UIContext)

	return (
		<>
			<OverlayModal />
			<div className={`${styles.histories} section`}>
				<h1 className='section__title'>History</h1>
				<p className='section__subtitle'>Previous Appointments</p>
				<div
					className={`${styles.histories__container} container grid justify-i-center`}
				>
					{appointments
						.filter(appointment => !appointment.activated)
						.map(appointment => (
							<div key={appointment.id} className={styles.history}>
								<img
									src={close}
									className={styles.history__close}
									onClick={() => toggleModal()}
								/>

								<h3 className={styles.history__title}>{appointment.petName}</h3>
								<p className={styles.history__description}>
									Owner: {appointment.ownerName}
								</p>
								<p className={styles.history__description}>
									Date: {new Date(appointment.date).toLocaleDateString('en-US')}
								</p>
								<p className={styles.history__description}>
									Hour: {appointment.hour}
								</p>
							</div>
						))}
				</div>
			</div>
		</>
	)
}

export default History
