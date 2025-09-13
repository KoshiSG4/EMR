import { PatientMedication } from './patientMedicationTypes';
import { Records } from './recordsTypes';

export interface Patient {
	userId: string;
	user: {
		name: string;
		email: string;
	};
	fullName: string;
	email: string;
	doctor: { name: string };
	emergencyContact: string;
	phone: string;
	address: string;
	dateOfBirth: string;
	gender: string;
	patientMedication: PatientMedication[];
	records: Records[];
}
