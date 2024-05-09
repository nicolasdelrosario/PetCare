import { useContext } from 'react'
import { UIContext } from '../../../../contexts'
import styles from './add-circle-button.module.css'
import addButton from '../../../../assets/icons/add.svg'

function AddCircleButton() {
	const { toggleAddCircle } = useContext(UIContext)

	return (
		<>
			<div>
				<button className={`${styles.add__button} grid`}>
					<img
						src={addButton}
						alt='add button'
						className={styles.add__button_icon}
						onClick={toggleAddCircle}
					/>
				</button>
			</div>
		</>
	)
}

export default AddCircleButton
