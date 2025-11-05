import { ColumnDef } from '@tanstack/react-table';
import { Button } from '../ui/button';
import { ArrowUpDown, MoreHorizontal, User } from 'lucide-react';

export interface UserColumnProps {
	name: string;
	email: string;
	role: string;
	dateOfBirth: string;
	gender: string;
	phone: string;
	address: string;
	bloodType: string;
	profileImage?: string;
	shift?: string;
	id: string;
}

export const UserColumns: ColumnDef<UserColumnProps>[] = [
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
		accessorKey: 'role',
		header: 'Role',
	},
	{
		accessorKey: 'dateOfBirth',
		header: 'Date of Birth',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'phone',
		header: 'Contact No',
	},
	{
		accessorKey: 'address',
		header: 'Address',
	},
];
