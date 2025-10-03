import { useForm } from 'react-hook-form';
import { z } from 'zod';
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

import { MedicationInventory } from '@/types/medicationInventoryType';
import { AppDispatch, RootState } from '@/store/store';
import { clearResults } from '@/store/slices/medicationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect, useState } from 'react';

const medicationSchema = z.object({
	name: z.string().min(1, 'Medication name is required'),
	form: z.enum(['Tablet', 'Injection', 'Syrup']),
	strength: z.string().optional(),
	batchNumber: z.string().optional(),
	quantity: z.number().min(0),
	reorderLevel: z.number().min(0),
	status: z.enum([
		'IN_STOCK',
		'LOW_STOCK',
		'OUT_OF_STOCK',
		'ON_ORDER',
		'ARRIVED',
		'EXPIRED',
		'RESERVED',
	]),
	supplier: z.string().optional(),
	orderDate: z.string().optional(),
	arrivalDate: z.string().optional(),
	expiryDate: z.string().optional(),
	reservedFor: z.string().optional(),
});

type MedicationFormValues = z.infer<typeof medicationSchema>;

interface AddNewMedicationFormProps {
	onSubmit: (data: MedicationInventory) => void;
	initialData?: Partial<MedicationInventory>;
	addedByName: string;
}

const AddNewMedicationForm = ({
	onSubmit,
	initialData,
	addedByName,
}: AddNewMedicationFormProps) => {
	const dispatch = useDispatch<AppDispatch>();
	const { medications } = useSelector(
		(state: RootState) => state.medications
	);

	const form = useForm<MedicationFormValues>({
		resolver: zodResolver(medicationSchema),
		defaultValues: {
			name: initialData?.name || '',
			form:
				(initialData?.form as 'Tablet' | 'Injection' | 'Syrup') ||
				'Tablet',
			strength: initialData?.strength || '',
			batchNumber: initialData?.batchNumber || '',
			quantity: initialData?.quantity || 0,
			reorderLevel: initialData?.reorderLevel || 0,
			status:
				(initialData?.status as
					| 'IN_STOCK'
					| 'LOW_STOCK'
					| 'OUT_OF_STOCK'
					| 'ON_ORDER'
					| 'ARRIVED'
					| 'EXPIRED'
					| 'RESERVED') || 'IN_STOCK',
			supplier: initialData?.supplier || '',
			orderDate: initialData?.orderDate || '',
			arrivalDate: initialData?.arrivalDate || '',
			expiryDate: initialData?.expiryDate || '',
			reservedFor: initialData?.reservedFor || '',
		},
	});

	const ref = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const handleFormSubmit = (data: MedicationFormValues) => {
		const newMedication: MedicationInventory = {
			id: crypto.randomUUID(),
			name: data.name,
			form: data.form,
			strength: data.strength || '',
			batchNumber: data.batchNumber || '',
			quantity: data.quantity,
			reorderLevel: data.reorderLevel,
			status: data.status,
			supplier: data.supplier || '',
			orderDate: data.orderDate || '',
			arrivalDate: data.arrivalDate || '',
			expiryDate: data.expiryDate || '',
			reservedFor: data.reservedFor || '',
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		dispatch(clearResults());
		onSubmit(newMedication);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleFormSubmit)}
				className="space-y-6 max-w-2xl mx-auto bg-white shadow rounded-2xl p-6">
				{/* Name */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Medication Name</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g., Paracetamol"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Form */}
				<FormField
					control={form.control}
					name="form"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Form</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select form" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="Tablet">
										Tablet
									</SelectItem>
									<SelectItem value="Injection">
										Injection
									</SelectItem>
									<SelectItem value="Syrup">Syrup</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Strength */}
				<FormField
					control={form.control}
					name="strength"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Strength</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g., 500mg, 10ml"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Batch Number */}
				<FormField
					control={form.control}
					name="batchNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Batch Number</FormLabel>
							<FormControl>
								<Input placeholder="Batch #123" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Quantity & Reorder Level */}
				<div className="grid grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="quantity"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Quantity</FormLabel>
								<FormControl>
									<Input type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="reorderLevel"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Reorder Level</FormLabel>
								<FormControl>
									<Input type="number" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				{/* Status */}
				<FormField
					control={form.control}
					name="status"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Status</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select status" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="IN_STOCK">
										In Stock
									</SelectItem>
									<SelectItem value="LOW_STOCK">
										Low Stock
									</SelectItem>
									<SelectItem value="OUT_OF_STOCK">
										Out of Stock
									</SelectItem>
									<SelectItem value="ON_ORDER">
										On Order
									</SelectItem>
									<SelectItem value="ARRIVED">
										Arrived
									</SelectItem>
									<SelectItem value="EXPIRED">
										Expired
									</SelectItem>
									<SelectItem value="RESERVED">
										Reserved
									</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Supplier */}
				<FormField
					control={form.control}
					name="supplier"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Supplier</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g., ABC Pharma Ltd."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Dates */}
				<div className="grid grid-cols-3 gap-4">
					<FormField
						control={form.control}
						name="orderDate"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Order Date</FormLabel>
								<FormControl>
									<Input type="date" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="arrivalDate"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Arrival Date</FormLabel>
								<FormControl>
									<Input type="date" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="expiryDate"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Expiry Date</FormLabel>
								<FormControl>
									<Input type="date" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				{/* Reserved For */}
				<FormField
					control={form.control}
					name="reservedFor"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Reserved For</FormLabel>
							<FormControl>
								<Input
									placeholder="Patient/Department name"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">Add Medication</Button>
			</form>
		</Form>
	);
};

export default AddNewMedicationForm;
