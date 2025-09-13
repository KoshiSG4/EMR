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
import { useEffect, useState } from 'react';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { Patient } from '@/types/patientTypes';

interface EditPatientInfoDialogProps {
	open: boolean;
	onClose: () => void;
	selectedPatient: Patient | null;
	onSave: (updated: Patient) => void;
}

const EditPatientInfoDialog = ({
	open,
	onClose,
	selectedPatient,
	onSave,
}: EditPatientInfoDialogProps) => {
	if (!selectedPatient) return null;

	const [formData, setFormData] = useState<Patient | null>(null);

	useEffect(() => {
		if (selectedPatient) {
			setFormData(selectedPatient);
		}
	}, [selectedPatient]);

	if (!formData) return null;

	const handleChange = (
		field: keyof Patient['user'] | keyof Patient,
		value: string
	) => {
		if (field === 'name' || field === 'email') {
			setFormData((prev) =>
				prev
					? { ...prev, user: { ...prev.user, [field]: value } }
					: prev
			);
		} else {
			setFormData((prev) => (prev ? { ...prev, [field]: value } : prev));
		}
	};

	const handleSubmit = () => {
		if (!formData) return;
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
						Edit {formData.user.name}
					</DialogTitle>
					<DialogDescription>
						Update patient details below
					</DialogDescription>
				</DialogHeader>

				<div className="grid grid-cols-2 gap-4 mt-4 text-sm">
					<div>
						<Label>Name</Label>
						<Input
							value={formData.user.name}
							onChange={(e) =>
								handleChange('name', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Email</Label>
						<Input
							type="email"
							value={formData.user.email}
							onChange={(e) =>
								handleChange('email', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Date of Birth</Label>
						<Input
							type="date"
							value={formData.dateOfBirth}
							onChange={(e) =>
								handleChange('dateOfBirth', e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Gender</Label>
						<Select
							value={formData.gender}
							onValueChange={(value) =>
								handleChange('gender', value)
							}>
							<SelectTrigger>
								<SelectValue placeholder="Select gender" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="MALE">Male</SelectItem>
								<SelectItem value="FEMALE">Female</SelectItem>
								<SelectItem value="OTHER">Other</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

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

export default EditPatientInfoDialog;
