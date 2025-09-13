import { HistoryRecord } from '@/types/HistoryRecords';
import { ColumnDef } from '@tanstack/react-table';

export const historyColumns: ColumnDef<HistoryRecord>[] = [
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'type',
		header: 'Type',
	},
	{
		accessorKey: 'condition',
		header: 'Condition',
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
		accessorKey: 'recordedBy',
		header: 'Recorded By',
	},
];
