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
import { Plus, X } from 'lucide-react';
import { removePanel } from '@/store/slices/patientSlice';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

	const handleFormClose = () => {
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
						<ResizablePanelGroup
							direction="horizontal"
							className="min-w-0 overflow-x-auto overflow-scroll">
							<ResizablePanel className="mr-4">
								{formattedPatientMedRecords && (
									<DataTable
										columns={diagnosesColumns}
										data={formattedPatientMedRecords}
										loading={loading}
									/>
								)}
							</ResizablePanel>

							{isFormOpen && (
								<>
									<ResizableHandle withHandle />
									<ResizablePanel className="ml-4 border rounded-md bg-[#c5dedd] min-w-80">
										<div className="p-4 flex items-center justify-between border-b mx-4 ">
											<h3 className="text-lg font-semibold">
												Add Diagnose
											</h3>
											<button
												onClick={() =>
													setIsFormOpen(false)
												}
												className="text-black hover:text-gray-700">
												✕
											</button>
										</div>
										{selectedPatient && (
											<DiagnoseForm
												onClose={handleFormClose}
												onSubmit={handleSubmit}
												patientId={
													selectedPatient.userId
												}
												recordedBy={userName}
											/>
										)}
									</ResizablePanel>
								</>
							)}
						</ResizablePanelGroup>

						<Button
							onClick={() => setIsFormOpen((prev) => !prev)}
							className={cn(
								'absolute top-14 right-10 bg-addButton-bg text-addButton-text hover:text-addButton-hover_txt hover:bg-addButton-hover_bg',
								isFormOpen ? 'hidden' : 'visible'
							)}>
							<Plus className="size-4" /> Add Diagnose
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default DiagnosePage;
