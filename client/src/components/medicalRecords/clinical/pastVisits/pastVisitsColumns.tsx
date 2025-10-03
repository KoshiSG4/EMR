import { PastVisitRecord } from '@/types/pastVisitRecord';
import { ColumnDef } from '@tanstack/react-table';

export const pastVisitsColumns: ColumnDef<PastVisitRecord>[] = [
	{
		accessorKey: 'date',
		header: 'Date & Time',
	},
	{
		accessorKey: 'visitType',
		header: 'Type',
	},
	{
		accessorKey: 'reason',
		header: 'Reason',
	},
	{
		accessorKey: 'doctor',
		header: 'Doctor',
	},
	{
		accessorKey: 'department',
		header: 'Department',
	},
	{
		accessorKey: 'diagnosis',
		header: 'Diagnosis',
	},
	{
		accessorKey: 'treatment',
		header: 'Treatment',
	},
	{
		accessorKey: 'outcome',
		header: 'Outcome',
	},
];
