import DataTable from '@/components/common/DataTable';
import { useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { ClinicalDetailRecord } from '@/types/ClinicalDetailRecord';
import { clinicalDetailsColumns } from './clinicalDetailsColumns';
import ClinicalDetailsForm from './ClinicalDetailsForm';

const dummyClinicalDetails: ClinicalDetailRecord[] = [
	{
		id: '1',
		date: '2025-09-09',
		chiefComplaint: 'Persistent cough for 2 weeks',
		history: 'Started with mild fever, now worsening cough with sputum',
		pastHistory: 'Asthma since childhood',
		medications: 'Salbutamol inhaler',
		allergies: 'Penicillin',
		examination: 'Bilateral wheeze, temp 37.8°C',
		assessment: 'Acute bronchitis',
		plan: 'Start antibiotics, continue inhaler, review in 1 week',
		recordedBy: 'Dr. Adams',
	},
];

const ClinicalRecordsPage = () => {
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

	const handleSubmit = (clinicalRecord: ClinicalDetailRecord) => {
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
						Clinical Details - {selectedPatient?.fullName}
					</h1>
					<DataTable
						columns={clinicalDetailsColumns}
						data={dummyClinicalDetails}
						loading={loading}
					/>
					<div
						className={`absolute top-0 -right-8 h-auto w-2/5  bg-white border-y-2 border-gray-200 shadow-lg  transform transition-transform duration-300 z-50
        ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
						<div className="p-4 flex items-center justify-between border-b ">
							<h3 className="text-lg font-semibold">
								Clinical Details
							</h3>
							<button
								onClick={() => setIsFormOpen(false)}
								className="text-gray-500 hover:text-gray-700">
								✕
							</button>
						</div>
						{selectedPatient && (
							<ClinicalDetailsForm
								onSubmit={handleSubmit}
								patientId={selectedPatient.userId}
								recordedBy={userName}
							/>
						)}
					</div>

					<button
						onClick={() => setIsFormOpen((prev) => !prev)}
						className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
						➕ Enter Clinical Record
					</button>
				</div>
			</div>
		</div>
	);
};

export default ClinicalRecordsPage;
