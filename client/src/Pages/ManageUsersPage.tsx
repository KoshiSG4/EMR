import { AppDispatch, RootState } from '@/store/store';
import { Patient } from '@/types/patientTypes';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../components/common/DataTable';
import { useLocation, useNavigate } from 'react-router-dom';
import { patientColumns } from '../components/patients/patientColumns';
import { selectPatientsWithUserData } from '../components/patients/patientSelecter';
import { PatientWithUserData } from '@/types/patientWithUserDataType';
import {
	UserColumnProps,
	UserColumns,
} from '@/components/manageUsers/userColumns';
import {
	addNewUser,
	clearSelectedUser,
	getAllUsers,
	setSelectedUser,
	setUsers,
} from '@/store/slices/userSlice';
import { User } from '@/types/userTypes';
import AddNewUserForm from '@/components/manageUsers/AddNewUser';
import { LoaderIcon, Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import UserDetailsDialog from '@/components/manageUsers/UserDialog';
import { clearSelectedPatient } from '@/store/slices/patientSlice';

const ManageUsersPage = () => {
	const { users, loggedInUser, loading } = useSelector(
		(state: RootState) => state.user
	);
	const patientsWithUserData = useSelector(selectPatientsWithUserData);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState<User | null>();
	const ref = useRef<HTMLDivElement>(null);
	const location = useLocation();
	const [roleFilter, setRoleFilter] = useState<string | null>(null);

	useEffect(() => {
		if (!users || users.length <= 0) {
			dispatch(getAllUsers());
			dispatch(setUsers(users));
		}

		if (location.state?.label) {
			switch (location.state.label) {
				case 'DOCTOR':
				case 'NURSE':
				case 'PATIENT':
					setRoleFilter(location.state.label);
					break;

				default:
					break;
			}
		}

		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsFormOpen(false);
			}
			dispatch(clearSelectedUser());
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, [location.state]);

	const handleAddNewUserForm = (user: User) => {
		dispatch(addNewUser({ user }));
		setIsFormOpen(false);
	};

	const calculateAge = (dob: Date) => {
		const today = new Date();
		let age = today.getFullYear() - dob.getFullYear();
		const m = today.getMonth() - dob.getMonth();

		if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
			age--;
		}
		return age;
	};

	const userData = users.map((user: User) => {
		return {
			name: user.name ?? '',
			email: user.email ?? '',
			role: user.role ?? '',
			dateOfBirth: user.dateOfBirth ?? '',
			gender: user.gender ?? '',
			phone: user.phone ?? '',
			address: user.address ?? '',
			bloodType: user.bloodType ?? '',
			profileImage: user.profileImage ?? '',
			shift: user.shift ?? '',
			id: user.id ?? '',
		};
	});

	const handleSelectUser: (rowData: UserColumnProps) => void = (rowData) => {
		const user = users.find((user) => user.id === rowData.id);
		setSelectedUser(user);
	};

	return (
		<div className="p-6 mb-16 relative">
			{/* Spinner */}
			{loading && (
				<div className="flex min-h-screen items-center justify-center bg-purple-50/30">
					<div className="text-purple-600 pr-3">Loading...</div>
					<LoaderIcon
						role="status"
						aria-label="Loading"
						className={cn('size-4 animate-spin')}
					/>
				</div>
			)}
			{loggedInUser && (
				<AddNewUserForm
					onSubmit={handleAddNewUserForm}
					addedByName={loggedInUser?.name}
				/>
			)}
			<DataTable
				columns={UserColumns}
				data={
					roleFilter
						? userData.filter((user) => user.role === roleFilter)
						: userData
				}
				loading={loading}
				onRowSelect={handleSelectUser}
				filters={[
					{
						columnId: 'name',
						placeholder: 'Search patient by name...',
						className: 'max-w-sm',
					},
					{
						columnId: 'role',
						type: 'select',
						options: ['ADMIN', 'DOCTOR', 'NURSE', 'PATIENT'],
						value: roleFilter || '',
						onChange: (val: string) => setRoleFilter(val || null),
						className: 'max-w-sm ',
					},
				]}
			/>
			{selectedUser && (
				<UserDetailsDialog
					open={true}
					onClose={() => setSelectedUser(null)}
					user={selectedUser}
				/>
			)}
		</div>
	);
};

export default ManageUsersPage;
