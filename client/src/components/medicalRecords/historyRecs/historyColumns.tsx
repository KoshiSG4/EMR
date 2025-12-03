import { Button } from '@/components/ui/button';
import { HistoryRecord } from '@/types/historyType';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import HistoryDetailsDialog from './HistoryDialog';

export const historyColumns: ColumnDef<HistoryRecord>[] = [
	{
		accessorKey: 'createdAt',
		header: 'Created Date',
	},
	{
		accessorKey: 'chronicConditions',
		header: 'Chronic Conditions',
	},
	{
		accessorKey: 'pastIllnesses',
		header: 'Past Illnesses',
	},
	{
		accessorKey: 'surgeries',
		header: 'Surgeries',
	},
	{
		accessorKey: 'hospitalizations',
		header: 'Hospitalizations',
	},
	{
		accessorKey: 'familyHistory',
		header: 'Family History',
	},
	{
		accessorKey: 'recordedBy',
		header: 'Recorded By',
	},
];
