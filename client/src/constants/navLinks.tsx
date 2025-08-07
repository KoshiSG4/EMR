import {
	Home,
	Calendar,
	Pill,
	FileText,
	Users,
	CreditCard,
	BarChart,
	Settings,
} from 'lucide-react';

export const navLinks = [
	{
		path: '/overview',
		label: 'Overview',
		icon: Home,
		roles: ['admin', 'doctor', 'patient'],
	},
	{
		path: '/appointments',
		label: 'Appointments',
		icon: Calendar,
		roles: ['admin', 'doctor', 'patient'],
		tabs: [
			{ label: 'Upcoming', path: 'upcoming' },
			{ label: 'Past', path: 'past' },
			{ label: 'Cancelled', path: 'cancelled' },
			{
				label: 'Create Appoinment',
				path: 'create',
				roles: ['admin', 'doctor'],
			},
		],
	},
	{
		path: '/medications',
		label: 'Medications',
		icon: Pill,
		roles: ['admin', 'doctor', 'patient'],
		tabs: [
			{ label: 'Current', path: 'current' },
			{ label: 'History', path: 'history' },
			{ label: 'New Medication', path: 'new', roles: ['doctor'] },
		],
	},
	{
		path: '/records',
		label: 'Medical Records',
		icon: FileText,
		roles: ['admin', 'doctor', 'patient'],
		tabs: [
			{ label: 'Lab Reports', path: 'lab-reports' },
			{ label: 'Vitals', path: 'vitals' },
			{ label: 'Diagnoses', path: 'diagnoses' },
			{ label: 'Medical History', path: 'medical-history' },
		],
	},
	{
		path: '/manage-users',
		label: 'Manage-users',
		icon: Users,
		roles: ['admin'],
		tabs: [
			{ label: 'Doctors', path: 'doctors' },
			{ label: 'Nurses', path: 'nurses' },
			{ label: 'Patients', path: 'patients' },
			{ label: 'Admins', path: 'admins' },
		],
	},
	{
		path: '/billing',
		label: 'Billing',
		icon: CreditCard,
		roles: ['admin'],
		tabs: [
			{ label: 'Invoices', path: 'invoices' },
			{ label: 'Payments', path: 'payments' },
			{ label: 'Insurance Claims', path: 'insurance-claims' },
		],
	},
	{
		path: '/reports',
		label: 'Reports',
		icon: BarChart,
		roles: ['admin'],
		tabs: [
			{ label: 'System Reports', path: 'system-reports' },
			{ label: 'Activity Logs', path: 'activity-logs' },
		],
	},

	{
		path: '/settings',
		label: 'Settings',
		icon: Settings,
		roles: ['admin'],
		tabs: [
			{ label: 'General Settings', path: 'general-settings' },
			{ label: 'System Preference', path: 'system-preference' },
		],
	},
];
