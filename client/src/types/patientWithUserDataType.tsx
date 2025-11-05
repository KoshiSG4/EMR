import { Patient } from './patientTypes';
import { User } from './userTypes';

export interface PatientWithUserData extends Patient, User {}
