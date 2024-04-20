import { useState } from 'react'

function CreateModal({ createNewAppointment, activeModal, toggleModal }) {
	const [age, setAge] = useState('')
	const [date, setDate] = useState('')
	const [hour, setHour] = useState('')
	const [ownerName, setOwnerName] = useState('')
	const [petName, setPetName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [reason, setReason] = useState('')
	const [sex, setSex] = useState('')
	const [species, setSpecies] = useState('')

	const formattedDate = new Date(date).toLocaleDateString('en-US')

	const handleSubmitAppointment = e => {
		e.preventDefault()
		const appointmentCreated = {
			appointmentDate: formattedDate,
			appointmentHour: hour,
			appointmentReason: reason,
			ownerName,
			petAge: age,
			petName,
			petSex: sex,
			petSpecies: species,
			phoneNumber,
		}

		createNewAppointment(appointmentCreated)

		toggleModal()
	}

	return (
		<div className={activeModal ? 'modal active-modal' : 'modal'}>
			<div className='modal__content'>
				<box-icon
					class='modal__close'
					name='x'
					onClick={toggleModal}
				></box-icon>

				<h3 className='modal__title'>Create a new appointment</h3>
				<p className='modal__description'>please fill out this form</p>

				<form
					className='form flex flex--column'
					onSubmit={handleSubmitAppointment}
				>
					<div className='modal__grid grid'>
						<div className='form__input-container flex flex--column'>
							<label>Pet Name:</label>
							<input
								className='form__input'
								type='text'
								placeholder='Name'
								value={petName}
								onChange={e => setPetName(e.target.value)}
							/>
						</div>
						<div className='form__input-container flex flex--column'>
							<label>Owner&#39;s Name:</label>
							<input
								className='form__input'
								type='text'
								placeholder="Owner's Name"
								value={ownerName}
								onChange={e => setOwnerName(e.target.value)}
							/>
						</div>
					</div>

					<div className='modal__grid grid'>
						<div className='form__input-container flex flex--column'>
							<label>Phone Number: </label>
							<input
								className='form__input'
								type='text'
								placeholder='Phone Number'
								value={phoneNumber}
								onChange={e => setPhoneNumber(e.target.value)}
							/>
						</div>
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

					<div className='modal__grid grid'>
						<div className='form__input-container flex flex--column'>
							<label>Species: </label>
							<input
								className='form__input'
								type='text'
								placeholder='Species'
								value={species}
								onChange={e => setSpecies(e.target.value)}
							/>
						</div>
						<div className='form__input-container flex flex--column'>
							<label>Age: </label>
							<input
								className='form__input'
								type='text'
								placeholder='Age'
								value={age}
								onChange={e => setAge(e.target.value)}
							/>
						</div>
					</div>

					<div className='modal__grid grid'>
						<div className='form__input-container flex flex--column'>
							<label>Hour: </label>
							<input
								className='form__input'
								type='time'
								placeholder='Phone Number'
								value={hour}
								onChange={e => setHour(e.target.value)}
							/>
						</div>
						<div className='form__input-container flex flex--column'>
							<label>Date: </label>
							<input
								className='form__input'
								type='date'
								value={date}
								onChange={e => setDate(e.target.value)}
							/>
						</div>
					</div>

					<label>Reason:</label>
					<textarea
						className='form__input form__textarea'
						placeholder='Reason'
						cols='60'
						rows='2'
						value={reason}
						onChange={e => setReason(e.target.value)}
					></textarea>

					<button className='button' type='submit'>
						Create Appointment
					</button>
				</form>
			</div>
		</div>
	)
}

export default CreateModal
