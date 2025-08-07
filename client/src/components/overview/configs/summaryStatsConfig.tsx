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

type SummaryStat = {
	label: string;
	value: number;
	icon: React.ElementType;
};

export type SummaryStatsConfig = Record<
	'admin' | 'doctor' | 'nurse' | 'patient',
	SummaryStat[]
>;

export const SummaryStatsConfig: SummaryStatsConfig = {
	admin: [
		{ label: 'Doctors', value: 42, icon: FaUserDoctor },
		{ label: 'Patients', value: 210, icon: FaUserInjured },
		{ label: 'Nurses', value: 120, icon: FaUserNurse },
		{ label: 'Appointments Today', value: 16, icon: FaCalendarCheck },
		{ label: 'Prescriptions', value: 78, icon: FaFilePrescription },
	],
	doctor: [
		{ label: 'Patients Today', value: 8, icon: FaUserCheck },
		{ label: 'Upcoming Appointments', value: 5, icon: FaCalendarCheck },
		{ label: 'Notes Written', value: 12, icon: FaNotesMedical },
		{ label: 'Prescriptions Given', value: 20, icon: FaFilePrescription },
		{ label: 'Total Patients', value: 150, icon: FaUserInjured },
	],
	nurse: [
		{ label: 'Patients Monitored', value: 50, icon: FaUserInjured },
		{ label: 'Vitals Recorded', value: 35, icon: FaFileMedicalAlt },
		{ label: 'Medications Given', value: 25, icon: FaFilePrescription },
		{ label: 'Appointments Assisted', value: 10, icon: FaCalendarCheck },
		{ label: 'Nurses On Duty', value: 18, icon: FaUserCheck },
	],
	patient: [
		{ label: 'Appointments', value: 3, icon: FaCalendarCheck },
		{ label: 'Prescriptions', value: 5, icon: FaFilePrescription },
		{ label: 'Assigned Doctor', value: 1, icon: FaUserDoctor },
		{ label: 'Upcoming Visits', value: 2, icon: FaCalendarCheck },
		{ label: 'Reports Available', value: 7, icon: FaFileMedical },
	],
};
