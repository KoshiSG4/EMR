import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { AppDispatch } from '@/store/store';

interface PatientColumnProps {
	userId: string;
	name: string;
	gender: string;
	age: number;
	dateOfBirth: string;
	diagnosis: string;
	email: string;
	emergencyContact: string;
	contactNo: string;
	assignedDoctor: string;
}

export const patientColumns: ColumnDef<PatientColumnProps>[] = [
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
		accessorKey: 'gender',
		header: 'Gender',
	},
	{
		accessorKey: 'age',
		header: 'Age',
	},
	{
		accessorKey: 'dateOfBirth',
		header: 'Date of Birth',
	},
	{
		accessorKey: 'diagnosis',
		header: 'Diagnosis',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'emergencyContact',
		header: 'Emergency Contact',
	},
	{
		accessorKey: 'contactNo',
		header: 'Contact No',
	},
	{
		accessorKey: 'assignedDoctor',
		header: 'Assigned Doctor',
	},

	{
		id: 'actions',
		cell: ({ row }) => {
			const patient = row.original;
			const dispatch = useDispatch<AppDispatch>();
			const [isDialogOpen, setIsDialogOpen] = useState(false);

			const handleDialogClose = () => setIsDialogOpen(false);
			// const handleOnSave = (updated: Patient) =>
			//     dispatch(updatePatient({ patient: updated })
			//     );

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

						{/* <EditPatientInfoDialog
                            open={isDialogOpen}
                            onClose={handleDialogClose}
                            selectedPatient={patient}
                            onSave={handleOnSave}
                        /> */}
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
