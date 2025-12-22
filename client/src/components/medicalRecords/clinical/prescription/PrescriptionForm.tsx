import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Prescription } from '@/types/prescription';

interface PrescriptionFormProps {
	onSubmit: (data: Prescription) => void;
	patientId: string;
	prescribedBy: string;
	onClose: () => void;
}

const PrescriptionForm = ({
	onSubmit,
	patientId,
	prescribedBy,
	onClose,
}: PrescriptionFormProps) => {
	const [prescription, setPrescription] = useState({
		medication: '',
		dosage: '',
		frequency: '',
		duration: '',
		instructions: '',
	});
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setPrescription((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newPrescription: Prescription = {
			id: crypto.randomUUID(),
			date: new Date().toISOString(),
			medication: prescription.medication,
			dosage: prescription.dosage,
			frequency: prescription.frequency,
			duration: prescription.duration,
			instructions: prescription.instructions,
			prescribedBy,
			status: 'New',
		};
		setPrescription({
			medication: '',
			dosage: '',
			frequency: '',
			duration: '',
			instructions: '',
		});
		onSubmit(newPrescription);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Input
						name="medication"
						type="text"
						placeholder="Medication Name"
						value={prescription.medication}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="frequency"
						type="text"
						placeholder="Frequency "
						value={prescription.frequency}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="dosage"
						type="text"
						placeholder="Dosage"
						value={prescription.dosage}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="duration"
						type="text"
						placeholder="Duration"
						value={prescription.duration}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="instructions"
						type="text"
						placeholder="Instructions"
						value={prescription.instructions}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
				</div>

				<div className="flex justify-end mt-6 gap-3">
					<Button
						variant="outline"
						onClick={onClose}
						className="hover:bg-[#162725] hover:text-[#D6F3F6] hover:border-[#162725]  ">
						Cancel
					</Button>
					<Button
						type="submit"
						className="bg-[#1d3332] text-[#D6F3F6] hover:text-[#132120] hover:bg-[#c5ab19]">
						Save Vitals
					</Button>
				</div>
			</form>
		</>
	);
};

export default PrescriptionForm;
