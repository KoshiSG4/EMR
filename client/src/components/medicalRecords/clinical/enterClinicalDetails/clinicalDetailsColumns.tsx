import { ClinicalDetailRecord } from '@/types/clinicalDetailRecord';
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
		accessorKey: 'hpi',
		header: 'HPI',
	},
	{
		accessorKey: 'allergies',
		header: 'Allergies',
	},
	{
		accessorKey: 'notes',
		header: 'Notes',
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
