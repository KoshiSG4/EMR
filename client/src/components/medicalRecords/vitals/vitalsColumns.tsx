import { Button } from '@/components/ui/button';
import { VitalsRecord } from '@/types/vitalsRecords';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

export const vitalsColumns: ColumnDef<VitalsRecord>[] = [
	{
		accessorKey: 'createdDate',
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
				className="pl-0">
				Created Date <ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
	},
	{
		accessorKey: 'height',
		header: 'Height',
	},
	{
		accessorKey: 'weight',
		header: 'Weight',
	},
	{
		accessorKey: 'bloodPressure',
		header: 'BP',
	},
	{
		accessorKey: 'heartRate',
		header: 'HR',
	},
	{
		accessorKey: 'respiratoryRate',
		header: 'RR',
	},
	{
		accessorKey: 'temperature',
		header: 'Temp',
	},
	{
		accessorKey: 'spo2',
		header: 'SpO₂',
	},
	{
		accessorKey: 'painScore',
		header: 'Pain',
	},
	{
		accessorKey: 'recordedBy',
		header: 'Recorded By',
	},
	{
		accessorKey: 'updatedDate',
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}
				className="pl-0">
				Updated Date <ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
	},
];
