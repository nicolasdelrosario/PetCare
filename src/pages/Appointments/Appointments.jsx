import './Appointments.css'
import { useState } from 'react'
import { toast } from 'sonner'
import useLocalStorage from '../../hooks/useLocalStorage'
import {
	Navigation,
	CreateModalButton,
	UpdateModal,
	Modal,
} from '../../Components'

function Appointments() {
	const [activeNav, setActiveNav] = useState('/home/appointments')
	const [createModal, setCreateModal] = useState(false)
	const [deleteModal, setDeleteModal] = useState(false)
	const [updateModal, setUpdateModal] = useState(false)
	const [selectedAppointmentId, setSelectedAppointmentId] = useState(null)
	const [selectedAppointment, setSelectedAppointment] = useState(null)
	const [dataAppointments, setDataAppointments] = useLocalStorage(
		'appointments',
		[]
	)

	const toggleCreateModal = () => setCreateModal(!createModal)

	const toggleDeleteModal = id => {
		setSelectedAppointmentId(id)
		setDeleteModal(!deleteModal)
	}

	const toggleUpdateModal = appointment => {
		setSelectedAppointment(appointment)
		setUpdateModal(!updateModal)
	}

	const createNewAppointment = appointment => {
		const newAppointment = {
			...appointment,
			id: dataAppointments.length + 1,
			appointmentStatus: true,
		}

		const updatedAppointments = [...dataAppointments, newAppointment]
		setDataAppointments(updatedAppointments)

		toast.success('Appointment Created Successfully', { duration: 2500 })
		toggleCreateModal()
	}

	const deleteAnAppointment = () => {
		if (selectedAppointmentId) {
			const updatedAppointments = dataAppointments.map(appointment =>
				appointment.id === selectedAppointmentId
					? { ...appointment, appointmentStatus: false }
					: appointment
			)
			setDataAppointments(updatedAppointments)
			setSelectedAppointmentId(null)
		}

		toast.success('Appointment Deleted Successfully', { duration: 2500 })
		toggleDeleteModal()
	}

	const updateAnAppointment = appointment => {
		const updatedAppointment = { ...selectedAppointment, ...appointment }

		const updatedAppointments = dataAppointments.map(appointment =>
			appointment.id === selectedAppointment.id
				? updatedAppointment
				: appointment
		)

		setDataAppointments(updatedAppointments)

		toast.success('Appointment Updated Successfully', {
			duration: 2500,
		})

		toggleUpdateModal()
	}

	return (
		<div className='flex'>
			<Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
			<div className='appointments section'>
				<h1 className='section__title'>Appointments</h1>
				<p className='section__subtitle'>Upcoming</p>
				{dataAppointments.every(
					appointment => !appointment.appointmentStatus
				) ? (
					<h2 className='text--center mt-6'>
						There are no upcoming appointments
					</h2>
				) : (
					<div className='appointments__container container grid justify-i-center'>
						{dataAppointments
							.filter(appointment => appointment.appointmentStatus)
							.map(appointment => (
								<div key={appointment.id} className='appointment'>
									<box-icon
										class='modal__close'
										name='x'
										color='gray'
										onClick={() => toggleDeleteModal(appointment.id)}
									></box-icon>

									<h3 className='appointment__title'>{appointment.petName}</h3>
									<p className='appointment__description'>
										Owner: {appointment.ownerName}
									</p>
									<p className='appointment__description'>
										Date:{' '}
										{new Date(appointment.appointmentDate).toLocaleDateString(
											'en-US'
										)}
									</p>
									<p className='appointment__description'>
										Hour: {appointment.appointmentHour}
									</p>

									<span
										className='appointment__button'
										onClick={() => toggleUpdateModal(appointment)}
									>
										Update
										<box-icon
											color='gray'
											class='appointment__button-icon'
											name='right-arrow-alt'
										></box-icon>
									</span>
								</div>
							))}
					</div>
				)}

				<CreateModalButton
					createNewAppointment={createNewAppointment}
					activeModal={createModal}
					toggleModal={toggleCreateModal}
				/>
				<Modal
					event={deleteAnAppointment}
					activeModal={deleteModal}
					toggleModal={toggleDeleteModal}
					title={'Are you sure you want to delete this appointment?'}
					subtitle={'This action can be undone'}
					message={'Delete Appointment'}
				/>
				<UpdateModal
					updateAnAppointment={updateAnAppointment}
					appointment={selectedAppointment}
					activeModal={updateModal}
					toggleModal={toggleUpdateModal}
				/>
			</div>
		</div>
	)
}

export default Appointments
