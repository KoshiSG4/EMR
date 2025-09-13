import { ClinicalDetailRecord } from '@/types/ClinicalDetailRecord';
import { ColumnDef } from '@tanstack/react-table';

export const clinicalDetailsColumns: ColumnDef<ClinicalDetailRecord>[] = [
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'chiefComplaint',
		header: 'Chief Complaint',
	},
	{
		accessorKey: 'history',
		header: 'HPI',
	},
	{
		accessorKey: 'pastHistory',
		header: 'Past History',
	},
	{
		accessorKey: 'medications',
		header: 'Medications',
	},
	{
		accessorKey: 'allergies',
		header: 'Allergies',
	},
	{
		accessorKey: 'examination',
		header: 'Examination',
	},
	{
		accessorKey: 'assessment',
		header: 'Assessment',
	},
	{
		accessorKey: 'plan',
		header: 'Plan',
	},
	{
		accessorKey: 'recordedBy',
		header: 'Recorded By',
	},
];
