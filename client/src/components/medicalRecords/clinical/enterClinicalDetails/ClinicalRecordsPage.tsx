import DataTable from '@/components/common/DataTable';
import { useEffect, useRef, useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { ClinicalDetailRecord } from '@/types/clinicalDetailRecord';
import { clinicalDetailsColumns } from './clinicalDetailsColumns';
import ClinicalDetailsForm from './ClinicalDetailsForm';
import {
	addClinicalRecord,
	addNewClinicalRecord,
	getSelectedPatientsClinicalRecords,
} from '@/store/slices/clinicalSlice';

const ClinicalRecordsPage = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const userName =
		getUserInfoFromToken().givenName +
		' ' +
		getUserInfoFromToken().familyName;

	const selectedPatient = useSelector(
		(state: RootState) => state.patients.selectedPatient
	);
	const { loading, clinicalDetails } = useSelector(
		(state: RootState) => state.clinical
	);

	const dispatch = useDispatch<AppDispatch>();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (selectedPatient && clinicalDetails.length == 0) {
			dispatch(
				getSelectedPatientsClinicalRecords({
					patientId: selectedPatient.userId,
					clinicalRecord: clinicalDetails,
				})
			);
		}
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsFormOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () =>
			document.removeEventListener('mousedown', handleClickOutside);
	}, [selectedPatient]);

	const handleSubmit = (clinicalRecord: ClinicalDetailRecord) => {
		dispatch(addClinicalRecord({ clinicalRecord: clinicalRecord }));
		dispatch(addNewClinicalRecord({ clinicalRecord: clinicalRecord }));
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
						data={clinicalDetails}
						loading={loading}
					/>
					<div
						ref={ref}
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
						➕ Enter New Record
					</button>
				</div>
			</div>
		</div>
	);
};

export default ClinicalRecordsPage;
