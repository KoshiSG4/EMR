import { Button } from '@/components/ui/button';
import { FormattedMedicalRecord } from '@/types/medicalRecords';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

export const diagnosesColumns: ColumnDef<FormattedMedicalRecord>[] = [
	{
		accessorKey: 'diagnoseName',
		header: 'Diagnose',
	},
	{
		accessorKey: 'type',
		header: 'Type',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'notes',
		header: 'Notes',
	},
	{
		accessorKey: 'doctorName',
		header: 'Doctor',
	},
	{
		accessorKey: 'createdAt',
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
				className="pl-0">
				Date <ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
	},
];
