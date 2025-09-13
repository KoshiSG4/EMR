import { LabRecord } from '@/types/LabRecord ';
import { ColumnDef } from '@tanstack/react-table';

export const labColumns: ColumnDef<LabRecord>[] = [
	{
		accessorKey: 'date',
		header: 'Date & Time',
	},
	{
		accessorKey: 'testName',
		header: 'Test Name',
	},
	{
		accessorKey: 'testCode',
		header: 'Code',
	},
	{
		accessorKey: 'department',
		header: 'Department',
	},
	{
		accessorKey: 'requestedBy',
		header: 'Requested By',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'result',
		header: 'Result',
	},
	{
		accessorKey: 'normalRange',
		header: 'Normal Range',
	},
	{
		accessorKey: 'interpretation',
		header: 'Interpretation',
	},
	{
		accessorKey: 'verifiedBy',
		header: 'Verified By',
	},
];
