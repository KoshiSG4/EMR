import {
	AlarmClock,
	CalendarCheck2,
	CalendarPlus,
	ClipboardList,
	Download,
	FilePlus2,
	FolderOpen,
	FolderOpenDot,
	MessageSquare,
	Settings,
	ShieldCheck,
	Stethoscope,
	Syringe,
	Thermometer,
	UserCog,
	UserPlus,
	UserPlus2,
} from 'lucide-react';
import { FaPrescription } from 'react-icons/fa';

export type QuickAction = {
	label: string;
	icon: React.ReactNode;
	onClick?: () => void;
	variant?: 'default' | 'outline';
};

type UserRole = string;

export type QuickActionsConfig = Record<UserRole, QuickAction[]>;

export const getQuickActionsConfig = async (): Promise<QuickActionsConfig> => {
	return {
		admin: [
			{ label: 'Create User', icon: <UserPlus size={18} /> },
			{ label: 'Add Doctor', icon: <UserCog size={18} /> },
			{ label: 'Register Patient', icon: <UserPlus2 size={18} /> },
			{ label: 'View Records', icon: <FolderOpenDot size={18} /> },
			{
				label: 'System Settings',
				icon: <Settings size={18} />,
				variant: 'outline',
			},
			{
				label: 'Manage Access',
				icon: <ShieldCheck size={18} />,
				variant: 'outline',
			},
		],
		doctor: [
			{ label: 'Add Note', icon: <FilePlus2 size={18} /> },
			{ label: 'Prescribe', icon: <FaPrescription size={18} /> },
			{ label: 'View Records', icon: <FolderOpen size={18} /> },
			{ label: 'Schedule Follow-Up', icon: <CalendarPlus size={18} /> },
			{
				label: 'Start Consultation',
				icon: <Stethoscope size={18} />,
				variant: 'outline',
			},
		],
		nurse: [
			{ label: 'Record Vitals', icon: <Thermometer size={18} /> },
			{ label: 'Administer Medication', icon: <Syringe size={18} /> },
			{ label: 'Patient Checklist', icon: <ClipboardList size={18} /> },
			{
				label: 'Set Reminders',
				icon: <AlarmClock size={18} />,
				variant: 'outline',
			},
			{
				label: 'Access Records',
				icon: <FolderOpen size={18} />,
				variant: 'outline',
			},
		],
		patient: [
			{ label: 'Book Appointment', icon: <CalendarCheck2 size={18} /> },
			{ label: 'View Records', icon: <FolderOpen size={18} /> },
			{ label: 'Message Doctor', icon: <MessageSquare size={18} /> },
			{ label: 'Download Reports', icon: <Download size={18} /> },
			{
				label: 'Consult Now',
				icon: <Stethoscope size={18} />,
				variant: 'outline',
			},
		],
	};
};
