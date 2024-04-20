import './Login.css'
import { Link } from 'wouter'

function Login() {
	return (
		<section className='min--100 grid place--center'>
			<h1 className='section__title'>PetCare</h1>
			<p className='section__subtitle'>Sign into your account</p>
			<div className='container'>
				<form className='form__login flex flex--column'>
					<label>Email</label>
					<input
						className='form__input form__login-input'
						placeholder='Username'
						type='text'
					/>
					<label>Password</label>
					<input
						className='form__input form__login-input'
						placeholder='Password'
						type='password'
					/>

					<Link className='button' to='/home'>
						Home
					</Link>
				</form>
			</div>
		</section>
	)
}

export default Login
