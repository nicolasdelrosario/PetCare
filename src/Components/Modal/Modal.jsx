import styles from './modal.module.css'
import { Button } from '../../Components'

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
				<Button
					title={message}
					onClick={() => event()}
					styles={`${styles.modal__button} button`}
				/>
			</div>
		</div>
	)
}
