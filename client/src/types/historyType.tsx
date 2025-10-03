import { Doctor } from './doctorsType';
import { Patient } from './patientTypes';

export interface HistoryRecord {
	id: string;
	patientId: string;
	patient?: Patient;
	recordedBy: string;

	//-- past medical history --
	chronicConditions?: string;
	pastIllnesses?: string;
	surgeries?: string;
	hospitalizations?: string;

	//-- family history --
	familyHistory?: string;

	//-- social history --
	lifestyle?: string;
	smokingStatus?: string;
	smokingNotes?: string;
	alcoholUse?: string;
	alcoholNotes?: string;
	drugUse?: string;
	drugNotes?: string;
	diet?: string;
	dietNotes?: string;
	occupation?: string;

	//-- allergies --
	allergies?: string;

	// -- OB/GYN histroy
	obstetricHistory?: string;
	menstrualHistroy?: string;

	// -- immunizations --
	immunizations?: string;

	createdAt: string;
	updatedAt: string;
}
