export default function Button({
	title,
	type = 'submit',
	onClick,
	styles = 'button mt-1',
}) {
	return (
		<button className={styles} type={type} onClick={onClick} name='button'>
			{title}
		</button>
	)
}
