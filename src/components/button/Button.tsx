interface ButtonProps {
	title: string
	type?: 'submit' | 'reset' | 'button'
	onClick?: () => void
	styles?: string
}

function Button({
	title,
	type = 'submit',
	onClick,
	styles = 'button mt-1',
}: ButtonProps) {
	return (
		<button className={styles} type={type} onClick={onClick} name='button'>
			{title}
		</button>
	)
}

export default Button
