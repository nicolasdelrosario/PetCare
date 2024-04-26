export default function Field({ label, placeholder, type, value, onChange }) {
	return (
		<div className='form__input-container flex flex--column'>
			<label htmlFor={label}>{label}</label>
			<input
				className='form__input'
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
				id={label}
			/>
		</div>
	)
}
