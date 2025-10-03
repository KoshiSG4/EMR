import { DiagnoseRecord } from './diagnoseRecords';
import { Doctor } from './doctorsType';
import { LabRequest } from './labRequest';
import { Patient } from './patientTypes';
import { Prescription } from './prescription';

export interface MedicalRecord {
	id: string;
	notes?: string | null;
	createdAt: string;
	status: string;
	type: string;
	patientId: string;
	diagnosisId: string;
	doctorId: string;
	patient?: Patient;
	doctor?: Doctor;
	diagnosis?: DiagnoseRecord;
	prescriptions?: Prescription[];
	labTests?: LabRequest[];
}

export interface FormattedMedicalRecord extends MedicalRecord {
	doctorName?: string;
	diagnoseName?: string;
	createdAt: string;
}
