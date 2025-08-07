export type ChartLine = {
	key: string;
	color: string;
	label?: string;
};

export type ChartData = {
	title: string;
	data: { date: string; [key: string]: number | string }[];
	lines: ChartLine[];
};

export type OverviewChartConfig = Record<
	'admin' | 'doctor' | 'nurse' | 'patient',
	ChartData[]
>;

export const OverviewChartData: OverviewChartConfig = {
	admin: [
		{
			title: 'User Registrations Overview',
			data: [
				{ date: 'Mon', newPatients: 10, newDoctors: 2, newNurses: 1 },
				{ date: 'Tue', newPatients: 14, newDoctors: 1, newNurses: 2 },
				{ date: 'Wed', newPatients: 20, newDoctors: 3, newNurses: 1 },
				{ date: 'Thu', newPatients: 18, newDoctors: 2, newNurses: 0 },
				{ date: 'Fri', newPatients: 22, newDoctors: 1, newNurses: 3 },
			],
			lines: [
				{ key: 'newPatients', color: '#3b82f6', label: 'Patients' },
				{ key: 'newDoctors', color: '#10b981', label: 'Doctors' },
				{ key: 'newNurses', color: '#f97316', label: 'Nurses' },
			],
		},
		{
			title: 'Appointment Volume Trend',
			data: [
				{ date: 'Mon', appointments: 34 },
				{ date: 'Tue', appointments: 28 },
				{ date: 'Wed', appointments: 42 },
				{ date: 'Thu', appointments: 31 },
				{ date: 'Fri', appointments: 39 },
			],
			lines: [
				{
					key: 'appointments',
					color: '#6366f1',
					label: 'Appointments',
				},
			],
		},
		{
			title: 'Top Accessed Patient Records',
			data: [
				{ date: 'Mon', accesses: 15 },
				{ date: 'Tue', accesses: 18 },
				{ date: 'Wed', accesses: 22 },
				{ date: 'Thu', accesses: 20 },
				{ date: 'Fri', accesses: 25 },
			],
			lines: [
				{ key: 'accesses', color: '#f59e0b', label: 'Record Accesses' },
			],
		},
	],

	doctor: [
		{
			title: 'Clinical Activity Overview',
			data: [
				{
					date: 'Mon',
					appointments: 4,
					prescriptions: 6,
					followUps: 2,
				},
				{
					date: 'Tue',
					appointments: 5,
					prescriptions: 9,
					followUps: 3,
				},
				{
					date: 'Wed',
					appointments: 8,
					prescriptions: 5,
					followUps: 4,
				},
				{
					date: 'Thu',
					appointments: 2,
					prescriptions: 4,
					followUps: 1,
				},
				{
					date: 'Fri',
					appointments: 7,
					prescriptions: 8,
					followUps: 3,
				},
			],
			lines: [
				{
					key: 'appointments',
					color: '#3b82f6',
					label: 'Appointments',
				},
				{
					key: 'prescriptions',
					color: '#10b981',
					label: 'Prescriptions',
				},
				{ key: 'followUps', color: '#f59e0b', label: 'Follow-ups' },
			],
		},
		{
			title: 'Diagnosis Trend',
			data: [
				{ date: 'Mon', respiratory: 2, skin: 1, cardiovascular: 1 },
				{ date: 'Tue', respiratory: 3, skin: 0, cardiovascular: 2 },
				{ date: 'Wed', respiratory: 1, skin: 2, cardiovascular: 2 },
				{ date: 'Thu', respiratory: 2, skin: 1, cardiovascular: 0 },
				{ date: 'Fri', respiratory: 4, skin: 2, cardiovascular: 1 },
			],
			lines: [
				{ key: 'respiratory', color: '#22c55e', label: 'Respiratory' },
				{ key: 'skin', color: '#a855f7', label: 'Skin' },
				{
					key: 'cardiovascular',
					color: '#f43f5e',
					label: 'Cardiovascular',
				},
			],
		},
		{
			title: 'Patients Seen This Week',
			data: [
				{ date: 'Mon', patients: 5 },
				{ date: 'Tue', patients: 6 },
				{ date: 'Wed', patients: 8 },
				{ date: 'Thu', patients: 4 },
				{ date: 'Fri', patients: 7 },
			],
			lines: [
				{ key: 'patients', color: '#22c55e', label: 'Patients Seen' },
			],
		},
		{
			title: 'Top Diagnoses Given',
			data: [
				{ date: 'Flu', count: 6 },
				{ date: 'Diabetes', count: 4 },
				{ date: 'Hypertension', count: 5 },
			],
			lines: [
				{ key: 'count', color: '#e11d48', label: 'Diagnosis Count' },
			],
		},
		{
			title: 'Prescription Count (Last 7 Days)',
			data: [
				{ date: 'Mon', prescriptions: 4 },
				{ date: 'Tue', prescriptions: 6 },
				{ date: 'Wed', prescriptions: 7 },
				{ date: 'Thu', prescriptions: 5 },
				{ date: 'Fri', prescriptions: 8 },
			],
			lines: [
				{
					key: 'prescriptions',
					color: '#0ea5e9',
					label: 'Prescriptions',
				},
			],
		},
	],

	nurse: [
		{
			title: 'Nursing Activity Overview',
			data: [
				{ date: 'Mon', vitals: 12, medsGiven: 20, escalations: 1 },
				{ date: 'Tue', vitals: 15, medsGiven: 25, escalations: 2 },
				{ date: 'Wed', vitals: 10, medsGiven: 18, escalations: 0 },
				{ date: 'Thu', vitals: 14, medsGiven: 22, escalations: 1 },
				{ date: 'Fri', vitals: 17, medsGiven: 30, escalations: 3 },
			],
			lines: [
				{ key: 'vitals', color: '#6366f1', label: 'Vitals Recorded' },
				{
					key: 'medsGiven',
					color: '#0ea5e9',
					label: 'Medications Given',
				},
				{ key: 'escalations', color: '#ef4444', label: 'Escalations' },
			],
		},
		{
			title: 'Patient Load Overview',
			data: [
				{ date: 'Mon', assigned: 5, assisted: 4 },
				{ date: 'Tue', assigned: 6, assisted: 6 },
				{ date: 'Wed', assigned: 7, assisted: 5 },
				{ date: 'Thu', assigned: 4, assisted: 4 },
				{ date: 'Fri', assigned: 6, assisted: 6 },
			],
			lines: [
				{
					key: 'assigned',
					color: '#3b82f6',
					label: 'Assigned Patients',
				},
				{
					key: 'assisted',
					color: '#10b981',
					label: 'Patients Assisted',
				},
			],
		},
		{
			title: 'Vitals Trends (BP Logs)',
			data: [
				{ date: 'Mon', systolic: 120, diastolic: 80 },
				{ date: 'Tue', systolic: 125, diastolic: 82 },
				{ date: 'Wed', systolic: 130, diastolic: 85 },
				{ date: 'Thu', systolic: 128, diastolic: 83 },
				{ date: 'Fri', systolic: 122, diastolic: 81 },
			],
			lines: [
				{ key: 'systolic', color: '#3b82f6', label: 'Systolic BP' },
				{ key: 'diastolic', color: '#f97316', label: 'Diastolic BP' },
			],
		},
	],

	patient: [
		{
			title: 'My Health Overview',
			data: [
				{ date: 'May', appointments: 2, prescriptions: 1, messages: 3 },
				{ date: 'Jun', appointments: 1, prescriptions: 3, messages: 1 },
				{ date: 'Jul', appointments: 2, prescriptions: 2, messages: 4 },
			],
			lines: [
				{
					key: 'appointments',
					color: '#22c55e',
					label: 'Appointments',
				},
				{
					key: 'prescriptions',
					color: '#3b82f6',
					label: 'Prescriptions',
				},
				{ key: 'messages', color: '#a855f7', label: 'Messages Sent' },
			],
		},
		{
			title: 'Blood Pressure / Weight Over Time',
			data: [
				{ date: 'May', systolic: 118, diastolic: 78, weight: 65 },
				{ date: 'Jun', systolic: 122, diastolic: 80, weight: 66 },
				{ date: 'Jul', systolic: 125, diastolic: 82, weight: 65.5 },
			],
			lines: [
				{ key: 'systolic', color: '#22c55e', label: 'Systolic' },
				{ key: 'diastolic', color: '#3b82f6', label: 'Diastolic' },
				{ key: 'weight', color: '#a855f7', label: 'Weight (kg)' },
			],
		},
		{
			title: 'Appointments Attended',
			data: [
				{ date: 'May', appointments: 2 },
				{ date: 'Jun', appointments: 1 },
				{ date: 'Jul', appointments: 2 },
			],
			lines: [
				{
					key: 'appointments',
					color: '#0ea5e9',
					label: 'Appointments',
				},
			],
		},
		{
			title: 'Medication Timeline',
			data: [
				{ date: 'May', meds: 3 },
				{ date: 'Jun', meds: 5 },
				{ date: 'Jul', meds: 4 },
			],
			lines: [{ key: 'meds', color: '#ef4444', label: 'Medications' }],
		},
	],
};
