import { PatientMedication } from './patientMedicationTypes';
import { Patient } from './patientTypes';
import { MedicalRecord } from './medicalRecords';

export interface Doctor {
	userId: string;
	user: {
		name: string;
		email: string;
	};
	specialization: string;
	patients: Patient[];
	patientMedication: PatientMedication[];
	records: MedicalRecord[];
	action?: 'connect' | 'disconnect';
}
