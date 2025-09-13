import MedicationInventoryTable, {
	columns,
} from '@/components/medications/MedicationsInventoryTable';
import MedsSummaryCards from '../components/medications/MedsSummaryCards';
import React, { useEffect, useState } from 'react';
import { getUserInfoFromToken } from '@/utils/jwtUtils';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import {
	addMedications,
	getMedicationInventory,
} from '@/store/slices/medicationSlice';
import AddNewMedicationForm from '@/components/medications/AddNewMedication';
import { MedicationInventory } from '@/types/medicationInventoryType';

const MedicationsPage = () => {
	const userRole = getUserInfoFromToken().role?.toLowerCase();
	const userName =
		getUserInfoFromToken().givenName +
		' ' +
		getUserInfoFromToken().familyName;

	const medicationsInventory = useSelector(
		(state: RootState) => state.medications.medications
	);
	const dispatch = useDispatch<AppDispatch>();
	const [isFormOpen, setIsFormOpen] = useState(false);

	useEffect(() => {
		dispatch(getMedicationInventory({ medications: medicationsInventory }));
	}, [dispatch]);

	const handleSubmitMedicationForm = (medication: MedicationInventory) => {
		dispatch(addMedications({ medication }));

		setIsFormOpen(false);
	};

	const data = medicationsInventory || [];

	return (
		<div className="p-6 space-y-6 relative">
			<MedsSummaryCards medications={data} />
			<MedicationInventoryTable columns={columns} data={data} />
			<div
				className={`absolute top-0 -right-8 h-full w-96  bg-white border-l border-gray-200 shadow-lg transform transition-transform duration-300 z-50
        ${isFormOpen ? 'translate-x-0' : 'translate-x-full'}`}>
				<div className="p-4 flex items-center justify-between border-b">
					<h3 className="text-lg font-semibold">
						Add New Medication
					</h3>
					<button
						onClick={() => setIsFormOpen(false)}
						className="text-gray-500 hover:text-gray-700">
						✕
					</button>
				</div>
				<div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
					<AddNewMedicationForm
						onSubmit={handleSubmitMedicationForm}
						addedByName={userName}
					/>
				</div>
			</div>
			<button
				onClick={() => setIsFormOpen((prev) => !prev)}
				className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
				➕ Add Medication
			</button>
		</div>
	);
};

export default MedicationsPage;
