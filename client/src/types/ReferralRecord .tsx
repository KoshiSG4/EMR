export interface ReferralRecord {
	id: string;
	patientId: string;
	date: string;
	referralType: string;
	referredTo: string;
	department: string;
	reason: string;
	notes: string;
	status: string;
	referredBy: string;
}
