import { configureStore } from '@reduxjs/toolkit';
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

export const store = configureStore({
	reducer: {
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
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
