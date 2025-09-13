import { MedicationInventory } from '../../types/medicationInventoryType';
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';
import MedicationDetailsDialog from './MedicationDetailDialog';
import EditMedicationDialog from './EditMedicationDetailsDialog';
import { updateMedication } from '@/store/slices/medicationSlice';
import React, { useState } from 'react';

export const columns: ColumnDef<MedicationInventory>[] = [
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

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

const MedicationInventoryTable = <TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) => {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] =
		React.useState<ColumnFiltersState>([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters,
		},
	});

	const { medications, loading } = useSelector(
		(state: RootState) => state.medications
	);

	return (
		<div>
			<div className="flex items-center py-4">
				<Input
					placeholder="Filter medications..."
					value={
						(table.getColumn('name')?.getFilterValue() as string) ??
						''
					}
					onChange={(event) =>
						table
							.getColumn('name')
							?.setFilterValue(event.target.value)
					}
					className="max-w-sm"
				/>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="ml-auto focus:outline-none focus:ring-0">
							{table.getColumn('status')?.getFilterValue()
								? `Status: ${table
										.getColumn('status')
										?.getFilterValue()}`
								: 'Status'}
							<ChevronDown className="ml-2 h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="z-50 bg-white shadow-2xl shadow-black/50 border border-gray-200 rounded-xl p-2">
						<DropdownMenuLabel className="text-xs text-gray-500 px-2 py-1">
							Filter by Status
						</DropdownMenuLabel>
						{[
							'IN_STOCK',
							'LOW_STOCK',
							'OUT_OF_STOCK',
							'ON_ORDER',
							'ARRIVED',
							'EXPIRED',
							'RESERVED',
						].map((status) => (
							<DropdownMenuItem
								key={status}
								textValue={status}
								onSelect={() =>
									table
										.getColumn('status')
										?.setFilterValue(status)
								}
								className="px-3 py-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer focus:outline-none focus:ring-0">
								{status.replace('_', ' ')}
							</DropdownMenuItem>
						))}
						<DropdownMenuSeparator className="h-px bg-gray-300 my-1" />
						<DropdownMenuItem
							onSelect={() =>
								table.getColumn('status')?.setFilterValue('')
							}
							className="px-3 py-2 text-sm hover:bg-gray-100 rounded-md cursor-pointer focus:outline-none focus:ring-0">
							Clear Filter
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="overflow-hidden rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef
															.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={
										row.getIsSelected() && 'selected'
									}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : loading ? (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center">
									Loading...
								</TableCell>
							</TableRow>
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}>
					Previous
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}>
					Next
				</Button>
			</div>
		</div>
	);
};

export default MedicationInventoryTable;
