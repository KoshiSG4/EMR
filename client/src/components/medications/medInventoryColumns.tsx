import { MedicationInventory } from '../../types/medicationInventoryType';
import { ColumnDef } from '@tanstack/react-table';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import MedicationDetailsDialog from './MedicationDetailDialog';
import EditMedicationDialog from './EditMedicationDetailsDialog';
import { updateMedication } from '@/store/slices/medicationSlice';
import React, { useState } from 'react';

export const medInventryColumns: ColumnDef<MedicationInventory>[] = [
	{
		accessorKey: 'name',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}>
					Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{ accessorKey: 'form', header: 'Form' },
	{ accessorKey: 'strength', header: 'Strength' },
	{
		accessorKey: 'quantity',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
					className="flex items-center justify-center w-full">
					Quantity
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<div className="pl-10">{row.getValue('quantity')}</div>
		),
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	{ accessorKey: 'batchNumber', header: 'Batch Number' },
	{
		accessorKey: 'supplier',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}>
					Supplier
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{ accessorKey: 'orderDate', header: 'Order Date' },
	{ accessorKey: 'arrivalDate', header: 'Arrival Date' },
	{
		accessorKey: 'reorderLevel',
		header: 'Order Level',
		cell: ({ row }) => (
			<div className="pl-6">{row.getValue('quantity')}</div>
		),
	},

	{
		id: 'actions',
		cell: ({ row }) => {
			const medication = row.original;
			const dispatch = useDispatch<AppDispatch>();
			const [isDialogOpen, setIsDialogOpen] = useState(true);

			const handleDialogClose = () => {
				setIsDialogOpen(false);
			};

			const handleOnSave = (medication: MedicationInventory) => {
				dispatch(updateMedication({ medication }));
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
								<MedicationDetailsDialog
									open={true}
									onClose={close}
									medication={medication}
								/>
							</li>
							<li>
								<EditMedicationDialog
									open={isDialogOpen}
									onClose={handleDialogClose}
									selectedMedication={medication}
									onSave={handleOnSave}
								/>
							</li>
						</ul>

						<DropdownMenuItem className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-gray-700">
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
