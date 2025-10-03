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
	{
		id: 'actions',
		cell: ({ row }) => {
			const historyRec = row.original;
			const [isDialogOpen, setIsDialogOpen] = useState(true);

			const handleDialogClose = () => {
				setIsDialogOpen(false);
			};

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="bg-white shadow-2xl shadow-black/50 border-gray-200 rounded-xl p-2">
						<ul>
							<li>
								<HistoryDetailsDialog
									open={true}
									onClose={close}
									history={historyRec}
								/>
							</li>
						</ul>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
