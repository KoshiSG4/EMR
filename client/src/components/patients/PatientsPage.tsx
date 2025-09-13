import {
	getAllPatients,
	openPatientTabs,
	registerNewPatient,
	setSelectedPatient,
} from '@/store/slices/patientSlice';
import { AppDispatch, RootState } from '@/store/store';
import { Patient } from '@/types/patientTypes';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../common/DataTable';
import { useNavigate } from 'react-router-dom';
import { patientColumns } from './patientColumns';
import SelectedPatientContent from './SelectedPatientContent';

const PatientsPage = () => {
	const allPatientsList = useSelector(
		(state: RootState) => state.patients.patients
	);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!allPatientsList || allPatientsList.length === 0) {
			setLoading(true);
			dispatch(getAllPatients({ patients: allPatientsList }));
		}
	}, [dispatch]);

	const handleAddNewPatientForm = (patient: Patient) => {
		dispatch(registerNewPatient({ patient }));

		setIsFormOpen(false);
	};

	const calculateAge = (dob: Date) => {
		const today = new Date();
		let age = today.getFullYear() - dob.getFullYear();
		const m = today.getMonth() - dob.getMonth();

		if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
			age--;
		}
		return age;
	};

	const patientsData = allPatientsList.map((patient) => {
		return {
			userId: patient.userId ?? '',
			name: patient.fullName ?? '',
			gender: patient.gender ?? '',
			age: calculateAge(new Date(patient.dateOfBirth)) ?? '',
			dateOfBirth:
				new Date(patient.dateOfBirth).toISOString().split('T')[0] ?? '',
			diagnosis: patient.records?.[0]?.diagnosis ?? '',
			email: patient.user?.email ?? '',
			emergencyContact: patient.emergencyContact.split(' - ')[1] ?? '',
			contactNo: patient.phone ?? '',
			assignedDoctor: patient.doctor?.name ?? '',
		};
	});

	const handleSelectPatient = (rowData: (typeof patientsData)[number]) => {
		const selectedPatient = allPatientsList.find(
			(patient) => patient.userId === rowData.userId
		);
		if (selectedPatient) {
			dispatch(setSelectedPatient(selectedPatient));
			dispatch(
				openPatientTabs({
					patientTab: {
						id: selectedPatient.userId,
						fullName: selectedPatient.fullName,
						gender: selectedPatient.gender,
					},
				})
			);

			navigate(`/patients/${selectedPatient.userId}/profile`);
		}
	};

	return (
		<div className="p-6 space-y-6 relative">
			<DataTable
				columns={patientColumns}
				data={patientsData}
				loading={loading}
				onRowSelect={handleSelectPatient}
				filters={[
					{
						columnId: 'assignedDoctor',
						placeholder: 'Filter patients by doctor name...',
						className: 'max-w-sm mr-4',
					},
					{
						columnId: 'name',
						placeholder: 'Filter patients...',
						className: 'max-w-sm',
					},
				]}
			/>
		</div>
	);
};

export default PatientsPage;
