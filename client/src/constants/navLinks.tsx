import {
	Home,
	Calendar,
	Pill,
	FileText,
	Users,
	CreditCard,
	BarChart,
	Settings,
	LucideProps,
} from 'lucide-react';
import { FaUserInjured } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

type NavLink = {
	path: string;
	label: string;
	icon?:
		| React.ForwardRefExoticComponent<
				Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
		  >
		| IconType;
	roles?: string[];
	tabs?: NavLink[];
};

export const navLinks: NavLink[] = [
	{
		path: '/overview',
		label: 'Overview',
		icon: Home,
		roles: ['admin', 'doctor', 'nurse', 'labStaff', 'patient'],
	},

	{
		path: '/patients',
		label: 'Patients',
		icon: FaUserInjured,
		roles: ['admin', 'doctor', 'nurse'],
		tabs: [{ label: 'Search / Register', path: 'search' }],
	},

	{
		path: '/laboratory',
		label: 'Laboratory',
		icon: FileText,
		roles: ['admin', 'labStaff', 'doctor'],
		tabs: [
			{ label: 'View Test Requests', path: 'test-requests' },
			{ label: 'Accept Samples', path: 'accept-samples' },
			{ label: 'Enter Test Results', path: 'enter-results' },
			{ label: 'Validate & Authorize', path: 'validate' },
			{ label: 'Lab Reports', path: 'lab-reports' },
		],
	},

	{
		path: '/appointments',
		label: 'Appointments',
		icon: Calendar,
		roles: ['admin', 'doctor', 'nurse', 'patient'],
		tabs: [
			{ label: 'Upcoming', path: 'upcoming' },
			{ label: 'Past', path: 'past' },
			{ label: 'Cancelled', path: 'cancelled' },
			{
				label: 'Create Appointment',
				path: 'create',
				roles: ['admin', 'doctor'],
			},
		],
	},

	{
		path: '/medications',
		label: 'Medications / Pharmacy',
		icon: Pill,
		roles: ['admin', 'doctor', 'nurse'],
		tabs: [
			{ label: 'Prescriptions', path: 'prescriptions' },
			{ label: 'Dispense', path: 'dispense' },
			{ label: 'Inventory', path: 'inventory' },
		],
	},

	{
		path: '/manage-users',
		label: 'Manage Users',
		icon: Users,
		roles: ['admin'],
		tabs: [
			{ label: 'Doctors', path: 'doctors' },
			{ label: 'Nurses', path: 'nurses' },
			{ label: 'Patients', path: 'patients' },
			{ label: 'Lab Staff', path: 'lab-staff' },
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
			{ label: 'Clinical Reports', path: 'clinical' },
			{ label: 'Lab Reports', path: 'lab' },
			{ label: 'System Reports', path: 'system' },
			{ label: 'Activity Logs', path: 'activity' },
		],
	},

	{
		path: '/settings',
		label: 'Settings',
		icon: Settings,
		roles: ['admin'],
		tabs: [
			{ label: 'General Settings', path: 'general' },
			{ label: 'System Preferences', path: 'preferences' },
		],
	},
];
