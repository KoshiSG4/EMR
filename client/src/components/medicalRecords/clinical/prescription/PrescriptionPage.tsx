import DataTable from '@/components/common/DataTable';
import { useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { Prescription } from '@/types/prescription';
import { prescriptionColumns } from './prescriptionColumns';
import PrescriptionForm from './PrescriptionForm';
import { Plus, X } from 'lucide-react';
import { removePanel } from '@/store/slices/patientSlice';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const dummyPrescriptionHistoryData: Prescription[] = [
	{
		id: '1',
		date: '2025-07-10',
		medication: 'Amoxicillin 500mg',
		dosage: '1 capsule',
		frequency: '3 times daily',
		duration: '7 days',
		instructions: 'Take after meals',
		prescribedBy: 'Dr. Smith',
		status: 'Completed',
	},
	{
		id: '2',
		date: '2025-07-20',
		medication: 'Metformin 500mg',
		dosage: '1 tablet',
		frequency: 'Twice daily',
		duration: '30 days',
		instructions: 'Take with breakfast and dinner',
		prescribedBy: 'Dr. Lee',
		status: 'Active',
	},
	{
		id: '3',
		date: '2025-08-05',
		medication: 'Atorvastatin 20mg',
		dosage: '1 tablet',
		frequency: 'Once daily',
		duration: '90 days',
		instructions: 'Take at bedtime',
		prescribedBy: 'Dr. Patel',
		status: 'Active',
	},
	{
		id: '4',
		date: '2025-08-25',
		medication: 'Ibuprofen 400mg',
		dosage: '1 tablet',
		frequency: 'Every 8 hours as needed',
		duration: '5 days',
		instructions: 'Take with food',
		prescribedBy: 'Dr. Smith',
		status: 'Discontinued',
	},
	{
		id: '5',
		date: '2025-09-01',
		medication: 'Metformin 500mg',
		dosage: '1 tablet',
		frequency: 'Twice daily',
		duration: '30 days',
		instructions: 'Take with meals',
		prescribedBy: 'Dr. Lee',
		status: 'Refilled',
	},
];

const PrescriptionPage = () => {
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

	const handleSubmit = (prescription: Prescription) => {
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
								Prescriptions
							</h1>
							<X
								className="hover:cursor-pointer text-slate-600 size-4"
								onClick={() =>
									dispatch(
										removePanel({
											patientId: selectedPatient.userId,
											panelId: 'clinical-prescriptions',
										})
									)
								}></X>
						</div>

						<ResizablePanelGroup
							direction="horizontal"
							className="min-w-0 overflow-x-auto overflow-scroll">
							<ResizablePanel className="mr-4">
								<DataTable
									columns={prescriptionColumns}
									data={dummyPrescriptionHistoryData}
									loading={loading}
								/>
							</ResizablePanel>

							{isFormOpen && (
								<>
									<ResizableHandle withHandle />
									<ResizablePanel className="ml-4 border rounded-md bg-[#c5dedd] min-w-80">
										<div className="p-4 flex items-center justify-between border-b mx-4 ">
											<h3 className="text-lg font-semibold">
												New Prescription
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
											<PrescriptionForm
												onClose={handleFormClose}
												onSubmit={handleSubmit}
												patientId={
													selectedPatient.userId
												}
												prescribedBy={userName}
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
							<Plus className="size-4" /> New Prescription
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default PrescriptionPage;
