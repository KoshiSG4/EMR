export interface PatientMedication {
	id: string;
	patientId: string;
	name: string;
	dosage: string;
	frequency: string;
	route: string;
	prescribedByName: string;
	startDate: string;
	endDate?: string;
	status: 'Active' | 'Discontinued' | 'New';
	instructions?: string;
	createdAt: string;
	updatedAt: string;
}
