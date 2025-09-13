import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LabRecord } from '@/types/LabRecord ';

interface LabRequestsFormProps {
	onSubmit: (data: LabRecord) => void;
	patientId: string;
	verifiedBy: string;
}

const LabRequestsForm = ({
	onSubmit,
	patientId,
	verifiedBy,
}: LabRequestsFormProps) => {
	const [labRequest, setLabRequest] = useState({
		testName: '',
		testCode: '',
		department: '',
		requestedBy: '',
		status: '',
		result: '',
		normalRange: '',
		interpretation: '',
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
		setLabRequest((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newRequest: LabRecord = {
			id: crypto.randomUUID(),
			date: new Date().toISOString(),
			testName: labRequest.testName,
			testCode: labRequest.testCode,
			department: labRequest.department,
			requestedBy: labRequest.requestedBy,
			status: labRequest.status,
			result: labRequest.result,
			normalRange: labRequest.normalRange,
			interpretation: labRequest.interpretation,
			verifiedBy,
		};
		setLabRequest({
			testName: '',
			testCode: '',
			department: '',
			requestedBy: '',
			status: '',
			result: '',
			normalRange: '',
			interpretation: '',
		});
		onSubmit(newRequest);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Input
						name="testName"
						type="text"
						placeholder="Test Name"
						value={labRequest.testName}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="testCode"
						type="text"
						placeholder="Code "
						value={labRequest.testCode}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="department"
						type="text"
						placeholder="Department"
						value={labRequest.department}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="requestedBy"
						type="text"
						placeholder="Requested By"
						value={labRequest.requestedBy}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="status"
						type="text"
						placeholder="Status"
						value={labRequest.status}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="result"
						type="text"
						placeholder="Result"
						value={labRequest.result}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="normalRange"
						type="text"
						placeholder="Normal Range"
						value={labRequest.normalRange}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="interpretation"
						type="text"
						placeholder="Interpretation"
						value={labRequest.interpretation}
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

export default LabRequestsForm;
