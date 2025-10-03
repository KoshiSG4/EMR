import { MedicalRecord } from './medicalRecords';

export interface DiagnoseRecord {
	id: string;
	name: string;
	doctorName: string;
	diagnosisName: string;
	records?: MedicalRecord[];
}
