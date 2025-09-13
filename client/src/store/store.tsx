import { configureStore } from '@reduxjs/toolkit';
import patientReducer from './slices/patientSlice';
import medicationsReducer from './slices/medicationSlice';

export const store = configureStore({
	reducer: {
		patients: patientReducer,
		medications: medicationsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
