export default function Field({
	label,
	placeholder,
	type = 'text',
	value,
	onChange,
	styles = 'form__input',
}) {
	return (
		<div className='form__input-container flex flex--column'>
			<label htmlFor={label}>{label}</label>
			<input
				className={styles}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
				id={label}
			/>
		</div>
	)
}
