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
import PatientProfileCard from './PatientProfileCard ';
import { Patient } from '@/types/patientTypes';
import { updatePatient, updatePatientInfo } from '@/store/slices/patientSlice';

interface PatientColumnProps {
	userId: string;
	name: string;
	gender: string;
	age: number;
	dateOfBirth: string;
	email: string;
	emergencyContact: string;
	contactNo: string;
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
];
