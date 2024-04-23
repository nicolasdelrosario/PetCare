import { Link } from 'wouter'

function Error() {
	return (
		<section className='min--100 grid place--center justify-i-center'>
			<h1 className='section__title'>Page not found</h1>
			<p className='section__subtitle'>
				Either this page doesn&#39;t exist or you don&#39;t have permission to
				access it.
			</p>

			<Link href='/'>
				<a className='button'>Go back</a>
			</Link>
		</section>
	)
}

export default Error
