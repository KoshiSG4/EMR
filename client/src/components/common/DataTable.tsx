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
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	ChevronsRight,
	ChevronRight,
	ChevronLeft,
	ChevronsLeft,
	ChevronDown,
} from 'lucide-react';
import { useState } from 'react';
import { Select } from '../ui/select';
import {
	SelectContent,
	SelectItem,
	SelectTrigger,
} from '@radix-ui/react-select';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';

interface TableFilter<TData> {
	columnId: keyof TData;
	type?: 'text' | 'select';
	placeholder?: string;
	options?: string[];
	value?: string;
	onChange?: (val: string) => void;
	className?: string;
}
interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	loading: boolean;
	onRowSelect?: (RowData: TData) => void;
	filters?: TableFilter<TData>[];
}

const DataTable = <TData extends object, TValue>({
	columns,
	data,
	loading,
	filters,
	onRowSelect,
}: DataTableProps<TData, TValue>) => {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

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

	return (
		<div>
			<div className="flex items-center py-4 space-x-4">
				{filters?.map((filter) => {
					const column = table.getColumn(filter.columnId as string);

					if (!column) return null;

					if (filter.type === 'select' && filter.options) {
						const currentValue =
							(column.getFilterValue() as string) ??
							filter.value ??
							'';

						return (
							<DropdownMenu key={String(filter.columnId)}>
								<DropdownMenuTrigger asChild>
									<Button
										variant="outline"
										className={cn(
											'flex items-center justify-between gap-2 px-3 py-1.5',
											'rounded-md border bg-[#1d3332] text-[#D6F3F6] hover:text-[#132120]  shadow-sm',
											'hover:bg-[#c5ab19] ',
											'focus-visible:outline-none focus-visible:ring-0 transition-all'
										)}>
										{currentValue || 'All'}
										<ChevronDown className="h-4 w-4 opacity-50" />
									</Button>
								</DropdownMenuTrigger>

								<DropdownMenuContent
									align="start"
									className="z-50 w-44 rounded-lg border border-gray-200 bg-[#D4DEE1]  shadow-lg">
									<DropdownMenuItem
										onClick={() =>
											column.setFilterValue('')
										}
										className={cn(
											'cursor-pointer px-3 py-2 text-sm select-none',
											'hover:bg-[#c1cacc] hover:text-sky-800 transition-colors',
											'focus:outline-none focus:ring-0 focus-visible:ring-0 data-[highlighted]:outline-none data-[highlighted]:ring-0',
											currentValue === '' &&
												'bg-[#949b9c] text-sky-800 font-medium'
										)}>
										All
									</DropdownMenuItem>

									{filter.options.map((opt) => (
										<DropdownMenuItem
											key={opt}
											onClick={() =>
												column.setFilterValue(opt)
											}
											className={cn(
												'cursor-pointer px-3 py-2 text-sm select-none border-[1px]',
												'hover:bg-[#c1cacc] hover:text-sky-800 transition-colors',
												'focus:outline-none focus:ring-0 focus-visible:ring-0 data-[highlighted]:outline-none data-[highlighted]:ring-0',
												currentValue === opt &&
													'bg-[#c1cacc] text-sky-800 font-medium '
											)}>
											{opt}
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						);
					}

					return (
						<Input
							key={String(filter.columnId)}
							placeholder={
								filter.placeholder ??
								`Filter by ${String(filter.columnId)}...`
							}
							value={(column.getFilterValue() as string) ?? ''}
							onChange={(e) =>
								column.setFilterValue(e.target.value)
							}
							className={`
          max-w-sm px-3 py-2 border border-gray-300 rounded-md
          bg-white text-gray-700 shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
          hover:border-blue-400 transition-colors
        `}
						/>
					);
				})}
			</div>

			<div className="overflow-hidden rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef
														.header,
													header.getContext()
											  )}
									</TableHead>
								))}
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
									}
									onClick={() => {
										const rowData = row.original as TData;
										onRowSelect?.(rowData);
									}}
									className="cursor-pointer hover:bg-sky-50">
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
				<div className="flex items-center space-x-6 lg:space-x-8">
					<div className="flex items-center space-x-3">
						<p className="text-sm font-medium text-gray-700">
							Rows per page:
						</p>
						<Select
							value={`${table.getState().pagination.pageSize}`}
							onValueChange={(value) => {
								table.setPageSize(Number(value));
							}}>
							<SelectTrigger className="h-8 w-8 rounded-md border border-gray-300 bg-white px-2 text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
								<span>
									{table.getState().pagination.pageSize}{' '}
								</span>
							</SelectTrigger>
							<SelectContent
								side="top"
								position="popper"
								className="rounded-md border border-gray-200 bg-white shadow-lg z-50">
								{[10, 20, 25, 30, 40, 50].map((pageSize) => (
									<SelectItem
										key={pageSize}
										value={`${pageSize}`}
										className="text-sm text-gray-700 hover:bg-blue-50 cursor-pointer">
										{pageSize}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div className="flex w-[100px] items-center justify-center text-sm font-normal">
						Page {table.getState().pagination.pageIndex + 1} of{' '}
						{table.getPageCount()}
					</div>

					<div className="flex items-center space-x-2">
						<Button
							variant="outline"
							size="icon"
							className="hidden size-8 lg:flex"
							onClick={() => table.setPageIndex(0)}
							disabled={!table.getCanPreviousPage()}>
							<span className="sr-only">Go to first page</span>
							<ChevronsLeft />
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="size-8"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}>
							<span className="sr-only">Go to previous page</span>
							<ChevronLeft />
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="size-8"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}>
							<span className="sr-only">Go to next page</span>
							<ChevronRight />
						</Button>
						<Button
							variant="outline"
							size="icon"
							className="hidden size-8 lg:flex"
							onClick={() =>
								table.setPageIndex(table.getPageCount() - 1)
							}
							disabled={!table.getCanNextPage()}>
							<span className="sr-only">Go to last page</span>
							<ChevronsRight />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataTable;
