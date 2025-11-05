import { useForm } from 'react-hook-form';
import { email, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect, useState } from 'react';
import { User } from '@/types/userTypes';
import {
	Dialog,
	DialogContent,
	DialogOverlay,
	DialogTitle,
	DialogTrigger,
} from '@radix-ui/react-dialog';
import { DialogClose, DialogFooter, DialogHeader } from '../ui/dialog';
import { useLocation } from 'react-router-dom';

const userSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	role: z.enum(['PATIENT', 'ADMIN', 'DOCTOR', 'NURSE']),
	dateOfBirth: z.string().min(1, 'Date of birth is required'),
	gender: z.enum(['Male', 'Female']),
	phone: z.string().min(1, 'Phone number is required'),
	address: z.string().min(1, 'Address is required'),
	bloodType: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
	profileImage: z.string().url().optional(),
	shift: z
		.enum([
			'12:00AM - 08:00AM',
			'08:00AM - 4:00PM',
			'4.00PM - 12.00AM',
			'09:00AM - 5:00PM',
		])
		.optional(),
});

type UserFormValues = z.infer<typeof userSchema>;

interface AddNewUserFormProps {
	onSubmit: (data: User) => void;
	addedByName: string;
}

const AddNewUserForm = ({ onSubmit, addedByName }: AddNewUserFormProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const users = useSelector((state: RootState) => state.user.users);
	const [showAddDialog, setShowAddDialog] = useState(false);
	const location = useLocation();

	useEffect(() => {
		if (location.state?.label) {
			switch (location.state.label) {
				case 'Add New User':
					setShowAddDialog(true);
					break;
				default:
					break;
			}
		}
	}, [location.state]);

	const form = useForm<UserFormValues>({
		resolver: zodResolver(userSchema),
	});

	const handleFormSubmit = (data: UserFormValues) => {
		const newUser: User = {
			id: crypto.randomUUID(),
			name: data.name,
			email: data.email,
			role: data.role,
			dateOfBirth: data.dateOfBirth || '',
			gender: data.gender,
			phone: data.phone || '',
			address: data.address || '',
			bloodType: data.bloodType || '',
			profileImage: data.profileImage || '',
		};

		onSubmit(newUser);
	};

	return (
		<Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleFormSubmit)}>
					<DialogTrigger asChild>
						<Button
							className="absolute top-6 right-6 bg-[#1d3332] text-[#D6F3F6] hover:text-[#132120] hover:bg-[#c5ab19]"
							onClick={() => setShowAddDialog(true)}>
							Add New User
						</Button>
					</DialogTrigger>
					<DialogOverlay className="absolute inset-0 bg-white/30 backdrop-blur-sm z-40" />
					<DialogContent className="absolute z-50 top-0 left-1/3 h-[98%] w-2/4 p-4 bg-[#6B8B81] rounded-lg shadow-xl sm:max-w-[425px]">
						<DialogTitle className="pb-2 pt-0 font-semibold text-center text-lg">
							Add New User
						</DialogTitle>
						<div className="p-5 rounded-lg h-[85%] bg-slate-50 overflow-y-auto scrollbar-thin scrollbar-thumb-[#bbc9c5] scrollbar-track-[#6B8B81]">
							{/* Name */}
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												placeholder="e.g., Anna Johanson"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* Email */}
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder="e.g., anna@example.com"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Role */}
							<FormField
								control={form.control}
								name="role"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Role</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select Role" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="PATIENT">
													Patient
												</SelectItem>
												<SelectItem value="DOCTOR">
													Doctor
												</SelectItem>
												<SelectItem value="NURSE">
													Nurse
												</SelectItem>
												<SelectItem value="ADMIN">
													Admin
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Date of Birth */}
							<FormField
								control={form.control}
								name="dateOfBirth"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Date of Birth</FormLabel>
										<FormControl>
											<Input type="date" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Gender */}
							<FormField
								control={form.control}
								name="gender"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Gender</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select Gender" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="Male">
													Male
												</SelectItem>
												<SelectItem value="Female">
													Female
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Contact Number */}
							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Contact Number</FormLabel>
										<FormControl>
											<Input
												placeholder="+1234567890"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Address */}
							<FormField
								control={form.control}
								name="address"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Address</FormLabel>
										<FormControl>
											<Input
												placeholder="e.g., 123 Main Street, City, Country"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Blood Type */}
							<FormField
								control={form.control}
								name="bloodType"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Blood Type</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select Blood Type" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="A+">
													A+
												</SelectItem>
												<SelectItem value="A-">
													A-
												</SelectItem>
												<SelectItem value="B+">
													B+
												</SelectItem>
												<SelectItem value="B-">
													B-
												</SelectItem>
												<SelectItem value="AB+">
													AB+
												</SelectItem>
												<SelectItem value="AB-">
													AB-
												</SelectItem>
												<SelectItem value="O+">
													O+
												</SelectItem>
												<SelectItem value="O-">
													O-
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Profile Image */}
							<FormField
								control={form.control}
								name="profileImage"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Profile Image</FormLabel>
										<FormControl>
											<Input
												placeholder="Add profile image"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Shift */}
							<FormField
								control={form.control}
								name="shift"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Shift</FormLabel>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select shift" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="12:00AM - 08:00AM">
													12:00AM - 08:00AM
												</SelectItem>
												<SelectItem value="08:00AM - 4:00PM">
													08:00AM - 4:00PM
												</SelectItem>
												<SelectItem value="4.00PM - 12.00AM">
													4.00PM - 12.00AM
												</SelectItem>
												<SelectItem value="09:00AM - 5:00PM">
													09:00AM - 5:00PM
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<DialogFooter className="pt-4">
							<DialogClose asChild>
								<Button
									variant="outline"
									className="hover:bg-[#162725] hover:text-[#D6F3F6] hover:border-[#162725] ">
									Cancel
								</Button>
							</DialogClose>
							<Button
								type="submit"
								className="bg-[#1d3332] text-[#D6F3F6] hover:text-[#132120] hover:bg-[#c5ab19]">
								Add User
							</Button>
						</DialogFooter>
					</DialogContent>
				</form>
			</Form>
		</Dialog>
	);
};

export default AddNewUserForm;
