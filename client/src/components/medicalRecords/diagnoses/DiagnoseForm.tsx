import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DiagnosisRecord } from '@/types/DiagnoseRecords';

interface DiagnoseFormProps {
	onSubmit: (data: DiagnosisRecord) => void;
	patientId: string;
	recordedBy: string;
}

const DiagnoseForm = ({
	onSubmit,
	patientId,
	recordedBy,
}: DiagnoseFormProps) => {
	const [diagnose, setDiagnose] = useState({
		code: '',
		name: '',
		severity: '',
		description: '',
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
		setDiagnose((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newDiagnose: DiagnosisRecord = {
			id: crypto.randomUUID(),
			patientId,
			date: new Date().toISOString(),
			code: diagnose.code,
			name: diagnose.name,
			severity: diagnose.severity,
			description: diagnose.description,
			recordedBy,
		};
		setDiagnose({
			code: '',
			name: '',
			severity: '',
			description: '',
		});
		onSubmit(newDiagnose);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Input
						name="code"
						type="number"
						placeholder="Code"
						value={diagnose.code}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
						min={'1'}
						step={'1'}
					/>
					<Input
						name="name"
						type="text"
						placeholder="Name"
						value={diagnose.name}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="severity"
						type="text"
						placeholder="Severity"
						value={diagnose.severity}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="description"
						type="text"
						placeholder="Description"
						value={diagnose.description}
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
