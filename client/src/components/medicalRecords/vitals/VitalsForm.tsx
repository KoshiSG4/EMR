import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { VitalsRecord } from '@/types/vitalsRecords';

interface VitalsFormProps {
	onSubmit: (data: VitalsRecord) => void;
	patientId: string;
	recordedBy: string;
	onClose: () => void;
}

const VitalsForm = ({
	onSubmit,
	patientId,
	recordedBy,
	onClose,
}: VitalsFormProps) => {
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
				className="m-4 space-y-4 p-6 bg-white rounded-2xl shadow-md">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<Input
						name="height"
						type="number"
						placeholder="Height (cm)"
						value={vitals.height}
						required
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
						required
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
						required
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
						required
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
						required
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
						required
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
						required
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
						required={true}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
						min={'1'}
						step={'1'}
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

export default VitalsForm;
