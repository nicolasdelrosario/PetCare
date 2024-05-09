import { createContext, useState, ReactNode } from 'react'

interface UIContextType {
	isDeactivatedModalOpen: boolean
	setIsDeactivatedModalOpen: React.Dispatch<React.SetStateAction<boolean>>
	isAddCirclePressed: boolean
	setIsAddCirclePressed: React.Dispatch<React.SetStateAction<boolean>>
	isAddModalOpen: boolean
	setIsAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>
	isUpdateModalOpen: boolean
	setIsUpdateModalOpen: React.Dispatch<React.SetStateAction<boolean>>
	toggleDeactivatedModal: () => void
	toggleAddCircle: () => void
	toggleAddModal: () => void
	toggleUpdateModal: () => void
}

const defaultValue: UIContextType = {
	isDeactivatedModalOpen: false,
	setIsDeactivatedModalOpen: () => {},
	isAddCirclePressed: false,
	setIsAddCirclePressed: () => {},
	isAddModalOpen: false,
	setIsAddModalOpen: () => {},
	isUpdateModalOpen: false,
	setIsUpdateModalOpen: () => {},
	toggleDeactivatedModal: () => {},
	toggleAddCircle: () => {},
	toggleAddModal: () => {},
	toggleUpdateModal: () => {},
}

export const UIContext = createContext<UIContextType>(defaultValue)

export function UIProvider({ children }: { children: ReactNode }) {
	const [isDeactivatedModalOpen, setIsDeactivatedModalOpen] = useState(false)
	const [isAddCirclePressed, setIsAddCirclePressed] = useState(false)
	const [isAddModalOpen, setIsAddModalOpen] = useState(false)
	const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)

	const toggleDeactivatedModal = () =>
		setIsDeactivatedModalOpen(!isDeactivatedModalOpen)
	const toggleAddCircle = () => setIsAddCirclePressed(!isAddCirclePressed)
	const toggleAddModal = () => setIsAddModalOpen(!isAddModalOpen)
	const toggleUpdateModal = () => setIsUpdateModalOpen(!isUpdateModalOpen)

	return (
		<UIContext.Provider
			value={{
				isDeactivatedModalOpen,
				setIsDeactivatedModalOpen,
				isAddCirclePressed,
				setIsAddCirclePressed,
				isAddModalOpen,
				setIsAddModalOpen,
				isUpdateModalOpen,
				setIsUpdateModalOpen,
				toggleDeactivatedModal,
				toggleAddCircle,
				toggleAddModal,
				toggleUpdateModal,
			}}
		>
			{children}
		</UIContext.Provider>
	)
}

export default UIContext
