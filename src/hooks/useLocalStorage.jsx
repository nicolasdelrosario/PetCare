import { useState } from 'react'

function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			return initialValue
		}
	})
	const setValue = value => {
		setStoredValue(value)
		window.localStorage.setItem(key, JSON.stringify(value))
	}

	return [storedValue, setValue]
}

export default useLocalStorage
