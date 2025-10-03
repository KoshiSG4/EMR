import { Doctor } from './doctorsType';
import { PatientMedication } from './patientMedicationTypes';
import { MedicalRecord } from './medicalRecords';

export interface Patient {
	userId: string;
	user: {
		name: string;
		email: string;
	};
	fullName: string;
	email: string;
	doctors: Doctor[];
	emergencyContact: string;
	phone: string;
	address: string;
	dateOfBirth: string;
	gender: string;
	patientMedication: PatientMedication[];
	records: MedicalRecord[];
}
