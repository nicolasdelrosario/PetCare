import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export default function UpdateModal({
	updateAnAppointment,
	appointment,
	activeModal,
	toggleModal,
}) {
	const [age, setAge] = useState('')
	const [date, setDate] = useState('')
	const [hour, setHour] = useState('')
	const [ownerName, setOwnerName] = useState('')
	const [petName, setPetName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [reason, setReason] = useState('')
	const [sex, setSex] = useState('')
	const [species, setSpecies] = useState('')

	useEffect(() => {
		if (appointment) {
			setAge(appointment.petAge)
			setDate(appointment.appointmentDate)
			setHour(appointment.appointmentHour)
			setOwnerName(appointment.ownerName)
			setPetName(appointment.petName)
			setPhoneNumber(appointment.phoneNumber)
			setReason(appointment.appointmentReason)
			setSex(appointment.petSex)
			setSpecies(appointment.petSpecies)
		}
	}, [appointment])

	const validateForm = e => {
		e.preventDefault()

		if (
			age.trim() === '' ||
			date.trim() === '' ||
			hour.trim() === '' ||
			ownerName.trim() === '' ||
			petName.trim() === '' ||
			phoneNumber.trim() === '' ||
			reason.trim() === '' ||
			sex.trim() === '' ||
			species.trim() === ''
		) {
			return toast.error('Fields cannot be empty.')
		} else {
			return handleUpdateAppointment()
		}
	}

	const handleUpdateAppointment = () => {
		const appointmentUpdated = {
			id: appointment.id,
			appointmentDate: date,
			appointmentHour: hour,
			appointmentReason: reason,
			ownerName,
			petAge: age,
			petName,
			petSex: sex,
			petSpecies: species,
			phoneNumber,
		}

		updateAnAppointment(appointmentUpdated)
		toggleModal()
	}

	const handleCloseModal = () => {
		setAge('')
		setDate('')
		setHour('')
		setOwnerName('')
		setPetName('')
		setPhoneNumber('')
		setReason('')
		setSex('')
		setSpecies('')
		toggleModal()
	}

	return (
		<div className={activeModal ? 'modal active-modal' : 'modal'}>
			<div className='modal__content'>
				<box-icon
					class='modal__close'
					name='x'
					onClick={handleCloseModal}
				></box-icon>
				<h3 className='modal__title'>Appointment Details</h3>
				<form onSubmit={validateForm} className='flex flex--column'>
					<div className='modal__grid grid'>
						<div className='form__input-container flex flex--column'>
							<p>Pet&#39;s Name:</p>
							<input
								className='form__input'
								type='text'
								value={petName}
								onChange={e => setPetName(e.target.value)}
							/>
						</div>
						<div className='form__input-container flex flex--column'>
							<p>Owner&#39;s Name:</p>
							<input
								className='form__input'
								type='text'
								value={ownerName}
								onChange={e => setOwnerName(e.target.value)}
							/>
						</div>
					</div>
					<div className='modal__grid grid'>
						<div className='form__input-container flex flex--column'>
							<p>Phone Number:</p>
							<input
								className='form__input'
								type='text'
								value={phoneNumber}
								onChange={e => setPhoneNumber(e.target.value)}
							/>
						</div>
						<div className='form__input-container flex flex--column'>
							<p>Sex:</p>
							<input
								className='form__input'
								type='text'
								value={sex}
								onChange={e => setSex(e.target.value)}
							/>
						</div>
					</div>
					<div className='modal__grid grid'>
						<div className='form__input-container flex flex--column'>
							<p>Species:</p>
							<input
								className='form__input'
								type='text'
								value={species}
								onChange={e => setSpecies(e.target.value)}
							/>
						</div>
						<div className='form__input-container flex flex--column'>
							<p>Age:</p>
							<input
								className='form__input'
								type='text'
								value={age}
								onChange={e => setAge(e.target.value)}
							/>
						</div>
					</div>
					<div className='modal__grid grid'>
						<div className='form__input-container flex flex--column'>
							<p>Hour:</p>
							<input
								className='form__input'
								type='time'
								value={hour}
								onChange={e => setHour(e.target.value)}
							/>
						</div>
						<div className='form__input-container flex flex--column'>
							<p>Date:</p>
							<input
								className='form__input'
								type='date'
								value={date}
								onChange={e => setDate(e.target.value)}
							/>
						</div>
					</div>
					<p>Reason:</p>
					<textarea
						className='form__input form__textarea'
						value={reason}
						onChange={e => setReason(e.target.value)}
						cols='30'
						rows='3'
					></textarea>

					<button className='button'>Save Changes</button>
				</form>
			</div>
		</div>
	)
}
