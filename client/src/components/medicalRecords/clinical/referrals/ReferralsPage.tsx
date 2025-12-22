import DataTable from '@/components/common/DataTable';
import { useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { ReferralRecord } from '@/types/referralRecord ';
import { referralsColumns } from './referralsColumns';
import ReferralsForm from './ReferralsForm';
import { Plus, X } from 'lucide-react';
import { removePanel } from '@/store/slices/patientSlice';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const dummyReferrals: ReferralRecord[] = [
	{
		id: '1',
		patientId: 'asd',
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
		patientId: 'asd',
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
								Referrals
							</h1>
							<X
								className="hover:cursor-pointer text-slate-600 size-4"
								onClick={() =>
									dispatch(
										removePanel({
											patientId: selectedPatient.userId,
											panelId: 'clinical-referrals',
										})
									)
								}></X>
						</div>
						<ResizablePanelGroup
							direction="horizontal"
							className="min-w-0 overflow-x-auto overflow-scroll">
							<ResizablePanel className="mr-4">
								<DataTable
									columns={referralsColumns}
									data={dummyReferrals}
									loading={loading}
								/>
							</ResizablePanel>
							{isFormOpen && (
								<>
									<ResizableHandle withHandle />
									<ResizablePanel className="ml-4 border rounded-md bg-[#c5dedd] min-w-80">
										<div className="p-4 flex items-center justify-between border-b mx-4 ">
											<h3 className="text-lg font-semibold">
												Add Referral
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
											<ReferralsForm
												onClose={handleFormClose}
												onSubmit={handleSubmit}
												patientId={
													selectedPatient.userId
												}
												referredBy={userName}
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
							<Plus className="size-4" /> Add Referral
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ReferralsPage;
