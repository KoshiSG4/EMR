import DataTable from '@/components/common/DataTable';
import { useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { Prescription } from '@/types/prescription';
import { prescriptionColumns } from './prescriptionColumns';
import PrescriptionForm from './PrescriptionForm';

export const dummyPrescriptionHistoryData: Prescription[] = [
	{
		id: '1',
		date: '2025-07-10',
		medication: 'Amoxicillin 500mg',
		dosage: '1 capsule',
		frequency: '3 times daily',
		duration: '7 days',
		instructions: 'Take after meals',
		prescribedBy: 'Dr. Smith',
		status: 'Completed',
	},
	{
		id: '2',
		date: '2025-07-20',
		medication: 'Metformin 500mg',
		dosage: '1 tablet',
		frequency: 'Twice daily',
		duration: '30 days',
		instructions: 'Take with breakfast and dinner',
		prescribedBy: 'Dr. Lee',
		status: 'Active',
	},
	{
		id: '3',
		date: '2025-08-05',
		medication: 'Atorvastatin 20mg',
		dosage: '1 tablet',
		frequency: 'Once daily',
		duration: '90 days',
		instructions: 'Take at bedtime',
		prescribedBy: 'Dr. Patel',
		status: 'Active',
	},
	{
		id: '4',
		date: '2025-08-25',
		medication: 'Ibuprofen 400mg',
		dosage: '1 tablet',
		frequency: 'Every 8 hours as needed',
		duration: '5 days',
		instructions: 'Take with food',
		prescribedBy: 'Dr. Smith',
		status: 'Discontinued',
	},
	{
		id: '5',
		date: '2025-09-01',
		medication: 'Metformin 500mg',
		dosage: '1 tablet',
		frequency: 'Twice daily',
		duration: '30 days',
		instructions: 'Take with meals',
		prescribedBy: 'Dr. Lee',
		status: 'Refilled',
	},
];

const PrescriptionPage = () => {
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

	const handleSubmit = (prescription: Prescription) => {
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
						Prescriptions - {selectedPatient?.fullName}
					</h1>
					<DataTable
						columns={prescriptionColumns}
						data={dummyPrescriptionHistoryData}
						loading={loading}
					/>
					<div
						className={`absolute top-0 -right-8 h-auto w-2/5  bg-white border-y-2 border-gray-200 shadow-lg  transform transition-transform duration-300 z-50
        ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
						<div className="p-4 flex items-center justify-between border-b ">
							<h3 className="text-lg font-semibold">
								New Prescription
							</h3>
							<button
								onClick={() => setIsFormOpen(false)}
								className="text-gray-500 hover:text-gray-700">
								✕
							</button>
						</div>
						{selectedPatient && (
							<PrescriptionForm
								onSubmit={handleSubmit}
								patientId={selectedPatient.userId}
								prescribedBy={userName}
							/>
						)}
					</div>

					<button
						onClick={() => setIsFormOpen((prev) => !prev)}
						className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
						➕ New Prescription
					</button>
				</div>
			</div>
		</div>
	);
};

export default PrescriptionPage;
