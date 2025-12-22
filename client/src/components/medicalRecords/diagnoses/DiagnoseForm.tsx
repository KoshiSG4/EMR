import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MedicalRecord } from '@/types/medicalRecords';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { getAllDiagnosis } from '@/store/slices/diagnoseSlice';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface DiagnoseFormProps {
	onSubmit: (data: MedicalRecord) => void;
	patientId: string;
	recordedBy: string;
	onClose?: () => void;
}

const DiagnoseForm = ({
	onSubmit,
	patientId,
	recordedBy,
	onClose,
}: DiagnoseFormProps) => {
	const [diagnose, setDiagnose] = useState({
		notes: '',
		status: '',
		type: '',
		diagnosisId: '',
	});

	const dispatch = useDispatch<AppDispatch>();
	const diagnosis = useSelector(
		(state: RootState) => state.diagnosis.diagnosis
	);

	useEffect(() => {
		dispatch(getAllDiagnosis({ diagnosis: diagnosis }));
	}, []);

	const handleChange = (
		e?: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		fieldName?: string,
		value?: string
	) => {
		if (e) {
			const { name, value } = e.target;
			setDiagnose((prev) => ({ ...prev, [name]: value }));
		} else if (fieldName && value !== undefined) {
			setDiagnose((prev) => ({ ...prev, [fieldName]: value }));
		}
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
				className="m-4 space-y-4 p-6 bg-white rounded-2xl shadow-md">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<select
						className="w-full p-1 border rounded-lg focus:ring-1 focus:ring-blue-400 text-[#696b6e] text-sm"
						name="diagnosisId"
						value={diagnose.diagnosisId}
						onClick={(e) =>
							dispatch(getAllDiagnosis({ diagnosis: diagnosis }))
						}
						onChange={handleChange}>
						<option value="" className="p-2">
							Select Diagnosis
						</option>
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

export default DiagnoseForm;
