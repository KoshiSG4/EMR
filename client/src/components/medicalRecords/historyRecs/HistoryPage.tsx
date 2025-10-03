import DataTable from '@/components/common/DataTable';
import { useEffect, useRef, useState } from 'react';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { HistoryRecord } from '@/types/historyType';
import { historyColumns } from './historyColumns';
import { addHistory, getAllHistories } from '@/store/slices/historySlice';
import HistoryForm from './HistoryForm';

const HistoryPage = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
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

	return (
		<div className="p-3 pt-1 space-y-6 relative">
			<div className={`flex-1 transition-all duration-300`}>
				<div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
					<h1 className="text-lg mb-3 font-semibold text-gray-800">
						Medical History - {selectedPatient?.fullName}
					</h1>
					<DataTable
						columns={historyColumns}
						data={formattedHistories}
						loading={loading}
					/>
					<div
						ref={ref}
						className={`absolute top-0 -right-8 h-auto w-2/5  bg-white border-y-2 border-gray-200 shadow-lg  transform transition-transform duration-300 z-50
        ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
						<div className="p-4 flex items-center justify-between border-b ">
							<h3 className="text-lg font-semibold">History</h3>
							<button
								onClick={() => setIsFormOpen(false)}
								className="text-gray-500 hover:text-gray-700">
								✕
							</button>
						</div>
						{selectedPatient && (
							<HistoryForm
								onSubmit={handleSubmit}
								patientId={selectedPatient.userId}
								recordedBy={userName}
							/>
						)}
					</div>

					<button
						onClick={() => setIsFormOpen((prev) => !prev)}
						className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
						➕ Add History
					</button>
				</div>
			</div>
		</div>
	);
};

export default HistoryPage;
