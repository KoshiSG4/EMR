import { ReferralRecord } from '@/types/ReferralRecord ';
import { ColumnDef } from '@tanstack/react-table';

export const referralsColumns: ColumnDef<ReferralRecord>[] = [
	{
		accessorKey: 'date',
		header: 'Date & Time',
	},
	{
		accessorKey: 'referralType',
		header: 'Type',
	},
	{
		accessorKey: 'referredTo',
		header: 'Referred To',
	},
	{
		accessorKey: 'department',
		header: 'Department',
	},
	{
		accessorKey: 'reason',
		header: 'Reason',
	},
	{
		accessorKey: 'notes',
		header: 'Notes',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'referredBy',
		header: 'Referred By',
	},
];
