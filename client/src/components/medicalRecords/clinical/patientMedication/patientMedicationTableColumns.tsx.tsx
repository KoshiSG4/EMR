import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { PatientMedication } from '@/types/patientMedicationTypes';
import { Button } from '@/components/ui/button';

export const patientMedicationTableColumns: ColumnDef<PatientMedication>[] = [
	{
		accessorKey: 'name',
		header: ({ column }) => (
			<Button
				variant="ghost"
				onClick={() =>
					column.toggleSorting(column.getIsSorted() === 'asc')
				}>
				Name <ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
	},
	{
		accessorKey: 'dosage',
		header: 'Dosage',
	},
	{
		accessorKey: 'frequency',
		header: 'Frequency',
	},
	{
		accessorKey: 'route',
		header: 'Route',
	},
	{
		accessorKey: 'startDate',
		header: 'Start Date',
	},
	{
		accessorKey: 'endDate',
		header: 'End Date',
	},
	{
		accessorKey: 'instructions',
		header: 'Instructions',
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{
		accessorKey: 'prescribedByName',
		header: 'Prescribed By',
	},
	{
		accessorKey: 'createdAt',
		header: 'Created At',
	},
	{
		accessorKey: 'updatedAt',
		header: 'Updated At',
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const [isDialogOpen, setIsDialogOpen] = useState(false);

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
						className="z-50 bg-white shadow-2xl shadow-black/50 border border-gray-200 rounded-xl p-2">
						<DropdownMenuLabel className="text-xs text-gray-500 px-2 py-1">
							Actions
						</DropdownMenuLabel>
						<DropdownMenuItem
							onSelect={() => setIsDialogOpen(true)}
							className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-gray-700">
							Edit
						</DropdownMenuItem>
						<DropdownMenuItem className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-red-500">
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
