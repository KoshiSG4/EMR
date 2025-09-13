import DataTable from '@/components/common/DataTable';
import { useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { LabRecord } from '@/types/LabRecord ';
import { labColumns } from './labColumns';
import LabRequestsForm from './LabRequestsForm';

const dummyLabRecords: LabRecord[] = [
	{
		id: '1',
		date: '2025-09-07 09:45 AM',
		testName: 'Complete Blood Count (CBC)',
		testCode: 'CBC-101',
		department: 'Hematology',
		requestedBy: 'Dr. Adams',
		status: 'Completed',
		result: 'WBC: 8.5 ×10^9/L, Hb: 13.5 g/dL, Platelets: 220 ×10^9/L',
		normalRange: 'WBC: 4-11, Hb: 12-16, Platelets: 150-400',
		interpretation: 'Within normal limits',
		verifiedBy: 'Lab Tech A',
	},
	{
		id: '2',
		date: '2025-09-06 02:10 PM',
		testName: 'Liver Function Test (LFT)',
		testCode: 'LFT-202',
		department: 'Biochemistry',
		requestedBy: 'Dr. Lee',
		status: 'Pending',
		result: '-',
		normalRange: '-',
		interpretation: '-',
		verifiedBy: '-',
	},
];

const LabPage = () => {
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

	const handleSubmit = (labRecord: LabRecord) => {
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
						Laboratory Test Records - {selectedPatient?.fullName}
					</h1>
					<DataTable
						columns={labColumns}
						data={dummyLabRecords}
						loading={loading}
					/>
					<div
						className={`absolute top-0 -right-8 h-auto w-2/5  bg-white border-y-2 border-gray-200 shadow-lg  transform transition-transform duration-300 z-50
        ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
						<div className="p-4 flex items-center justify-between border-b ">
							<h3 className="text-lg font-semibold">
								Laboratory Test Request
							</h3>
							<button
								onClick={() => setIsFormOpen(false)}
								className="text-gray-500 hover:text-gray-700">
								✕
							</button>
						</div>
						{selectedPatient && (
							<LabRequestsForm
								onSubmit={handleSubmit}
								patientId={selectedPatient.userId}
								verifiedBy={userName}
							/>
						)}
					</div>

					<button
						onClick={() => setIsFormOpen((prev) => !prev)}
						className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
						➕ Request Laboratory Test
					</button>
				</div>
			</div>
		</div>
	);
};

export default LabPage;
