import {
	Dialog,
	DialogContent,
	DialogClose,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from '@/components/ui/select';
import { MedicationInventory } from '@/types/medicationInventoryType';
import { useEffect, useState } from 'react';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import {
	setSelectedMedication,
	updateMedication,
	updateMedicationInventory,
} from '@/store/slices/medicationSlice';

interface EditMedicationDialogProps {
	open: boolean;
	onClose: () => void;
	selectedMedication: MedicationInventory | null;
	onSave: (updated: MedicationInventory) => void;
}

const EditMedicationDialog = ({
	open,
	onClose,
	selectedMedication,
	onSave,
}: EditMedicationDialogProps) => {
	if (!selectedMedication) return null;

	const [formData, setFormData] = useState<MedicationInventory | null>(null);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (selectedMedication) {
			setFormData(selectedMedication);
			dispatch(setSelectedMedication(selectedMedication));
		}
	}, [selectedMedication]);

	if (!formData) return null;

	const handleChange = (
		field: keyof MedicationInventory,
		value: string | number
	) => {
		setFormData((prev) => (prev ? { ...prev, [field]: value } : prev));
	};

	const handleSubmit = () => {
		if (!formData) return;

		dispatch(updateMedication({ medication: formData }));
		dispatch(updateMedicationInventory({ selectedMedication: formData }));
		onSave(formData);
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="px-3 py-2 w-full justify-start rounded-md hover:bg-gray-100 cursor-pointer text-gray-700">
					Edit
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-3xl p-6">
				<DialogHeader>
					<DialogTitle className="text-xl font-semibold">
						Edit {selectedMedication.name}
					</DialogTitle>
					<DialogDescription>
						Update medication details below
					</DialogDescription>
				</DialogHeader>

				{/* Form Fields */}
				<div className="grid grid-cols-2 gap-4 mt-4 text-sm">
					<div>
						<Label>Name</Label>
						<Input
							value={formData.name}
							onChange={(e) =>
								handleChange('name', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Form</Label>
						<Input
							value={formData.form}
							onChange={(e) =>
								handleChange('form', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Strength</Label>
						<Input
							value={formData.strength}
							onChange={(e) =>
								handleChange('strength', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Batch Number</Label>
						<Input
							value={formData.batchNumber}
							onChange={(e) =>
								handleChange('batchNumber', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Quantity</Label>
						<Input
							type="number"
							value={formData.quantity}
							onChange={(e) =>
								handleChange('quantity', Number(e.target.value))
							}
						/>
					</div>
					<div>
						<Label>Reorder Level</Label>
						<Input
							type="number"
							value={formData.reorderLevel}
							onChange={(e) =>
								handleChange(
									'reorderLevel',
									Number(e.target.value)
								)
							}
						/>
					</div>
					<div>
						<Label>Status</Label>
						<Select
							value={formData.status}
							onValueChange={(value) =>
								handleChange('status', value)
							}>
							<SelectTrigger>
								<SelectValue placeholder="Select status" />
							</SelectTrigger>
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
								<SelectItem value="ARRIVED">Arrived</SelectItem>
								<SelectItem value="EXPIRED">Expired</SelectItem>
								<SelectItem value="RESERVED">
									Reserved
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div>
						<Label>Supplier</Label>
						<Input
							value={formData.supplier || ''}
							onChange={(e) =>
								handleChange('supplier', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Order Date</Label>
						<Input
							type="date"
							value={formData.orderDate || ''}
							onChange={(e) =>
								handleChange('orderDate', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Arrival Date</Label>
						<Input
							type="date"
							value={formData.arrivalDate || ''}
							onChange={(e) =>
								handleChange('arrivalDate', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Expiry Date</Label>
						<Input
							type="date"
							value={formData.expiryDate || ''}
							onChange={(e) =>
								handleChange('expiryDate', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Reserved For</Label>
						<Input
							value={formData.reservedFor || ''}
							onChange={(e) =>
								handleChange('reservedFor', e.target.value)
							}
						/>
					</div>
				</div>

				{/* Footer */}
				<DialogFooter className="mt-6 flex justify-between">
					<DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose>

					<Button onClick={handleSubmit}>Save Changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default EditMedicationDialog;
