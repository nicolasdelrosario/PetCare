import styles from '../Modal/modal.module.css'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Field, Button } from '../../Components'

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
		<div
			className={`${styles.modal} ${activeModal ? styles.active__modal : ''}`}
		>
			<div className={styles.modal__content}>
				<box-icon
					class={styles.modal__close}
					name='x'
					onClick={handleCloseModal}
				></box-icon>

				<form onSubmit={validateForm} className='form flex flex--column'>
					<h3 className={styles.modal__title}>Appointment Details</h3>
					<div className={`${styles.modal__grid} grid`}>
						<Field
							label='Pet&#39;s Name:'
							placeholder='Name'
							type='text'
							value={petName}
							onChange={e => setPetName(e.target.value)}
						/>

						<Field
							label='Owner&#39;s Name:'
							placeholder="Owner's Name"
							type='text'
							value={ownerName}
							onChange={e => setOwnerName(e.target.value)}
						/>
					</div>
					<div className={`${styles.modal__grid} grid`}>
						<Field
							label='Phone Number:'
							placeholder='Phone Number'
							type='text'
							value={phoneNumber}
							onChange={e => setPhoneNumber(e.target.value)}
						/>
						<div className='form__input-container flex flex--column'>
							<label>Sex: </label>
							<select
								id='sex'
								name='sex'
								className='form__input'
								value={sex}
								onChange={e => setSex(e.target.value)}
							>
								<option value='' disabled>
									Sex
								</option>
								<option value='Male' key='Male'>
									Male
								</option>
								<option value='Female' key='Female'>
									Female
								</option>
							</select>
						</div>
					</div>
					<div className={`${styles.modal__grid} grid`}>
						<Field
							label='Species: '
							placeholder='Species'
							type='text'
							value={species}
							onChange={e => setSpecies(e.target.value)}
						/>

						<Field
							label='Age: '
							placeholder='Age'
							type='text'
							value={age}
							onChange={e => setAge(e.target.value)}
						/>
					</div>
					<div className={`${styles.modal__grid} grid`}>
						<Field
							label='Hour: '
							placeholder='Hour'
							type='time'
							value={hour}
							onChange={e => setHour(e.target.value)}
						/>

						<Field
							label='Date: '
							placeholder='Date'
							type='date'
							value={date}
							onChange={e => setDate(e.target.value)}
						/>
					</div>
					<p>Reason:</p>
					<textarea
						className='form__input form__textarea'
						value={reason}
						onChange={e => setReason(e.target.value)}
						cols='30'
						rows='3'
					></textarea>

					<Button title='Save Changes' />
				</form>
			</div>
		</div>
	)
}
