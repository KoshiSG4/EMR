import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientMedicationForm from './PatientMedicationForm';
import { useDispatch, useSelector } from 'react-redux';
import { patientMedicationTableColumns } from './patientMedicationTableColumns.tsx';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { AppDispatch, RootState } from '@/store/store';
import { PatientMedication } from '@/types/patientMedicationTypes';
import {
	addMedicationsToPatient,
	addMedsToPatientDatabase,
	getSelectedPatientsMeds,
} from '@/store/slices/patientSlice';
import DataTable from '@/components/common/DataTable';

interface PatientMedicationsProps {
	patientId: string;
}

const PatientMedications = ({ patientId }: PatientMedicationsProps) => {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.user.loggedInUser);
	const { selectedPatient, loading, patientMedication } = useSelector(
		(state: RootState) => state.patients
	);
	const dispatch = useDispatch<AppDispatch>();

	const [isFormOpen, setIsFormOpen] = useState(false);

	useEffect(() => {
		if (user?.role === 'patient') {
			navigate(`/patient/${user.id}/medications/current`);
			return;
		}

		if (!selectedPatient) {
			return;
		}

		if (!patientMedication || patientMedication.length <= 0) {
			dispatch(
				getSelectedPatientsMeds({ patientId: selectedPatient.id })
			);
		}
	}, [selectedPatient]);

	const handleSubmitMedicationForm = (medication: PatientMedication) => {
		if (selectedPatient?.userId) {
			dispatch(
				addMedicationsToPatient({
					patientId: selectedPatient.userId,
					medication,
				})
			);

			dispatch(
				addMedsToPatientDatabase({
					patientId: selectedPatient.userId,
					medication,
				})
			);
		}

		setIsFormOpen(false);
	};

	// const patientMedication = (selectedPatientMeds: PatientMedication[]) => {
	// 	return selectedPatientMeds.map((m) => ({
	// 		...m,
	// 		startDate: m.startDate.split('T')[0],
	// 		endDate: m.endDate?.split('T')[0],
	// 		createdAt: m.endDate?.split('T')[0] ?? '',
	// 		updatedAt: m.endDate?.split('T')[0] ?? '',
	// 	}));
	// };

	return (
		<div className="p-3 space-y-3 relative">
			{/* Content */}
			{selectedPatient && (
				<div className="flex  ">
					<div className={`flex-1 transition-all duration-300`}>
						<div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
							<h1 className="text-lg mb-2 font-semibold text-gray-800">
								{' '}
								Medication
							</h1>

							{/* Medication Section */}
							<div>
								<DataTable
									columns={patientMedicationTableColumns}
									data={patientMedication}
									loading={loading}
									filters={[
										{
											columnId: 'name',
											placeholder:
												'Filter by medication name...',
											className: 'max-w-sm mr-4',
										},
										{
											columnId: 'prescribedByName',
											placeholder:
												'Filter by prescribing doctor...',
											className: 'max-w-sm',
										},
										{
											columnId: 'status',
											type: 'select',
											options: [
												'Active',
												'Discontinued',
												'New',
											],
											className: 'max-w-sm',
										},
									]}
								/>
							</div>
						</div>
					</div>

					<div
						className={`absolute top-0 -right-8 h-full w-96  bg-white border-l border-gray-200 shadow-lg transform transition-transform duration-300 z-50
        ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
						<div className="p-4 flex items-center justify-between border-b">
							<h3 className="text-lg font-semibold">
								Add New Medication
							</h3>
							<button
								onClick={() => setIsFormOpen(false)}
								className="text-gray-500 hover:text-gray-700">
								✕
							</button>
						</div>
						<div className="p-4 overflow-y-auto">
							{user && (
								<PatientMedicationForm
									onSubmit={handleSubmitMedicationForm}
									patientId={selectedPatient.userId}
									prescribedByName={user?.name}
								/>
							)}
						</div>
					</div>

					<button
						onClick={() => setIsFormOpen((prev) => !prev)}
						className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
						➕ Add Medication
					</button>
				</div>
			)}
		</div>
	);
};

export default PatientMedications;
