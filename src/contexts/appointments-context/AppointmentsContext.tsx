import { createContext, useState, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Appointment {
	id: string
	activated: boolean
	date: string
	deletedAt: string | null
	description: string
	hour: string
	ownerName: string
	ownerPhone: string
	petAge: string
	petName: string
	petSex: string
	petType: string
	reason: string
}

interface AppointmentsContextType {
	appointments: Appointment[]
	setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>
	selectedAppointment: Appointment | null
	setSelectedAppointment: React.Dispatch<
		React.SetStateAction<Appointment | null>
	>
	selectedAppointmentId: string | null
	setSelectedAppointmentId: React.Dispatch<React.SetStateAction<string | null>>
	addAnAppointment: (newAppointment: Appointment) => void
	deactivateAnAppointment: () => void
	deleteAnAppointment: () => void
	updateAnAppointment: (updatedAppointment: Appointment) => void
}

interface AppointmentsProviderProps {
	children: ReactNode
}

const defaultValue: AppointmentsContextType = {
	appointments: [],
	setAppointments: () => {},
	selectedAppointment: null,
	setSelectedAppointment: () => {},
	selectedAppointmentId: null,
	setSelectedAppointmentId: () => {},
	addAnAppointment: () => {},
	deactivateAnAppointment: () => {},
	deleteAnAppointment: () => {},
	updateAnAppointment: () => {},
}

export const AppointmentsContext =
	createContext<AppointmentsContextType>(defaultValue)

export function AppointmentsProvider({ children }: AppointmentsProviderProps) {
	const [appointments, setAppointments] = useState<Appointment[]>([
		{
			id: uuidv4(),
			activated: false,
			date: '2022-10-23',
			deletedAt: null,
			description: 'Castrated',
			hour: '10:00',
			ownerName: 'John Doe',
			ownerPhone: '123456789',
			petAge: '1 year',
			petName: 'Max',
			petSex: 'Male',
			petType: 'Dog',
			reason: 'Castration',
		},
		{
			id: uuidv4(),
			activated: true,
			date: '2022-10-23',
			deletedAt: null,
			description: 'Castrated',
			hour: '10:00',
			ownerName: 'John Doe',
			ownerPhone: '123456789',
			petAge: '1 year',
			petName: 'Max',
			petSex: 'Male',
			petType: 'Dog',
			reason: 'Castration',
		},
		{
			id: uuidv4(),
			activated: true,
			date: '2022-10-23',
			deletedAt: null,
			description: 'Castrated',
			hour: '10:00',
			ownerName: 'John Doe',
			ownerPhone: '123456789',
			petAge: '1 year',
			petName: 'Max',
			petSex: 'Male',
			petType: 'Dog',
			reason: 'Castration',
		},
		{
			id: uuidv4(),
			activated: true,
			date: '2022-10-23',
			deletedAt: null,
			description: 'Castrated',
			hour: '10:00',
			ownerName: 'John Doe',
			ownerPhone: '123456789',
			petAge: '1 year',
			petName: 'Max',
			petSex: 'Male',
			petType: 'Dog',
			reason: 'Castration',
		},
		{
			id: uuidv4(),
			activated: false,
			date: '2022-10-23',
			deletedAt: null,
			description: 'Castrated',
			hour: '10:00',
			ownerName: 'John Doe',
			ownerPhone: '123456789',
			petAge: '1 year',
			petName: 'Max',
			petSex: 'Male',
			petType: 'Dog',
			reason: 'Castration',
		},
		{
			id: uuidv4(),
			activated: false,
			date: '2022-10-23',
			deletedAt: null,
			description: 'Castrated',
			hour: '10:00',
			ownerName: 'John Doe',
			ownerPhone: '123456789',
			petAge: '1 year',
			petName: 'Max',
			petSex: 'Male',
			petType: 'Dog',
			reason: 'Castration',
		},
	])
	const [selectedAppointmentId, setSelectedAppointmentId] = useState<
		string | null
	>(null)
	const [selectedAppointment, setSelectedAppointment] =
		useState<Appointment | null>(null)

	const addAnAppointment = (newAppointment: Appointment) => {
		const appointmentWithId = {
			...newAppointment,
			id: uuidv4(),
			activated: true,
			deletedAt: null,
		}
		setAppointments([...appointments, appointmentWithId])
	}

	const deactivateAnAppointment = () => {
		if (selectedAppointmentId) {
			const updatedAppointments = appointments.map(appointment => {
				return appointment.id === selectedAppointmentId
					? { ...appointment, activated: false }
					: appointment
			})

			setAppointments(updatedAppointments)
			setSelectedAppointment(null)
			setSelectedAppointmentId(null)
		}
	}

	const deleteAnAppointment = () => {
		if (selectedAppointmentId) {
			const updatedAppointments = appointments.map(appointment => {
				return appointment.id === selectedAppointmentId
					? { ...appointment, deletedAt: new Date().toISOString() }
					: appointment
			})

			setAppointments(updatedAppointments)
			setSelectedAppointment(null)
			setSelectedAppointmentId(null)
		}
	}
	const updateAnAppointment = (updatedAppointment: Appointment) => {
		const updatedAppointments = appointments.map(appointment =>
			appointment.id === selectedAppointmentId
				? { ...appointment, ...updatedAppointment }
				: appointment
		)
		setAppointments(updatedAppointments)
		setSelectedAppointment(null)
	}

	return (
		<AppointmentsContext.Provider
			value={{
				appointments,
				setAppointments,
				selectedAppointment,
				setSelectedAppointment,
				selectedAppointmentId,
				setSelectedAppointmentId,
				addAnAppointment,
				deactivateAnAppointment,
				deleteAnAppointment,
				updateAnAppointment,
			}}
		>
			{children}
		</AppointmentsContext.Provider>
	)
}

export default AppointmentsContext
