import { DiagnosisRecord } from '@/types/DiagnoseRecords';
import { ColumnDef } from '@tanstack/react-table';

export const diagnosesColumns: ColumnDef<DiagnosisRecord>[] = [
	{
		accessorKey: 'date',
		header: 'Date',
	},
	{
		accessorKey: 'code',
		header: 'Code',
	},
	{
		accessorKey: 'name',
		header: 'Diagnosis',
	},
	{
		accessorKey: 'severity',
		header: 'Severity',
	},
	{
		accessorKey: 'description',
		header: 'Notes',
	},
	{
		accessorKey: 'recordedBy',
		header: 'Recorded By',
	},
];
