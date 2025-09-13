export interface ClinicalDetailRecord {
	id: string;
	date: string;
	chiefComplaint: string; //patient’s main concern
	history: string; //History of Present Illness (HPI)
	pastHistory: string; //Past Medical History
	medications: string;
	allergies: string;
	examination: string; //Physical Examination Findings
	assessment: string; //Assessment/Impression (doctor’s diagnosis notes)
	plan: string; //Plan / Treatment
	recordedBy: string;
}
