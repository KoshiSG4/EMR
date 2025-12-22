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
				Date <ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
	},
	{
		accessorKey: 'height',
		header: 'Height (cm)',
	},
	{
		accessorKey: 'weight',
		header: 'Weight (kg)',
	},
	{
		accessorKey: 'bloodPressure',
		header: 'BP (mmHg)',
	},
	{
		accessorKey: 'heartRate',
		header: 'HR (bpm)',
	},
	{
		accessorKey: 'respiratoryRate',
		header: 'RR (breaths/min)',
	},
	{
		accessorKey: 'temperature',
		header: 'Temp (°C)',
	},
	{
		accessorKey: 'spo2',
		header: 'SpO₂ (%)',
	},
	{
		accessorKey: 'painScore',
		header: 'Pain (x/10)',
	},
	{
		accessorKey: 'recordedBy',
		header: 'Recorded By',
	},
	// {
	// 	accessorKey: 'updatedDate',
	// 	header: ({ column }) => (
	// 		<Button
	// 			variant="ghost"
	// 			onClick={() =>
	// 				column.toggleSorting(column.getIsSorted() === 'asc')
	// 			}
	// 			className="pl-0">
	// 			Updated Date <ArrowUpDown className="ml-2 h-4 w-4" />
	// 		</Button>
	// 	),
	// },
];
