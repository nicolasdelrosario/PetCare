import styles from './signup.module.css'
import { useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import { Link } from 'wouter'
import { toast } from 'sonner'

function SignUp() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [accounts, setAccounts] = useLocalStorage('appointments-accounts', [])

	const validateForm = e => {
		e.preventDefault()
		if (username.trim() === '' || password.trim() === '') {
			return toast.error('Please fill out all required fields')
		} else {
			return createNewUser()
		}
	}

	const createNewUser = () => {
		const existingUser = accounts.find(account => account.username === username)
		if (existingUser) {
			toast.error('User already exists.')
			return
		}

		const newUser = {
			username: username,
			password: password,
		}
		setAccounts([...accounts, newUser])
		toast.success('Account Created Successfully', { duration: 2500 })
		setUsername('')
		setPassword('')
	}

	return (
		<section className='min--100 grid place--center'>
			<h1 className='section__title'>PetCare</h1>
			<p className='section__subtitle'>Create a new account</p>
			<div className='container'>
				<form
					className={`${styles.form__signup} flex flex--column `}
					onSubmit={validateForm}
				>
					<label>Username</label>
					<input
						className={`${styles.form__input} ${styles.form__signup_input}`}
						placeholder='Username'
						type='text'
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					<label>Password</label>
					<input
						className={`${styles.form__input} ${styles.form__signup_input}`}
						placeholder='Password'
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>

					<p className='mb-2'>
						Already have an account?
						<Link to='/'> Sign in</Link>
					</p>

					<button className='button' type='submit'>
						Sign Up
					</button>
				</form>
			</div>
		</section>
	)
}

export default SignUp
