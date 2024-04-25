import styles from './history.module.css'
import { useState } from 'react'
import { toast } from 'sonner'
import useLocalStorage from '../../hooks/useLocalStorage'
import { Navigation, Modal } from '../../Components'

function History() {
	const [activeNav, setActiveNav] = useState('/home/history')
	const [recoverModal, setRecoverModal] = useState(false)
	const [selectedAppointmentId, setSelectedAppointmentId] = useState(null)
	const [dataAppointments, setDataAppointments] = useLocalStorage(
		'appointments',
		[]
	)

	const toggleRecoverModal = id => {
		setSelectedAppointmentId(id)
		setRecoverModal(!recoverModal)
	}

	const recoverAnAppointment = () => {
		if (selectedAppointmentId) {
			const updatedAppointments = dataAppointments.map(appointment =>
				appointment.id === selectedAppointmentId
					? { ...appointment, appointmentStatus: true }
					: appointment
			)
			setDataAppointments(updatedAppointments)
			setSelectedAppointmentId(null)
		}

		toast.success('Appointment Recovered Successfully', { duration: 2500 })
		toggleRecoverModal()
	}

	return (
		<section className='flex'>
			<Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
			<div className={`${styles.histories} section`}>
				<h1 className='section__title'>History</h1>
				<p className='section__subtitle'>Previous Appointments</p>
				{dataAppointments.every(
					appointment => appointment.appointmentStatus
				) ? (
					<h2 className='text--center mt-6'>
						There are no appointments in the history.
					</h2>
				) : (
					<div
						className={`${styles.histories__container} container grid justify-i-center`}
					>
						{dataAppointments
							.filter(appointment => !appointment.appointmentStatus)
							.map(appointment => (
								<div key={appointment.id} className={styles.history}>
									<box-icon
										class={styles.modal__close}
										name='rotate-right'
										color='gray'
										onClick={() => toggleRecoverModal(appointment.id)}
									></box-icon>

									<h3 className={styles.history__title}>
										{appointment.petName}
									</h3>
									<p className={styles.history__description}>
										Owner: {appointment.ownerName}
									</p>
									<p className={styles.history__description}>
										Date:{' '}
										{new Date(appointment.appointmentDate).toLocaleDateString(
											'en-US'
										)}
									</p>
									<p className={styles.history__description}>
										Hour: {appointment.appointmentHour}
									</p>
								</div>
							))}
					</div>
				)}

				<Modal
					event={recoverAnAppointment}
					activeModal={recoverModal}
					toggleModal={toggleRecoverModal}
					title={'Are you sure you want to recover this appointment?'}
					subtitle={'This action can be undone.'}
					message={'Recover Appointment'}
				/>
			</div>
		</section>
	)
}

export default History
