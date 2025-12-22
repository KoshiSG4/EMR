import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientMedicationForm from './PatientMedicationForm';
import { useDispatch, useSelector } from 'react-redux';
import { patientMedicationTableColumns } from './patientMedicationTableColumns.tsx';
import { AppDispatch, RootState } from '@/store/store';
import { PatientMedication } from '@/types/patientMedicationTypes';
import {
	addMedicationsToPatient,
	addMedsToPatientDatabase,
	getSelectedPatientsMeds,
	removePanel,
} from '@/store/slices/patientSlice';
import DataTable from '@/components/common/DataTable';
import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';

const PatientMedications = () => {
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
				getSelectedPatientsMeds({ patientId: selectedPatient.userId })
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

	const handleFormClose = () => {
		setIsFormOpen(false);
	};

	return (
		<div className="p-3 space-y-3 relative">
			{/* Content */}
			{selectedPatient && (
				<div className="flex  ">
					<div className={`flex-1 transition-all duration-300`}>
						<div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
							<div className="flex justify-between">
								<h1 className="text-lg  font-semibold text-gray-800">
									Medication
								</h1>
								<X
									className="hover:cursor-pointer text-slate-600 size-4"
									onClick={() =>
										dispatch(
											removePanel({
												patientId:
													selectedPatient.userId,
												panelId: 'clinical-medications',
											})
										)
									}></X>
							</div>

							{/* Medication Section */}
							<div>
								<ResizablePanelGroup
									direction="horizontal"
									className="min-w-0 overflow-x-auto overflow-scroll">
									<ResizablePanel className="mr-4">
										<DataTable
											columns={
												patientMedicationTableColumns
											}
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
													columnId:
														'prescribedByName',
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
									</ResizablePanel>
									{isFormOpen && (
										<>
											<ResizableHandle withHandle />
											<ResizablePanel className="ml-4 border rounded-md bg-[#c5dedd] min-w-80">
												<div className="p-4 flex items-center justify-between border-b mx-4 ">
													<h3 className="text-lg font-semibold">
														Add Medications
													</h3>
													<button
														onClick={() =>
															setIsFormOpen(false)
														}
														className="text-black hover:text-gray-700">
														✕
													</button>
												</div>
												{selectedPatient && user && (
													<PatientMedicationForm
														onSubmit={
															handleSubmitMedicationForm
														}
														patientId={
															selectedPatient.userId
														}
														prescribedByName={
															user.name
														}
														onClose={
															handleFormClose
														}
													/>
												)}
											</ResizablePanel>
										</>
									)}
								</ResizablePanelGroup>
							</div>
						</div>
					</div>

					<Button
						onClick={() => setIsFormOpen((prev) => !prev)}
						className={cn(
							'absolute top-14 right-10 bg-addButton-bg text-addButton-text hover:text-addButton-hover_txt hover:bg-addButton-hover_bg',
							isFormOpen ? 'hidden' : 'visible'
						)}>
						<Plus className="size-4" /> Add Medication
					</Button>
				</div>
			)}
		</div>
	);
};

export default PatientMedications;
