import './Appointments.css'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'
import Navigation from '../Navigation/Navigation'
import CreateModalButton from '../CreateModalButton/CreateModalButton'
import UpdateModal from '../UpdateModal.jsx/UpdateModal'
import Modal from '../Modal/Modal'

function Appointments() {
	const [activeNav, setActiveNav] = useState('/home/appointments')
	const [createModal, setCreateModal] = useState(false)
	const [deleteModal, setDeleteModal] = useState(false)
	const [updateModal, setUpdateModal] = useState(false)
	const [selectedAppointmentId, setSelectedAppointmentId] = useState(null)
	const [selectedAppointment, setSelectedAppointment] = useState(null)

	const toggleCreateModal = () => setCreateModal(!createModal)

	const toggleDeleteModal = id => {
		setSelectedAppointmentId(id)
		setDeleteModal(!deleteModal)
	}

	const toggleUpdateModal = appointment => {
		setSelectedAppointment(appointment)
		setUpdateModal(!updateModal)
	}

	const [dataAppointments, setDataAppointments] = useState([])

	const createNewAppointment = appointment => {
		const newAppointment = {
			id: dataAppointments.length + 1,
			appointmentDate: appointment.appointmentDate,
			appointmentHour: appointment.appointmentHour,
			appointmentReason: appointment.appointmentReason,
			appointmentStatus: true,
			ownerName: appointment.ownerName,
			petAge: appointment.petAge,
			petName: appointment.petName,
			petSex: appointment.petSex,
			petSpecies: appointment.petSpecies,
			phoneNumber: appointment.phoneNumber,
		}

		setDataAppointments(prevAppointments => [
			...prevAppointments,
			newAppointment,
		])

		toast.success('Appointment Created Successfully', {
			duration: 2500,
		})
	}

	const deleteAnAppointment = () => {
		if (selectedAppointmentId) {
			const appointmentToDelete = dataAppointments.find(
				appointment => appointment.id === selectedAppointmentId
			)
			appointmentToDelete.appointmentStatus = false
			setSelectedAppointmentId(null)
		}

		toast.success('Appointment Deleted Successfully', {
			duration: 2500,
		})

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
			<Toaster expand={true} position='top-right' />
			<Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
			<div className='appointments section'>
				<h1 className='section__title'>Appointments</h1>
				<p className='section__subtitle'>Upcoming</p>
				<div className='appointments__container container grid justify-i-center'>
					{dataAppointments
						.filter(appointment => appointment.appointmentStatus)
						.map(appointment => (
							<div key={appointment.id} className='appointment'>
								<box-icon
									class='modal__close'
									name='x'
									onClick={() => toggleDeleteModal(appointment.id)}
								></box-icon>

								<h3 className='appointment__title'>{appointment.petName}</h3>
								<p>{appointment.id}</p>
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
					subtitle={'This action can not be undone'}
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
