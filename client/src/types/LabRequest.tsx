import { ClinicalDetailRecord } from './clinicalDetailRecord';
import { Doctor } from './doctorsType';
import { MedicalRecord } from './medicalRecords';
import { Patient } from './patientTypes';

export interface LabRequest {
	id: string;
	testType: string;
	testCode?: string;
	department: string;

	priority?: 'ROUTINE' | 'URGENT' | 'STAT';

	doctorId: string;
	doctorName: Doctor;

	patientId: string;
	patientName: string;
	patient?: Patient;

	medicalRecordId?: string;
	medicalRecord?: MedicalRecord;

	clinicalDetailsId?: string;
	clinicalDetails?: ClinicalDetailRecord;

	specimenType?: string;
	specimenId?: string;
	specimenCollectedAt?: string;

	status: string;
	requestedAt: string;
	acceptedAt?: string;
	cancelledAt?: string;
	cancelledBy?: string;
	reasonForCancellation?: string;

	results?: {
		parameter: string;
		value: string;
		unit?: string;
		referenceRange?: string;
		interpretation?: string;
	}[];

	validatedAt?: string;
	validatedBy?: string;
	releasedAt?: string;

	billingCode?: string;
	cost?: number;
	coveredByInsurance?: boolean;

	orderNotes?: string;

	createdAt: string;
	updatedAt?: string;
}
