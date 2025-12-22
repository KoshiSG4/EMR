import DataTable from '@/components/common/DataTable';
import { vitalsColumns } from './vitalsColumns';
import { useEffect, useRef, useState } from 'react';
import VitalsForm from './VitalsForm';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { VitalsRecord } from '@/types/vitalsRecords';
import {
	addNewVitalsRecord,
	addvitalsRecord,
	getSelectedPatientsVitalsRecords,
} from '@/store/slices/vitalsSlice';
import { removePanel } from '@/store/slices/patientSlice';
import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { cn } from '@/lib/utils';

const VitalsPage = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const userName =
		getUserInfoFromToken().givenName +
		' ' +
		getUserInfoFromToken().familyName;

	const selectedPatient = useSelector(
		(state: RootState) => state.patients.selectedPatient
	);
	const { loading, vitals } = useSelector((state: RootState) => state.vitals);
	const dispatch = useDispatch<AppDispatch>();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (selectedPatient && vitals.length == 0) {
			dispatch(
				getSelectedPatientsVitalsRecords({
					patientId: selectedPatient.userId,
					vitalsRecords: vitals,
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

	const handleSubmitVitals = (vitals: VitalsRecord) => {
		dispatch(addvitalsRecord({ vitalsRecord: vitals }));
		dispatch(addNewVitalsRecord({ vitalsRecord: vitals }));
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
						<div className="flex justify-between mb-4">
							<h1 className="text-lg  font-semibold text-gray-800">
								Vitals
							</h1>
							<X
								className="hover:cursor-pointer text-slate-600 size-4"
								onClick={() =>
									dispatch(
										removePanel({
											patientId: selectedPatient.userId,
											panelId: 'vitals',
										})
									)
								}></X>
						</div>

						<ResizablePanelGroup
							direction="horizontal"
							className="min-w-0 overflow-x-auto overflow-scroll">
							<ResizablePanel className="mr-4">
								<DataTable
									columns={vitalsColumns}
									data={vitals}
									loading={loading}
								/>
							</ResizablePanel>

							{isFormOpen && (
								<>
									<ResizableHandle withHandle />
									<ResizablePanel className="ml-4 border rounded-md bg-[#c5dedd] min-w-80">
										<div className="p-4 flex items-center justify-between border-b mx-4 ">
											<h3 className="text-lg font-semibold">
												Add Vitals
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
											<VitalsForm
												onClose={handleFormClose}
												onSubmit={handleSubmitVitals}
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

						{/* <div
							ref={ref}
							className={`absolute top-0 -right-8 h-auto w-2/5  bg-white border-y-2 border-gray-200 shadow-lg  transform transition-transform duration-300 z-50
        ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
							<div className="p-4 flex items-center justify-between border-b ">
								<h3 className="text-lg font-semibold">
									Vitals
								</h3>
								<button
									onClick={() => setIsFormOpen(false)}
									className="text-gray-500 hover:text-gray-700">
									✕
								</button>
							</div>
							{selectedPatient && (
								<VitalsForm
									onSubmit={handleSubmitVitals}
									patientId={selectedPatient.userId}
									recordedBy={userName}
								/>
							)}
						</div> */}

						<Button
							onClick={() => setIsFormOpen((prev) => !prev)}
							className={cn(
								'absolute top-14 right-10 bg-addButton-bg text-addButton-text hover:text-addButton-hover_txt hover:bg-addButton-hover_bg',
								isFormOpen ? 'hidden' : 'visible'
							)}>
							<Plus className="size-4" /> Add Vitals
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default VitalsPage;
