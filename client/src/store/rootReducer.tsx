import { combineReducers } from '@reduxjs/toolkit';
import patientReducer from './slices/patientSlice';
import doctorReducer from './slices/doctorsSlice';
import medicationsReducer from './slices/medicationSlice';
import diagnosisReducer from './slices/diagnoseSlice';
import clinicalReducer from './slices/clinicalSlice';
import vitalsReducer from './slices/vitalsSlice';
import medicalRecordsReducer from './slices/medicalRecordSlice';
import historyReducer from './slices/historySlice';
import laboratoryReducer from './slices/laboratorySlice';
import userReducer from './slices/userSlice';
import tokenReducer from './slices/authSlice';

const appReducer = combineReducers({
	patients: patientReducer,
	medications: medicationsReducer,
	doctors: doctorReducer,
	diagnosis: diagnosisReducer,
	clinical: clinicalReducer,
	vitals: vitalsReducer,
	medicalRecords: medicalRecordsReducer,
	history: historyReducer,
	laboratory: laboratoryReducer,
	user: userReducer,
	token: tokenReducer,
});

export const rootReducer = (state: any, action: any) => {
	if (action.type === 'auth/logout') {
		state = undefined;
	}
	return appReducer(state, action);
};
