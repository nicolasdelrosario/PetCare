import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { Modal } from '../../components'
import { UIContext } from '../../contexts'

const modalRoot: HTMLElement = document.getElementById('overlays')!

function OverlayModal() {
	const { isDeactivatedModalOpen, toggleDeactivatedModal } =
		useContext(UIContext)

	return createPortal(
		<>
			{isDeactivatedModalOpen && (
				<Modal
					closeModal={toggleDeactivatedModal}
					event={toggleDeactivatedModal}
					title={'Are you sure you want to delete this appointment?'}
					subtitle={'This action can be undone'}
					text={'Delete Appointment'}
				/>
			)}
		</>,
		modalRoot
	)
}

export default OverlayModal
