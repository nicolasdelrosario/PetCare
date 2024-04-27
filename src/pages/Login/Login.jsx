import styles from './login.module.css'
import { useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import { toast } from 'sonner'
import { Link, Redirect } from 'wouter'
import { Field, Button } from '../../Components'

function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [accounts] = useLocalStorage('appointments-accounts', [])
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const validateForm = e => {
		e.preventDefault()

		if (username.trim() === '' || password.trim() === '') {
			toast.error('Please fill out all required fields')
		} else {
			login()
		}
	}

	const login = () => {
		const user = accounts.find(
			account => account.username === username && account.password === password
		)
		if (user) {
			setIsLoggedIn(true)
		} else {
			toast.error('Invalid username or password. Please try again.')
		}
	}

	if (isLoggedIn) {
		return <Redirect to='/home' replace />
	}

	return (
		<section className='min--100 grid place--center'>
			<h1 className='section__title'>PetCare</h1>
			<p className='section__subtitle'>Sign into your account</p>
			<div className='container'>
				<form
					className={`${styles.form__login} flex flex--column`}
					onSubmit={validateForm}
				>
					<Field
						label={'Username'}
						placeholder={'Username'}
						value={username}
						onChange={e => setUsername(e.target.value)}
						styles='form__input-lg'
					/>

					<Field
						label={'Password'}
						placeholder={'Password'}
						value={password}
						type='password'
						onChange={e => setPassword(e.target.value)}
						styles='form__input-lg'
					/>

					<p className='mb-2'>
						Don&#39;t have an account?
						<Link to='/signup'> Sign up</Link>
					</p>

					<Button title='Sign in' styles='button' />
				</form>
			</div>
		</section>
	)
}

export default Login
