function SignUp() {
	return (
		<section className='min--100 grid place--center'>
			<h1 className='section__title'>PetCare</h1>
			<p className='section__subtitle'>Create a new account</p>
			<div className='container'>
				<form className='form flex flex--column'>
					<label>Email</label>
					<input className='form__input' placeholder='Username' type='text' />
					<label>Password</label>
					<input
						className='form__input'
						placeholder='Password'
						type='password'
					/>
					<button className='button' type='submit'>
						Continue
					</button>
				</form>
			</div>
		</section>
	)
}

export default SignUp
