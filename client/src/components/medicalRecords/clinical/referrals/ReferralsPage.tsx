import DataTable from '@/components/common/DataTable';
import { useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { ReferralRecord } from '@/types/referralRecord ';
import { referralsColumns } from './referralsColumns';
import ReferralsForm from './ReferralsForm';

const dummyReferrals: ReferralRecord[] = [
	{
		id: '1',
		date: '2025-09-05 02:00 PM',
		referralType: 'Internal',
		referredTo: 'Dr. Brown',
		department: 'Cardiology',
		reason: 'Irregular heartbeat',
		notes: 'Requested ECG and further evaluation',
		status: 'Pending',
		referredBy: 'Dr. Adams',
	},
	{
		id: '2',
		date: '2025-08-20 11:15 AM',
		referralType: 'External',
		referredTo: 'City Hospital',
		department: 'Oncology',
		reason: 'Suspected malignancy',
		notes: 'Patient requires biopsy and advanced imaging',
		status: 'Completed',
		referredBy: 'Dr. Lee',
	},
];

const ReferralsPage = () => {
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

	const handleSubmit = (referral: ReferralRecord) => {
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
						Referrals - {selectedPatient?.fullName}
					</h1>
					<DataTable
						columns={referralsColumns}
						data={dummyReferrals}
						loading={loading}
					/>
					<div
						className={`absolute top-0 -right-8 h-auto w-2/5  bg-white border-y-2 border-gray-200 shadow-lg  transform transition-transform duration-300 z-50
        ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
						<div className="p-4 flex items-center justify-between border-b ">
							<h3 className="text-lg font-semibold">
								New Referral
							</h3>
							<button
								onClick={() => setIsFormOpen(false)}
								className="text-gray-500 hover:text-gray-700">
								✕
							</button>
						</div>
						{selectedPatient && (
							<ReferralsForm
								onSubmit={handleSubmit}
								patientId={selectedPatient.userId}
								referredBy={userName}
							/>
						)}
					</div>

					<button
						onClick={() => setIsFormOpen((prev) => !prev)}
						className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
						➕ New Referral
					</button>
				</div>
			</div>
		</div>
	);
};

export default ReferralsPage;
