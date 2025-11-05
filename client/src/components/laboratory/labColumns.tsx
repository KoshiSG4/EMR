import { updateLabRequest } from '@/store/slices/laboratorySlice';
import { AppDispatch } from '@/store/store';
import { LabRequest } from '@/types/labRequest';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../ui/button';
import { MoreHorizontal } from 'lucide-react';
import LabReportDetailDialog from './LabReportDetailDialog';
import EditLabReportDetailsDialog from './EditLabReportDetailsDialog';

export const labColumns: ColumnDef<LabRequest>[] = [
	{
		accessorKey: 'testType',
		header: 'Lab Test',
	},
	{
		accessorKey: 'testCode',
		header: 'Test Code',
	},
	{
		accessorKey: 'department',
		header: 'Department',
	},
	{
		accessorKey: 'priority',
		header: 'Priority',
	},

	{
		accessorKey: 'requestedAt',
		header: 'Requested Date',
	},
	{
		accessorKey: 'orderNotes',
		header: 'Notes',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},

	{
		id: 'actions',
		cell: ({ row }) => {
			const labRequest = row.original;
			const dispatch = useDispatch<AppDispatch>();
			const [isDialogOpen, setIsDialogOpen] = useState(true);

			const handleDialogClose = () => {
				setIsDialogOpen(false);
			};

			const handleOnSave = (labRequestReport: LabRequest) => {
				dispatch(
					updateLabRequest({
						labRequestId: labRequestReport.id,
						labRequest: labRequestReport,
					})
				);
			};

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="bg-white shadow-2xl  shadow-black/50 border border-gray-200 rounded-xl p-2">
						<ul>
							<li>
								<LabReportDetailDialog
									open={true}
									onClose={close}
									labReport={labRequest}
								/>
							</li>
							<li>
								<EditLabReportDetailsDialog
									open={isDialogOpen}
									onClose={handleDialogClose}
									selectedLabReport={labRequest}
									onSave={handleOnSave}
								/>
							</li>
						</ul>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
