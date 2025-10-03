import { LabRequest } from './labRequest';
import { MedicalRecord } from './medicalRecords';
import { PatientMedication } from './patientMedicationTypes';
import { Prescription } from './prescription';
import { VitalsRecord } from './vitalsRecords';

export interface ClinicalDetailRecord {
	id: string;
	date: string;
	chiefComplaint: string; //patient’s main concern
	hpi: string; //History of Present Illness (HPI)
	allergies: string;
	notes: string;
	assessment: string;
	plan: string;
	recordedBy: string;
	patientId: string;

	vitals?: VitalsRecord[];
	medications?: PatientMedication[];
	diagnose?: MedicalRecord[];
	prescription?: Prescription;
	labTests?: LabRequest[];
}
