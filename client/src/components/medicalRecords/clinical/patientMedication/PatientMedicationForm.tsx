import { MEDICATION_UNITS } from '@/components/medications/MedicationUnits';
import { clearResults } from '@/store/slices/patientSlice';
import { AppDispatch, RootState } from '@/store/store';
import { PatientMedication } from '@/types/patientMedicationTypes';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@radix-ui/react-select';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface PatientMedicationFormProps {
	onSubmit: (data: PatientMedication) => void;
	initialData?: Partial<PatientMedication>;
	patientId: string;
	prescribedByName: string;
}

const PatientMedicationForm = ({
	onSubmit,
	initialData,
	patientId,
	prescribedByName,
}: PatientMedicationFormProps) => {
	const [form, setForm] = useState({
		name: initialData?.name || '',
		dosage: initialData?.dosage || '',
		unit: '',
		frequency: initialData?.frequency || '',
		route: initialData?.route || '',
		startDate: initialData?.startDate || '',
		endDate: initialData?.endDate || '',
		instructions: initialData?.instructions || '',
	});

	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const dispatch = useDispatch<AppDispatch>();
	const { patientMedication: patientMedication, loading } = useSelector(
		(state: RootState) => state.patients
	);

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

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSelectSuggestion = (field: string, value: string) => {
		setForm({ ...form, [field]: value });
		dispatch(clearResults());
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newMedication: PatientMedication = {
			id: crypto.randomUUID(),
			patientId,
			name: form.name,
			dosage: `${form.dosage} ${form.unit}`,
			frequency: form.frequency,
			route: form.route,
			prescribedByName,
			startDate: form.startDate,
			endDate: form.endDate || undefined,
			status: 'New',
			instructions: form.instructions || '',
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};
		setForm({
			name: initialData?.name || '',
			dosage: initialData?.dosage || '',
			unit: '',
			frequency: initialData?.frequency || '',
			route: initialData?.route || '',
			startDate: initialData?.startDate || '',
			endDate: initialData?.endDate || '',
			instructions: initialData?.instructions || '',
		});
		onSubmit(newMedication);
	};
	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="max-w-lg mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
				{/* Medication Name */}
				<div className="relative">
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						placeholder="Medication Name"
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						required
					/>
					{patientMedication.length > 0 && (
						<ul>
							{patientMedication.map((med) => (
								<li
									key={med.id}
									onClick={() =>
										handleSelectSuggestion('name', med.name)
									}
									className="p-2 hover:bg-blue-100 cursor-pointer">
									<span className="font-medium">
										{med.name}
									</span>
								</li>
							))}
						</ul>
					)}
				</div>

				{/* Dosage */}
				<div className="grid grid-cols-2 gap-2 ">
					<input
						type="number"
						name="dosage"
						value={form.dosage}
						onChange={handleChange}
						placeholder="Dosage"
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						required
						min={'1'}
						step={'1'}
					/>
					<Select required>
						<SelectTrigger className="w-full h-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
							<SelectValue placeholder="Select Unit" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{MEDICATION_UNITS.map((unit) => (
									<>
										<SelectLabel className="text-gray-400 text-xs">
											{unit.key}
										</SelectLabel>
										{unit.units.map((u) => (
											<SelectItem key={u} value={u}>
												{u}
											</SelectItem>
										))}
									</>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				{/* Frequency */}
				<div>
					<input
						type="text"
						name="frequency"
						value={form.frequency}
						onChange={handleChange}
						placeholder="Frequency (e.g., twice a day)"
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						required
					/>
					{patientMedication.length > 0 && (
						<ul className="absolute left-0 right-0 mt-1 border rounded-lg bg-white shadow z-10 max-h-40 overflow-y-auto">
							{patientMedication.map((med) => (
								<li
									key={med.id + '-freq'}
									onClick={() =>
										handleSelectSuggestion(
											'frequency',
											med.frequency
										)
									}
									className="p-2 hover:bg-blue-100 cursor-pointer">
									{med.frequency}
								</li>
							))}
						</ul>
					)}
				</div>

				{/* Route */}
				<div className="relative">
					<Select
						onValueChange={(value) =>
							handleSelectSuggestion('route', value)
						}
						required>
						<SelectTrigger className="w-full h-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
							<SelectValue placeholder="Select Route" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value={'Oral'}>Oral</SelectItem>
							<SelectItem value={'IV'}>IV</SelectItem>
							<SelectItem value={'IM'}>IM</SelectItem>
							<SelectItem value={'Subcutaneous'}>
								Subcutaneous
							</SelectItem>
						</SelectContent>
					</Select>
				</div>

				{/* Start and End Date */}
				<div className="grid grid-cols-2 gap-4">
					<input
						type="date"
						name="startDate"
						value={form.startDate}
						onChange={handleChange}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						required
					/>
					<input
						type="date"
						name="endDate"
						value={form.endDate}
						onChange={handleChange}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						required
					/>
				</div>

				{/* Notes */}
				<textarea
					name="instructions"
					value={form.instructions}
					onChange={handleChange}
					placeholder="Additional Notes..."
					className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
				/>

				{/* Submit Button */}
				<button
					type="submit"
					onClick={handleSubmit}
					className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
					Save Medication
				</button>
			</form>
		</>
	);
};

export default PatientMedicationForm;
