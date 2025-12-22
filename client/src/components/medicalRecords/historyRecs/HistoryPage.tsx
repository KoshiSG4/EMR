import DataTable from '@/components/common/DataTable';
import { useEffect, useRef, useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { HistoryRecord } from '@/types/historyType';
import { historyColumns } from './historyColumns';
import {
	addHistory,
	getAllHistories,
	setSelectedHistoryRec,
} from '@/store/slices/historySlice';
import HistoryForm from './HistoryForm';
import HistoryDetailsDialog from './HistoryDialog';
import { Plus, X } from 'lucide-react';
import { removePanel } from '@/store/slices/patientSlice';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HistoryPage = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [selectedHistoryRecord, setSelectedHistoryRecord] =
		useState<HistoryRecord | null>();
	const userName =
		getUserInfoFromToken().givenName +
		' ' +
		getUserInfoFromToken().familyName;

	const selectedPatient = useSelector(
		(state: RootState) => state.patients.selectedPatient
	);
	const { loading, histories } = useSelector(
		(state: RootState) => state.history
	);
	const dispatch = useDispatch<AppDispatch>();
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (selectedPatient && histories.length == 0) {
			dispatch(
				getAllHistories({
					patientId: selectedPatient.userId,
					histories: histories,
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

	const formattedHistories = histories.map((h) => ({
		...h,
		createdDate: h.createdAt.split('T')[0],
		updatedDate: h.updatedAt.split('T')[0],
	}));

	const handleSubmit = (historyRecords: HistoryRecord) => {
		dispatch(addHistory({ history: historyRecords }));
		setIsFormOpen(false);
	};

	const handleFormClose = () => {
		setIsFormOpen(false);
	};
	const handleSelectHistoryRecord: (rowData: HistoryRecord) => void = (
		rowData
	) => {
		const historyRecord = histories.find((rec) => rec.id === rowData.id);
		setSelectedHistoryRecord(historyRecord);
	};

	return (
		<div className="p-3 pt-1 space-y-6 relative">
			{selectedPatient && (
				<div className={`flex-1 transition-all duration-300`}>
					<div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
						<div className="flex justify-between">
							<h1 className="text-lg  font-semibold text-gray-800">
								Medical History
							</h1>
							<X
								className="hover:cursor-pointer text-slate-600 size-4"
								onClick={() =>
									dispatch(
										removePanel({
											patientId: selectedPatient.userId,
											panelId: 'history',
										})
									)
								}></X>
						</div>
						<ResizablePanelGroup
							direction="horizontal"
							className="min-w-0 overflow-x-auto overflow-scroll">
							<ResizablePanel className="mr-4">
								<DataTable
									columns={historyColumns}
									data={formattedHistories}
									loading={loading}
									onRowSelect={handleSelectHistoryRecord}
								/>
							</ResizablePanel>

							{isFormOpen && (
								<>
									<ResizableHandle withHandle />
									<ResizablePanel className="ml-4 border rounded-md bg-[#c5dedd] min-w-80">
										<div className="p-4 flex items-center justify-between border-b mx-4 ">
											<h3 className="text-lg font-semibold">
												Add History
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
											<HistoryForm
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

							{selectedHistoryRecord && (
								<HistoryDetailsDialog
									open={true}
									onClose={() =>
										setSelectedHistoryRecord(null)
									}
									history={selectedHistoryRecord}
								/>
							)}
						</ResizablePanelGroup>

						<Button
							onClick={() => setIsFormOpen((prev) => !prev)}
							className={cn(
								'absolute top-14 right-10 bg-addButton-bg text-addButton-text hover:text-addButton-hover_txt hover:bg-addButton-hover_bg',
								isFormOpen ? 'hidden' : 'visible'
							)}>
							<Plus className="size-4" /> Add History
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default HistoryPage;
