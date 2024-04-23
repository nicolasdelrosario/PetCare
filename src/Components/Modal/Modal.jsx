import './Modal.css'

export default function Modal({
	event,
	activeModal,
	toggleModal,
	title,
	subtitle,
	message,
}) {
	return (
		<div className={activeModal ? 'modal active-modal' : 'modal'}>
			<div className='modal__content'>
				<box-icon
					class='modal__close'
					name='x'
					onClick={() => toggleModal()}
				></box-icon>

				<h3 className='modal__title'>{title}</h3>
				<p className='modal__description'>{subtitle}</p>
				<button
					className='modal__button button'
					type='submit'
					onClick={() => event()}
				>
					{message}
				</button>
			</div>
		</div>
	)
}
