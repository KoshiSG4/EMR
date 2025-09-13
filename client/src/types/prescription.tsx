export interface Prescription {
	id: string;
	date: string;
	medication: string;
	dosage: string;
	frequency: string;
	duration: string;
	instructions: string;
	prescribedBy: string;
	status: 'Active' | 'Completed' | 'Discontinued' | 'Refilled' | 'New';
}
