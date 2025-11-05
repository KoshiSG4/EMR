import { FaFileMedicalAlt, FaNotesMedical } from 'react-icons/fa';
import {
	FaUserDoctor,
	FaUserInjured,
	FaUserNurse,
	FaFilePrescription,
	FaCalendarCheck,
	FaUserCheck,
	FaFileMedical,
} from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export type SummaryStat = {
	label: string;
	value: number | null;
	icon: React.ElementType;
	link?: string;
};

export const getSummaryStatsConfig = (
	role: string,
	stats: { [key: string]: number }
): SummaryStat[] => {
	const {
		doctors = 0,
		patients = 0,
		nurses = 0,
		appointments = 0,
		prescriptions = 0,
		patientsToday = 0,
		upcomingAppointments = 0,
		notesWritten = 0,
		prescriptionsGiven = 0,
		totalPatients = 0,
	} = stats;

	switch (role) {
		case 'admin':
			return [
				{
					label: 'Patients',
					value: patients,
					icon: FaUserInjured,
					link: '/patients',
				},
				{
					label: 'Doctors',
					value: doctors,
					icon: FaUserDoctor,
					link: '/manage-users/doctors',
				},
				{
					label: 'Nurses',
					value: nurses,
					icon: FaUserNurse,
					link: '/manage-users/nurses',
				},
				{
					label: 'Appointments',
					value: appointments,
					icon: FaCalendarCheck,
					link: '/appointments',
				},
				{
					label: 'Prescriptions',
					value: prescriptions,
					icon: FaFilePrescription,
					link: '/medications/prescriptions',
				},
			];

		case 'doctor':
			return [
				{
					label: 'Patients Today',
					value: patientsToday,
					icon: FaUserCheck,
				},
				{
					label: 'Upcoming Appointments',
					value: upcomingAppointments,
					icon: FaCalendarCheck,
				},
				{
					label: 'Notes Written',
					value: notesWritten,
					icon: FaNotesMedical,
				},
				{
					label: 'Total Patients',
					value: totalPatients,
					icon: FaUserInjured,
				},
				{
					label: 'Prescriptions',
					value: prescriptions,
					icon: FaFilePrescription,
				},
			];

		default:
			return [];
	}
	// return {
	// 	admin: [
	// 		{ label: 'Doctors', value: 5, icon: FaUserDoctor },
	// 		{
	// 			label: 'Patients',
	// 			value: 5,
	// 			icon: FaUserInjured,
	// 		},
	// 		{ label: 'Nurses', value: 5, icon: FaUserNurse },
	// 		{ label: 'Appointments', value: 16, icon: FaCalendarCheck },
	// 		{ label: 'Prescriptions', value: 78, icon: FaFilePrescription },
	// 	],
	// 	doctor: [
	// 		{ label: 'Patients Today', value: 8, icon: FaUserCheck },
	// 		{ label: 'Upcoming Appointments', value: 5, icon: FaCalendarCheck },
	// 		{ label: 'Notes Written', value: 12, icon: FaNotesMedical },
	// 		{
	// 			label: 'Prescriptions Given',
	// 			value: 20,
	// 			icon: FaFilePrescription,
	// 		},
	// 		{ label: 'Total Patients', value: 150, icon: FaUserInjured },
	// 	],
	// 	nurse: [
	// 		{ label: 'Patients Monitored', value: 50, icon: FaUserInjured },
	// 		{ label: 'Vitals Recorded', value: 35, icon: FaFileMedicalAlt },
	// 		{ label: 'Medications Given', value: 25, icon: FaFilePrescription },
	// 		{
	// 			label: 'Appointments Assisted',
	// 			value: 10,
	// 			icon: FaCalendarCheck,
	// 		},
	// 		{ label: 'Nurses On Duty', value: 18, icon: FaUserCheck },
	// 	],
	// 	patient: [
	// 		{ label: 'Appointments', value: 3, icon: FaCalendarCheck },
	// 		{ label: 'Prescriptions', value: 5, icon: FaFilePrescription },
	// 		{ label: 'Assigned Doctor', value: 1, icon: FaUserDoctor },
	// 		{ label: 'Upcoming Visits', value: 2, icon: FaCalendarCheck },
	// 		{ label: 'Reports Available', value: 7, icon: FaFileMedical },
	// 	],
	// };
};
