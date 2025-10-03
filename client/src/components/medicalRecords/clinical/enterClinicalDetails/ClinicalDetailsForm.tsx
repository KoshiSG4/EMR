import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ClinicalDetailRecord } from '@/types/clinicalDetailRecord';

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
		hpi: '',
		allergies: '',
		notes: '',
		assessment: '',
		plan: '',
	});

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
			hpi: clinicalDetails.hpi,
			allergies: clinicalDetails.allergies,
			notes: clinicalDetails.notes,
			assessment: clinicalDetails.assessment,
			plan: clinicalDetails.plan,
			recordedBy,
			patientId,
		};
		setClinicalDetails({
			chiefComplaint: '',
			hpi: '',
			allergies: '',
			notes: '',
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
						name="hpi"
						type="text"
						placeholder="HPI"
						value={clinicalDetails.hpi}
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
						name="notes"
						type="text"
						placeholder="Notes"
						value={clinicalDetails.notes}
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
