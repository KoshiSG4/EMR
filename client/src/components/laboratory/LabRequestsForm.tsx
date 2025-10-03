import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LabRequest } from '@/types/labRequest';

interface LabRequestsFormProps {
	onSubmit: (data: LabRequest) => void;
	patientId: string;
	doctorId: string;
	doctorName: string;
	patientName: string;
}

const departments = ['Hematology', 'Biochemistry', 'Microbiology', 'Pathology'];
const testTypes = ['CBC', 'LFT', 'RFT', 'Blood Sugar', 'Urine Analysis'];
const priorities: LabRequest['priority'][] = ['ROUTINE', 'URGENT', 'STAT'];
const specimenTypes = ['Blood', 'Urine', 'Stool', 'Saliva', 'Tissue'];

const LabRequestsForm = ({
	onSubmit,
	patientId,
	doctorId,
	doctorName,
	patientName,
}: LabRequestsFormProps) => {
	const [labRequest, setLabRequest] = useState({
		testType: '',
		testCode: '',
		department: '',
		priority: 'ROUTINE' as LabRequest['priority'],
		specimenType: '',
		orderNotes: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setLabRequest((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const newRequest: LabRequest = {
			id: crypto.randomUUID(),
			testType: labRequest.testType,
			testCode: labRequest.testCode,
			department: labRequest.department,
			priority: labRequest.priority,
			doctorId,
			doctorName,
			patientId,
			patientName,
			status: 'PENDING',
			requestedAt: new Date().toISOString(),
			specimenType: labRequest.specimenType,
			orderNotes: labRequest.orderNotes,
		};

		onSubmit(newRequest);

		setLabRequest({
			testType: '',
			testCode: '',
			department: '',
			priority: 'ROUTINE',
			specimenType: '',
			orderNotes: '',
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{/* Test Type Dropdown */}
				<select
					name="testType"
					value={labRequest.testType}
					onChange={handleChange}
					className="w-full p-2 border rounded-lg"
					required>
					<option value="">Select Test Type</option>
					{testTypes.map((t) => (
						<option key={t} value={t}>
							{t}
						</option>
					))}
				</select>

				{/* Test Code (free input) */}
				<Input
					name="testCode"
					type="text"
					placeholder="Test Code"
					value={labRequest.testCode}
					onChange={handleChange}
				/>

				{/* Department Dropdown */}
				<select
					name="department"
					value={labRequest.department}
					onChange={handleChange}
					className="w-full p-2 border rounded-lg"
					required>
					<option value="">Select Department</option>
					{departments.map((d) => (
						<option key={d} value={d}>
							{d}
						</option>
					))}
				</select>

				{/* Priority Dropdown */}
				<select
					name="priority"
					value={labRequest.priority}
					onChange={handleChange}
					className="w-full p-2 border rounded-lg">
					{priorities.map((p) => (
						<option key={p} value={p}>
							{p}
						</option>
					))}
				</select>

				{/* Specimen Type Dropdown */}
				<select
					name="specimenType"
					value={labRequest.specimenType}
					onChange={handleChange}
					className="w-full p-2 border rounded-lg">
					<option value="">Select Specimen</option>
					{specimenTypes.map((s) => (
						<option key={s} value={s}>
							{s}
						</option>
					))}
				</select>

				{/* Order Notes */}
				<Input
					name="orderNotes"
					type="text"
					placeholder="Order Notes"
					value={labRequest.orderNotes}
					onChange={handleChange}
				/>
			</div>

			<div className="flex justify-end mt-6">
				<Button
					type="submit"
					className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
					Save Request
				</Button>
			</div>
		</form>
	);
};

export default LabRequestsForm;
