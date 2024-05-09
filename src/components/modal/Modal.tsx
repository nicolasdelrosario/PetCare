import { Button } from '../../components'
import styles from './modal.module.css'
import close from '../../assets/icons/close.svg'

interface ModalProps {
	closeModal: () => void
	event: () => void
	title: string
	subtitle: string
	text: string
}

function Modal({ closeModal, event, title, subtitle, text }: ModalProps) {
	return (
		<div className={`${styles.modal}`}>
			<div className={styles.modal__content}>
				<img
					src={close}
					className={styles.modal__close}
					alt='modalClose'
					onClick={closeModal}
				/>

				<h3 className={styles.modal__title}>{title}</h3>
				<p className={styles.modal__description}>{subtitle}</p>
				<Button
					title={text}
					onClick={() => console.log('asd')}
					styles={`${styles.modal__button} button`}
				/>
			</div>
		</div>
	)
}

export default Modal
