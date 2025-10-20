import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { VitalsRecord } from '@/types/vitalsRecords';

interface VitalsFormProps {
	onSubmit: (data: VitalsRecord) => void;
	patientId: string;
	recordedBy: string;
}

const VitalsForm = ({ onSubmit, patientId, recordedBy }: VitalsFormProps) => {
	const [vitals, setVitals] = useState({
		height: '',
		weight: '',
		bloodPressure: '',
		heartRate: '',
		respiratoryRate: '',
		temperature: '',
		spo2: '',
		painScore: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setVitals((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newVitals: VitalsRecord = {
			id: crypto.randomUUID(),
			patientId,
			height: vitals.height,
			weight: vitals.weight,
			bloodPressure: vitals.bloodPressure,
			heartRate: vitals.heartRate,
			respiratoryRate: vitals.respiratoryRate,
			temperature: vitals.temperature,
			spo2: vitals.spo2,
			painScore: vitals.painScore,
			recordedBy,
			createdDate: new Date().toISOString(),
			updatedDate: new Date().toISOString(),
		};
		setVitals({
			height: '',
			weight: '',
			bloodPressure: '',
			heartRate: '',
			respiratoryRate: '',
			temperature: '',
			spo2: '',
			painScore: '',
		});
		onSubmit(newVitals);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Input
						name="height"
						type="number"
						placeholder="Height (cm)"
						value={vitals.height}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
						min={'1'}
						step={'1'}
					/>
					<Input
						name="weight"
						type="number"
						placeholder="Weight (kg)"
						value={vitals.weight}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
						min={'1'}
						step={'1'}
					/>
					<Input
						name="bloodPressure"
						type="number"
						placeholder="Blood Pressure (e.g., 120/80)"
						value={vitals.bloodPressure}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
						min={'1'}
						step={'1'}
					/>
					<Input
						name="heartRate"
						type="number"
						placeholder="Heart Rate (bpm)"
						value={vitals.heartRate}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
						min={'1'}
						step={'1'}
					/>
					<Input
						name="respiratoryRate"
						type="number"
						placeholder="Respiratory Rate (breaths/min)"
						value={vitals.respiratoryRate}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
						min={'1'}
						step={'1'}
					/>
					<Input
						name="temperature"
						type="number"
						placeholder="Temperature (°C)"
						value={vitals.temperature}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
						min={'1'}
						step={'1'}
					/>
					<Input
						name="spo2"
						type="number"
						placeholder="Oxygen Saturation (%)"
						value={vitals.spo2}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
						min={'1'}
						step={'1'}
					/>
					<Input
						name="painScore"
						type="number"
						placeholder="Pain Score (0–10)"
						value={vitals.painScore}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
						min={'1'}
						step={'1'}
					/>
				</div>

				<div className="flex justify-end mt-6">
					<Button
						type="submit"
						onClick={handleSubmit}
						className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition">
						Save Vitals
					</Button>
				</div>
			</form>
		</>
	);
};

export default VitalsForm;
