import DataTable from '@/components/common/DataTable';
import { useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { PastVisitRecord } from '@/types/pastVisitRecord';
import { pastVisitsColumns } from './pastVisitsColumns';
import { X } from 'lucide-react';
import { removePanel } from '@/store/slices/patientSlice';
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

const dummyPastVisits: PastVisitRecord[] = [
	{
		id: '1',
		date: '2025-09-01 10:30 AM',
		visitType: 'Outpatient',
		reason: 'Routine checkup',
		doctor: 'Dr. Green',
		department: 'General Medicine',
		diagnosis: 'Normal examination',
		treatment: 'No treatment required',
		outcome: 'Discharged',
	},
	{
		id: '2',
		date: '2025-08-15 08:00 PM',
		visitType: 'Emergency',
		reason: 'Severe abdominal pain',
		doctor: 'Dr. Lee',
		department: 'Emergency',
		diagnosis: 'Acute appendicitis',
		treatment: 'Appendectomy performed',
		outcome: 'Admitted for observation',
	},
];

const PastVisitsPage = () => {
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

	const handleSubmit = (pastVisit: PastVisitRecord) => {
		setIsFormOpen(false);
	};

	return (
		<div className="p-3 pt-1 space-y-6 relative">
			{selectedPatient && (
				<div className={`flex-1 transition-all duration-300`}>
					<div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
						<div className="flex justify-between">
							<h1 className="text-lg  font-semibold text-gray-800">
								Past Visits
							</h1>
							<X
								className="hover:cursor-pointer text-slate-600 size-4"
								onClick={() =>
									dispatch(
										removePanel({
											patientId: selectedPatient.userId,
											panelId: 'clinical-visits',
										})
									)
								}></X>
						</div>
						<ResizablePanelGroup
							direction="horizontal"
							className="min-w-0 overflow-x-auto overflow-scroll">
							<ResizablePanel className="mr-4">
								<DataTable
									columns={pastVisitsColumns}
									data={dummyPastVisits}
									loading={loading}
								/>
							</ResizablePanel>
						</ResizablePanelGroup>
					</div>
				</div>
			)}
		</div>
	);
};

export default PastVisitsPage;
