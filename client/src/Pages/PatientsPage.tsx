import {
	clearPatientMedication,
	getAllPatients,
	getSelectedPatientData,
	openPatientTabs,
	registerNewPatient,
	setPatients,
	setSelectedPatient,
} from '@/store/slices/patientSlice';
import { AppDispatch, RootState } from '@/store/store';
import { Patient } from '@/types/patientTypes';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from '../components/common/DataTable';
import { useNavigate } from 'react-router-dom';
import { patientColumns } from '../components/patients/patientColumns';
import { selectPatientsWithUserData } from '../components/patients/patientSelecter';
import { PatientWithUserData } from '@/types/patientWithUserDataType';

const PatientsPage = () => {
	const { patients, loading } = useSelector(
		(state: RootState) => state.patients
	);
	const patientsWithUserData = useSelector(selectPatientsWithUserData);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const [isFormOpen, setIsFormOpen] = useState(false);

	useEffect(() => {
		if (!patientsWithUserData || patientsWithUserData.length <= 0) {
			dispatch(getAllPatients({ patients: patients }));
			dispatch(setPatients(patients));
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

	const patientsData = patientsWithUserData.map(
		(patient: PatientWithUserData) => {
			return {
				userId: patient.userId ?? '',
				name: patient.fullName ?? '',
				emergencyContact: patient.emergencyContact ?? '',
				gender: patient.gender ?? '',
				age: calculateAge(new Date(patient.dateOfBirth)) ?? '',
				dateOfBirth: patient.dateOfBirth ?? '',
				email: patient.email ?? '',
				contactNo: patient.phone ?? '',
			};
		}
	);

	const handleSelectPatient = (rowData: (typeof patientsData)[number]) => {
		const selectedPatient = patientsWithUserData.find(
			(patient: PatientWithUserData) => patient.userId === rowData?.userId
		);
		if (selectedPatient) {
			dispatch(setSelectedPatient(selectedPatient));
			dispatch(clearPatientMedication());
			dispatch(
				openPatientTabs({
					patientTab: {
						id: selectedPatient.userId,
						patient: selectedPatient,
					},
				})
			);
			dispatch(getSelectedPatientData({ patientId: selectedPatient.id }));

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
