import DataTable from '@/components/common/DataTable';
import { useEffect, useRef, useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { DiagnoseRecord } from '@/types/diagnoseRecords';
import { diagnosesColumns } from './diagnosesColumns';
import DiagnoseForm from './DiagnoseForm';
import {} from '@/store/slices/diagnoseSlice';
import { FormattedMedicalRecord, MedicalRecord } from '@/types/medicalRecords';
import {
	addMedicalRecord,
	getSelectedPatientsMedicalRecords,
	setMedicalRecords,
} from '@/store/slices/medicalRecordSlice';
import { X } from 'lucide-react';
import { removePanel } from '@/store/slices/patientSlice';

const DiagnosePage = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const userName =
		getUserInfoFromToken().givenName +
		' ' +
		getUserInfoFromToken().familyName;

	const selectedPatient = useSelector(
		(state: RootState) => state.patients.selectedPatient
	);
	const { medicalRecords, loading } = useSelector(
		(state: RootState) => state.medicalRecords
	);

	const dispatch = useDispatch<AppDispatch>();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (selectedPatient && medicalRecords.length == 0) {
			dispatch(
				getSelectedPatientsMedicalRecords({
					patientId: selectedPatient.userId,
					medicalRecords: medicalRecords,
				})
			);
			dispatch(setMedicalRecords(medicalRecords));
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

	const formattedPatientMedRecords: FormattedMedicalRecord[] =
		medicalRecords.map((d) => ({
			...d,
			diagnoseName: d.diagnosis?.name ?? '-',
			doctorName: d.doctor?.user.name ?? '-',
			createdAt: d.createdAt.split('T')[0],
		})) ?? [];

	const handleSubmit = (record: MedicalRecord) => {
		if (selectedPatient)
			dispatch(
				addMedicalRecord({
					patientId: selectedPatient.userId,
					medicalRecord: record,
				})
			);
		setIsFormOpen(false);
	};

	return (
		<div className="p-3 pt-1 space-y-6 relative">
			{selectedPatient && (
				<div className={`flex-1 transition-all duration-300`}>
					<div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
						<div className="flex justify-between">
							<h1 className="text-lg  font-semibold text-gray-800">
								Diagnosis
							</h1>
							<X
								className="hover:cursor-pointer text-slate-600 size-4"
								onClick={() =>
									dispatch(
										removePanel({
											patientId: selectedPatient.userId,
											panelId: 'diagnoses',
										})
									)
								}></X>
						</div>
						{formattedPatientMedRecords && (
							<DataTable
								columns={diagnosesColumns}
								data={formattedPatientMedRecords}
								loading={loading}
							/>
						)}

						<div
							ref={ref}
							className={`absolute top-0 -right-8 h-auto w-2/5  bg-white border-y-2 border-gray-200 shadow-lg  transform transition-transform duration-300 z-50
        ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
							<div className="p-4 flex items-center justify-between border-b ">
								<h3 className="text-lg font-semibold">
									Diagnose
								</h3>
								<button
									onClick={() => setIsFormOpen(false)}
									className="text-gray-500 hover:text-gray-700">
									✕
								</button>
							</div>
							{selectedPatient && (
								<DiagnoseForm
									onSubmit={handleSubmit}
									patientId={selectedPatient.userId}
									recordedBy={userName}
								/>
							)}
						</div>

						<button
							onClick={() => setIsFormOpen((prev) => !prev)}
							className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
							➕ Add Diagnose
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default DiagnosePage;
