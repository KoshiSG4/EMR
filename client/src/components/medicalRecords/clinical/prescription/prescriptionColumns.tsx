import { Prescription } from '@/types/prescription';
import { ColumnDef } from '@tanstack/react-table';

export const prescriptionColumns: ColumnDef<Prescription>[] = [
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'medication',
		header: 'Medication',
	},
	{
		accessorKey: 'dosage',
		header: 'Dosage',
	},
	{
		accessorKey: 'frequency',
		header: 'Frequency',
	},
	{
		accessorKey: 'duration',
		header: 'Duration',
	},
	{
		accessorKey: 'instructions',
		header: 'Instructions',
	},
	{
		accessorKey: 'prescribedBy',
		header: 'Prescribed By',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
];
