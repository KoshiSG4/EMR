export interface DiagnosisRecord {
	id: string;
	patientId: string;
	date: string;
	code: string;
	name: string;
	severity: string;
	description: string;
	recordedBy: string;
}
