import styles from './modal.module.css'

export default function Modal({
	event,
	activeModal,
	toggleModal,
	title,
	subtitle,
	message,
}) {
	return (
		<div
			className={`${styles.modal} ${activeModal ? styles.active__modal : ''}`}
		>
			<div className={styles.modal__content}>
				<box-icon
					class={styles.modal__close}
					name='x'
					onClick={() => toggleModal()}
				></box-icon>

				<h3 className={styles.modal__title}>{title}</h3>
				<p className={styles.modal__description}>{subtitle}</p>
				<button
					className={`${styles.modal__button} button`}
					type='submit'
					onClick={() => event()}
				>
					{message}
				</button>
			</div>
		</div>
	)
}
