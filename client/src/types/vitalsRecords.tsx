import { ClinicalDetailRecord } from './clinicalDetailRecord';
import { MedicalRecord } from './medicalRecords';

export interface VitalsRecord {
	id: string | number;
	height: string;
	weight: string;
	bloodPressure: string;
	heartRate: string;
	respiratoryRate: string;
	temperature: string;
	spo2: string;
	painScore: string;
	recordedBy: string;
	createdDate: string;
	updatedDate: string;
	patientId: string;
	medicalRecordId?: string;
	medicalRecords?: MedicalRecord[];
	clinicalDetailsId?: string;
	clinicalDetails?: ClinicalDetailRecord[];
}
