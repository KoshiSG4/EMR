import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MedicalRecord } from '@/types/medicalRecords';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { getAllDiagnosis } from '@/store/slices/diagnoseSlice';

interface DiagnoseFormProps {
	onSubmit: (data: MedicalRecord) => void;
	patientId: string;
	recordedBy: string;
}

const DiagnoseForm = ({
	onSubmit,
	patientId,
	recordedBy,
}: DiagnoseFormProps) => {
	const [diagnose, setDiagnose] = useState({
		notes: '',
		status: '',
		type: '',
		diagnosisId: '',
	});
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch<AppDispatch>();
	const diagnosis = useSelector(
		(state: RootState) => state.diagnosis.diagnosis
	);
	// const diagnosisList = dispatch(getAllDiagnosis({diagnose}))
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

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setDiagnose((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newMedicalRecord: MedicalRecord = {
			id: crypto.randomUUID(),
			notes: diagnose.notes,
			createdAt: new Date().toISOString(),
			status: diagnose.status,
			type: diagnose.type,
			patientId,
			diagnosisId: diagnose.diagnosisId,
			doctorId: recordedBy,
		};
		setDiagnose({
			notes: '',
			status: '',
			type: '',
			diagnosisId: '',
		});
		onSubmit(newMedicalRecord);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<select
						name="name"
						value={diagnose.diagnosisId}
						onClick={(e) =>
							dispatch(getAllDiagnosis({ diagnosis: diagnosis }))
						}
						onChange={handleChange}>
						<option value="">Select Diagnosis</option>
						{diagnosis.map((d) => (
							<option key={d.id} value={d.id}>
								{d.name}
							</option>
						))}
					</select>
					<Input
						name="type"
						type="text"
						placeholder="Type"
						value={diagnose.type}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="status"
						type="text"
						placeholder="Status"
						value={diagnose.status}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="notes"
						type="text"
						placeholder="Notes"
						value={diagnose.notes}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
				</div>

				<div className="flex justify-end mt-6">
					<Button
						type="submit"
						onClick={handleSubmit}
						className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
						Save
					</Button>
				</div>
			</form>
		</>
	);
};

export default DiagnoseForm;
