import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { getAllDiagnosis } from '@/store/slices/diagnoseSlice';
import { HistoryRecord } from '@/types/historyType';

interface HistoryFormProps {
	onSubmit: (data: HistoryRecord) => void;
	patientId: string;
	recordedBy: string;
}

const HistoryForm = ({ onSubmit, patientId, recordedBy }: HistoryFormProps) => {
	const [history, setHistory] = useState({
		chronicConditions: '',
		pastIllnesses: '',
		surgeries: '',
		hospitalizations: '',
		familyHistory: '',
		smokingStatus: '',
		smokingNotes: '',
		alcoholUse: '',
		alcoholNotes: '',
		drugUse: '',
		drugNotes: '',
		diet: '',
		dietNotes: '',
		occupation: '',
		lifestyle: '',
		allergies: '',
		obstetricHistory: '',
		menstrualHistroy: '',
		immunizations: '',
	});
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch<AppDispatch>();
	const diagnosis = useSelector(
		(state: RootState) => state.diagnosis.diagnosis
	);
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
		setHistory((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newHistoryRecord: HistoryRecord = {
			id: crypto.randomUUID(),
			patientId,
			recordedBy,
			chronicConditions: history.chronicConditions,
			pastIllnesses: history.pastIllnesses,
			surgeries: history.surgeries,
			hospitalizations: history.hospitalizations,
			familyHistory: history.familyHistory,
			smokingStatus: history.smokingStatus,
			smokingNotes: history.smokingNotes,
			alcoholUse: history.alcoholUse,
			alcoholNotes: history.alcoholNotes,
			drugUse: history.drugUse,
			drugNotes: history.drugNotes,
			occupation: history.occupation,
			lifestyle: history.lifestyle,
			allergies: history.allergies,
			obstetricHistory: history.obstetricHistory,
			menstrualHistroy: history.menstrualHistroy,
			immunizations: history.immunizations,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};
		setHistory({
			chronicConditions: '',
			pastIllnesses: '',
			surgeries: '',
			hospitalizations: '',
			familyHistory: '',
			smokingStatus: '',
			smokingNotes: '',
			alcoholUse: '',
			alcoholNotes: '',
			drugUse: '',
			drugNotes: '',
			diet: '',
			dietNotes: '',
			occupation: '',
			lifestyle: '',
			allergies: '',
			obstetricHistory: '',
			menstrualHistroy: '',
			immunizations: '',
		});
		onSubmit(newHistoryRecord);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="max-w-xl mx-auto space-y-4 p-6 bg-white rounded-2xl shadow-md">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<select
						name="chronicConditions"
						value={history.chronicConditions}
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
						name="pastIllnesses"
						type="text"
						placeholder="Past Illnesses"
						value={history.pastIllnesses}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="surgeries"
						type="text"
						placeholder="Surgeries"
						value={history.surgeries}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="hospitalizations"
						type="text"
						placeholder="Hospitalizations"
						value={history.hospitalizations}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="familyHistory"
						type="text"
						placeholder="Family History"
						value={history.familyHistory}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<select
						name="smokingStatus"
						value={history.smokingStatus}
						onChange={handleChange}>
						<option value="" disabled hidden>
							Select Smoking Status
						</option>
						<option value="NEVER">Never</option>
						<option value="CURRENT_DAILY">Current Daily</option>
						<option value="CURRENT_OCCASIONAL">
							Current Occasional
						</option>
						<option value="FORMER">Former</option>
						<option value="UNKNOWN">Unknown</option>
					</select>
					<Input
						name="smokingNotes"
						type="text"
						placeholder="Smoking Notes"
						value={history.smokingNotes}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<select
						name="alcoholUse"
						value={history.alcoholUse}
						onChange={handleChange}>
						<option value="" disabled hidden>
							Select Alcohol Use
						</option>
						<option value="NEVER">Never</option>
						<option value="MODERATE">Moderate</option>
						<option value="DAILY">Daily</option>
						<option value="HEAVY">Heavy</option>
						<option value="FORMER">Former</option>
						<option value="OCCASIONAL">Occasional</option>
					</select>
					<Input
						name="alcoholNotes"
						type="text"
						placeholder="Alcohol Notes"
						value={history.alcoholNotes}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<select
						name="drugUse"
						value={history.drugUse}
						onChange={handleChange}>
						<option value="" disabled hidden>
							Select Drug Use Status
						</option>
						<option value="NEVER">Never</option>
						<option value="REGULAR">Regular</option>
						<option value="FORMER">Former</option>
						<option value="OCCASIONAL">Occasionally</option>
					</select>
					<Input
						name="drugNotes"
						type="text"
						placeholder="Drug Notes"
						value={history.drugNotes}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<select
						name="diet"
						value={history.diet}
						onChange={handleChange}>
						<option value="" disabled hidden>
							Select Diet
						</option>
						<option value="OMNIVORE">Omnivore</option>
						<option value="VEGETARIAN">Vegetarian</option>
						<option value="VEGAN">Vegan</option>
						<option value="PESCATARIAN">Pescatarian</option>
						<option value="KETO">Keto</option>
						<option value="HIGH_PROTEIN">High Protein</option>
						<option value="OTHER">Other</option>
					</select>
					<Input
						name="dietNotes"
						type="text"
						placeholder="Diet Notes"
						value={history.dietNotes}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<select
						name="lifestyle"
						value={history.lifestyle}
						onChange={handleChange}>
						<option value="" disabled hidden>
							Select Lifestyle
						</option>
						<option value="SEDENTARY">Sedentary</option>
						<option value="LIGHTLY_ACTIVE">Lightly Active</option>
						<option value="MODERATELY_ACTIVE">
							Moderately Active
						</option>
						<option value="VERY_ACTIVE">Very Active</option>
						<option value="EXTRA_ACTIVE">Extra Active</option>
					</select>
					<Input
						name="occupation"
						type="text"
						placeholder="Occupation"
						value={history.occupation}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="allergies"
						type="text"
						placeholder="Allergies"
						value={history.allergies}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="obstetricHistory"
						type="text"
						placeholder="Obstetric History"
						value={history.obstetricHistory}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="menstrualHistroy"
						type="text"
						placeholder="Menstrual Histroy"
						value={history.menstrualHistroy}
						className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
						onChange={handleChange}
					/>
					<Input
						name="immunizations"
						type="text"
						placeholder="Immunizations"
						value={history.immunizations}
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

export default HistoryForm;
