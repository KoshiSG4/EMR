export interface HistoryRecord {
	id: string | number;
	date: string;
	type: string; // e.g., Medical, Surgical, Allergy, Family, Social
	condition: string; // e.g., "Asthma"
	status: string; // e.g., Active, Resolved, Chronic
	notes: string;
	recordedBy: string;
}
