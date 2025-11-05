import { Doctor } from './doctorsType';
import { PatientMedication } from './patientMedicationTypes';
import { MedicalRecord } from './medicalRecords';
import { ClinicalDetailRecord } from './clinicalDetailRecord';
import { VitalsRecord } from './vitalsRecords';
import { ReferralRecord } from './referralRecord ';
import { LabRequest } from './labRequest';
import { HistoryRecord } from './historyType';

export interface Patient {
	userId: string;
	fullName: string;
	doctors: Doctor[];
	emergencyContact: string;
	patientMedication?: PatientMedication[];
	records?: MedicalRecord[];
	vitals?: VitalsRecord[];
	referralRecords?: ReferralRecord[];
	labTests?: LabRequest[];
	clinicalDetails?: ClinicalDetailRecord[];
	histories?: HistoryRecord[];
}
