import styles from './signup.module.css'
import { useState } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import { Link } from 'wouter'
import { toast } from 'sonner'
import { Field, Button } from '../../Components'

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
						Already have an account?
						<Link to='/'> Sign in</Link>
					</p>

					<Button title='Sign Up' styles='button' />
				</form>
			</div>
		</section>
	)
}

export default SignUp
