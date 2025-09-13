import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ClinicalDetailRecord } from '@/types/ClinicalDetailRecord';

interface ClinicalDetailsFormProps {
	onSubmit: (data: ClinicalDetailRecord) => void;
	patientId: string;
	recordedBy: string;
}

const ClinicalDetailsForm = ({
	onSubmit,
	patientId,
	recordedBy,
}: ClinicalDetailsFormProps) => {
	const [clinicalDetails, setClinicalDetails] = useState({
		chiefComplaint: '',
		history: '',
		pastHistory: '',
		medications: '',
		allergies: '',
		examination: '',
		assessment: '',
		plan: '',
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
		setClinicalDetails((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newClinicalDetailRecord: ClinicalDetailRecord = {
			id: crypto.randomUUID(),
			date: new Date().toISOString(),
			chiefComplaint: clinicalDetails.chiefComplaint,
			history: clinicalDetails.history,
			pastHistory: clinicalDetails.pastHistory,
			medications: clinicalDetails.medications,
			allergies: clinicalDetails.allergies,
			examination: clinicalDetails.examination,
			assessment: clinicalDetails.assessment,
			plan: clinicalDetails.plan,
			recordedBy,
		};
		setClinicalDetails({
			chiefComplaint: '',
			history: '',
			pastHistory: '',
			medications: '',
			allergies: '',
			examination: '',
			assessment: '',
			plan: '',
		});
		onSubmit(newClinicalDetailRecord);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Input
						name="chiefComplaint"
						type="text"
						placeholder="Chief Complaint"
						value={clinicalDetails.chiefComplaint}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="history"
						type="text"
						placeholder="History"
						value={clinicalDetails.history}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="pastHistory"
						type="text"
						placeholder="Past History"
						value={clinicalDetails.pastHistory}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="medications"
						type="text"
						placeholder="Medications"
						value={clinicalDetails.medications}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="allergies"
						type="text"
						placeholder="Allergies"
						value={clinicalDetails.allergies}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="examination"
						type="text"
						placeholder="Examination"
						value={clinicalDetails.examination}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="assessment"
						type="text"
						placeholder="Assessment"
						value={clinicalDetails.assessment}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="plan"
						type="text"
						placeholder="Plan"
						value={clinicalDetails.plan}
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

export default ClinicalDetailsForm;
