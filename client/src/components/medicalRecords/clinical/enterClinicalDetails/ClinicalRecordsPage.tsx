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
import { Plus, X } from 'lucide-react';
import { removePanel } from '@/store/slices/patientSlice';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ClinicalRecordsPage = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const user = useSelector((state: RootState) => state.user.loggedInUser);

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
								Clinical Details
							</h1>
							<X
								className="hover:cursor-pointer text-slate-600 size-4"
								onClick={() =>
									dispatch(
										removePanel({
											patientId: selectedPatient.userId,
											panelId: 'clinical-enter',
										})
									)
								}></X>
						</div>
						<ResizablePanelGroup
							direction="horizontal"
							className="min-w-0 overflow-x-auto overflow-scroll">
							<ResizablePanel className="mr-4">
								<DataTable
									columns={clinicalDetailsColumns}
									data={clinicalDetails}
									loading={loading}
								/>
							</ResizablePanel>
							{isFormOpen && (
								<>
									<ResizableHandle withHandle />
									<ResizablePanel className="ml-4 border rounded-md bg-[#c5dedd] min-w-80">
										<div className="p-4 flex items-center justify-between border-b mx-4 ">
											<h3 className="text-lg font-semibold">
												Add Clinical Record
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
											<ClinicalDetailsForm
												onClose={handleFormClose}
												onSubmit={handleSubmit}
												patientId={
													selectedPatient.userId
												}
												recordedBy={user.name}
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
							<Plus className="size-4" /> Enter Clinical Record
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ClinicalRecordsPage;
