import { useMemo } from 'react';
import { Appointment } from './AppointmentTable';

export const appointments: Appointment[] = [
	{
		id: '1',
		patient: 'Jane Doe',
		doctor: 'Dr. Strange',
		date: '2025-08-10',
		time: '10:30',
		type: 'in-person',
		status: 'upcoming',
	},
	{
		id: '2',
		patient: 'John Smith',
		doctor: 'Dr. House',
		date: '2025-07-25',
		time: '14:00',
		type: 'virtual',
		status: 'past',
	},
	{
		id: '3',
		patient: 'Anna Lee',
		doctor: 'Dr. Grey',
		date: '2025-07-30',
		time: '09:00',
		type: 'in-person',
		status: 'cancelled',
	},
];

export const useAppointments = () => {
	const upcoming = useMemo(
		() => appointments.filter((a) => a.status === 'upcoming'),
		[]
	);
	const past = useMemo(
		() => appointments.filter((a) => a.status === 'past'),
		[]
	);
	const cancelled = useMemo(
		() => appointments.filter((a) => a.status === 'cancelled'),
		[]
	);

	return { upcoming, past, cancelled };
};
