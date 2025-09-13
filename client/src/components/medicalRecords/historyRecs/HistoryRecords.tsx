import DataTable from '@/components/common/DataTable';
import { useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { HistoryRecord } from '@/types/HistoryRecords';
import { historyColumns } from './historyColumns';

export const dummyHistory: HistoryRecord[] = [
	{
		id: 1,
		date: '2025-09-01',
		type: 'Medical',
		condition: 'Asthma',
		status: 'Active',
		notes: 'Uses inhaler occasionally, no recent exacerbations.',
		recordedBy: 'Dr. Smith',
	},
	{
		id: 2,
		date: '2025-07-12',
		type: 'Surgical',
		condition: 'Appendectomy',
		status: 'Resolved',
		notes: 'Surgery in 2018, no complications.',
		recordedBy: 'Nurse A',
	},
	{
		id: 3,
		date: '2025-05-28',
		type: 'Allergy',
		condition: 'Penicillin',
		status: 'Chronic',
		notes: 'Severe rash reaction, avoid all penicillin antibiotics.',
		recordedBy: 'Dr. Lee',
	},
	{
		id: 4,
		date: '2025-04-10',
		type: 'Family',
		condition: 'Hypertension (Father)',
		status: 'N/A',
		notes: 'Father diagnosed at age 55.',
		recordedBy: 'Dr. Brown',
	},
	{
		id: 5,
		date: '2025-03-15',
		type: 'Social',
		condition: 'Smoking',
		status: 'Active',
		notes: 'Smokes 5–6 cigarettes daily.',
		recordedBy: 'Nurse B',
	},
];

const HistoryRecords = () => {
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

	const handleSubmit = (historyRecords: HistoryRecord) => {
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
						Medical History - {selectedPatient?.fullName}
					</h1>
					<DataTable
						columns={historyColumns}
						data={dummyHistory}
						loading={loading}
					/>
				</div>
			</div>
		</div>
	);
};

export default HistoryRecords;
