import './CreateModalButton.css'
import CreateModal from '../CreateModal/CreateModal'

export default function CreateModalButton({
	createNewAppointment,
	activeModal,
	toggleModal,
}) {
	return (
		<div>
			<button className='create__user-button' onClick={toggleModal}>
				<box-icon
					className='create__user-icon'
					color='white'
					name='plus'
				></box-icon>
			</button>

			<CreateModal
				activeModal={activeModal}
				toggleModal={toggleModal}
				createNewAppointment={createNewAppointment}
			/>
		</div>
	)
}
