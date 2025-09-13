import { ColumnDef } from '@tanstack/react-table';

type PrescriptionRefill = {
	id: string;
	medication: string;
	refillDate: string;
	refillNumber: number;
	quantityDispensed: string;
	refilledBy: string;
	notes?: string;
};

export const prescriptionRefillColumns: ColumnDef<PrescriptionRefill>[] = [
	{
		accessorKey: 'medication',
		header: 'Medication',
	},
	{
		accessorKey: 'refillDate',
		header: 'Refill Date',
	},
	{
		accessorKey: 'refillNumber',
		header: 'Refill #',
	},
	{
		accessorKey: 'quantityDispensed',
		header: 'Quantity Dispensed',
	},
	{
		accessorKey: 'refilledBy',
		header: 'Refilled By',
	},
	{
		accessorKey: 'notes',
		header: 'Notes',
	},
];
