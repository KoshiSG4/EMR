export type LabStatus =
	| 'Pending'
	| 'Sample Accepted'
	| 'In Progress'
	| 'Completed'
	| 'Validated';

export interface LabRequest {
	id: string;
	patientId: string;
	patientName: string;
	testType: string;
	testName: string;
	testCode?: string;
	department: string;
	requestedBy: string;
	date: string;
	status: LabStatus;
	result?: string;
	normalRange: string;
	interpretation: string;
	validatedBy?: string;
	validatedById?: string;
}
