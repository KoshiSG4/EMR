import DataTable from '@/components/common/DataTable';
import { vitalsColumns } from './vitalsColumns';
import { useState } from 'react';
import VitalsForm from './VitalsForm';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { VitalsRecord } from '@/types/vitalsRecords';

const dummyVitals: VitalsRecord[] = [
	{
		id: 1,
		height: '165 cm',
		weight: '60 kg',
		bloodPressure: '120/80',
		heartRate: '78 bpm',
		respiratoryRate: '16/min',
		temperature: '36.8 °C',
		spo2: '98%',
		painScore: '2',
		recordedBy: 'Nurse A',
		createdDate: '2025.09.01',
		updatedDate: '2025.09.03',
		patientId: '1',
	},
	{
		id: 2,
		height: '165 cm',
		weight: '59.5 kg',
		bloodPressure: '118/76',
		heartRate: '80 bpm',
		respiratoryRate: '18/min',
		temperature: '37.1 °C',
		spo2: '97%',
		painScore: '3',
		recordedBy: 'Dr. Smith',
		createdDate: '2025.09.02',
		updatedDate: '2025.09.05',
		patientId: '1',
	},
];

const VitalsPage = () => {
	const [loading, setIsLoading] = useState(false);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const userName =
		getUserInfoFromToken().givenName +
		' ' +
		getUserInfoFromToken().familyName;

	const selectedPatient = useSelector(
		(state: RootState) => state.patients.selectedPatient
	);
	const dispatch = useDispatch<AppDispatch>();

	const handleSubmitVitals = (vitals: VitalsRecord) => {
		// if (selectedPatient?.userId) {
		// 	dispatch(
		// 		addMedicationsToPatient({
		// 			patientId: selectedPatient.userId,
		// 			medication,
		// 		})
		// 	);

		// 	dispatch(
		// 		addMedsToPatientDatabase({
		// 			patientId: selectedPatient.userId,
		// 			medication,
		// 		})
		// 	);
		// }

		setIsFormOpen(false);
	};

	return (
		<div className="p-3 pt-1 space-y-6 relative">
			<div className={`flex-1 transition-all duration-300`}>
				<div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
					<h1 className="text-lg mb-3 font-semibold text-gray-800">
						Vitals - {selectedPatient?.fullName}
					</h1>
					<DataTable
						columns={vitalsColumns}
						data={dummyVitals}
						loading={loading}
					/>
					<div
						className={`absolute top-0 -right-8 h-auto w-2/5  bg-white border-y-2 border-gray-200 shadow-lg  transform transition-transform duration-300 z-50
        ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
						<div className="p-4 flex items-center justify-between border-b ">
							<h3 className="text-lg font-semibold">Vitals</h3>
							<button
								onClick={() => setIsFormOpen(false)}
								className="text-gray-500 hover:text-gray-700">
								✕
							</button>
						</div>
						{selectedPatient && (
							<VitalsForm
								onSubmit={handleSubmitVitals}
								patientId={selectedPatient.userId}
								recordedBy={userName}
							/>
						)}
					</div>

					<button
						onClick={() => setIsFormOpen((prev) => !prev)}
						className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
						➕ Add Vitals
					</button>
				</div>
			</div>
		</div>
	);
};

export default VitalsPage;
