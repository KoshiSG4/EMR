import { PatientMedication } from '@/types/patientMedicationTypes';
import api from '../../api/axiosInstance';
import { Patient } from '../../types/patientTypes';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PatientTab {
	id: string;
	patient: Patient;
}

interface PatientsState {
	patients: Patient[];
	selectedPatient: Patient | null;
	patientMedication: PatientMedication[];
	openTabs: PatientTab[];
	activeTabId: string | null;
	loading: boolean;
	error: string | null;
	cache: Record<string, Patient[]>;
}

const initialState: PatientsState = {
	patients: [],
	selectedPatient: null,
	patientMedication: [],
	openTabs: [],
	activeTabId: null,
	loading: false,
	error: null,
	cache: {},
};

export const searchPatients = createAsyncThunk<
	Patient[],
	string,
	{ state: { patients: PatientsState } }
>('patients/searchPatients', async (query, { getState }) => {
	const { cache } = getState().patients;
	if (cache[query]) {
		return cache[query];
	}
	const response = await api.get(`patients/search?query=${query}`);
	return response.data;
});

export const getAllPatients = createAsyncThunk<
	Patient[],
	{ patients: Patient[] }
>('patients/getAll', async ({ patients }) => {
	const response = await api.get('patients/getAll', {
		params: { patients },
	});
	console.log(response.data);
	return response.data;
});

export const registerNewPatient = createAsyncThunk<
	Patient,
	{ patient: Patient }
>('patients/createNewPatientProfile', async ({ patient }) => {
	const response = await api.get('patients/create', {
		params: { patient },
	});
	return response.data;
});

export const addMedsToPatientDatabase = createAsyncThunk<
	PatientMedication,
	{ patientId: string; medication: PatientMedication }
>('patients/addMedication', async ({ patientId, medication }) => {
	const response = await api.post(
		`patients/${patientId}/medications`,
		medication
	);
	return response.data;
});

export const updatePatientInfo = createAsyncThunk<
	Patient,
	{ patientId: string; patient: Patient }
>('patients/update', async ({ patientId, patient }) => {
	const response = await api.put(`patients/${patientId}/update`, patient);
	console.log(response.data);
	return response.data;
});

export const deactivatePatientFromDB = createAsyncThunk<
	Patient,
	{ patientId: string }
>('patients/delete', async ({ patientId }) => {
	const response = await api.delete(`patients/${patientId}/delete`);
	console.log(response.data);
	return response.data;
});

const patientSlice = createSlice({
	name: 'patients',
	initialState,
	reducers: {
		clearResults: (state) => {
			state.patients = [];
		},
		setPatients: (state, action: PayloadAction<Patient[]>) => {
			state.patients = action.payload;
		},
		setSelectedPatient: (state, action: PayloadAction<Patient>) => {
			state.selectedPatient = action.payload;
			console.log(state.selectedPatient);
		},
		openPatientTabs: (
			state,
			action: PayloadAction<{ patientTab: PatientTab }>
		) => {
			const { patientTab } = action.payload;
			const exists = state.openTabs.find((p) => p.id === patientTab.id);
			if (!exists) {
				state.openTabs.push(patientTab);
			}
			state.activeTabId = patientTab.id;
			console.log(state.activeTabId);
		},
		closePatientTab: (state, action: PayloadAction<string>) => {
			const closingId = action.payload;
			state.openTabs = state.openTabs.filter((p) => p.id !== closingId);
			if (state.activeTabId === closingId) {
				if (state.openTabs.length > 0) {
					state.activeTabId =
						state.openTabs[state.openTabs.length - 1].id;
				} else {
					state.activeTabId = null;
				}
			}
		},
		setActivePatientTab: (state, action: PayloadAction<string>) => {
			state.activeTabId = action.payload;
		},
		updatePatient(
			state,
			action: PayloadAction<{
				patientId: string;
				patient: Patient;
			}>
		) {
			const { patientId, patient } = action.payload;

			const index = state.patients.findIndex(
				(p) => p.userId === patientId
			);
			if (index !== -1) {
				state.patients[index] = {
					...state.patients[index],
					...patient,
				};
			}

			if (state.selectedPatient?.userId === patientId) {
				state.selectedPatient = { ...patient };
			}
		},
		deactivatePatient(
			state,
			action: PayloadAction<{
				patientId: string;
			}>
		) {
			state.patients = state.patients.filter(
				(p) => p.userId !== action.payload.patientId
			);

			if (state.selectedPatient?.userId === action.payload.patientId) {
				state.selectedPatient = null;
			}
		},
		addMedicationsToPatient(
			state,
			action: PayloadAction<{
				patientId?: string;
				medication: PatientMedication;
			}>
		) {
			const patient = state.patients.find(
				(p) => p.userId === action.payload.patientId
			);
			console.log('patient', patient);
			if (patient) {
				patient.patientMedication.push(action.payload.medication);

				if (state.selectedPatient?.userId === patient.userId) {
					state.selectedPatient = {
						...patient,
						patientMedication: patient.patientMedication,
					};
				}
			}
		},
		updateMedicationForPatient(
			state,
			action: PayloadAction<{
				patientId: string;
				medication: PatientMedication;
			}>
		) {
			const patient = state.patients.find(
				(p) => p.userId === action.payload.patientId
			);
			if (patient) {
				const index = patient.patientMedication.findIndex(
					(m) => m.id === action.payload.medication.id
				);
				if (index > -1) {
					patient.patientMedication[index] =
						action.payload.medication;
					if (state.selectedPatient?.userId === patient.userId) {
						state.selectedPatient = { ...patient };
					}
				}
			}
		},
		removeMedicationFromPatient(
			state,
			action: PayloadAction<{ patientId: string; medicationId: string }>
		) {
			const patient = state.patients.find(
				(p) => p.userId === action.payload.patientId
			);
			if (patient) {
				patient.patientMedication = patient.patientMedication.filter(
					(m) => m.id !== action.payload.medicationId
				);
				if (state.selectedPatient?.userId === patient.userId) {
					state.selectedPatient = { ...patient };
				}
			}
		},
		resetPatient: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(searchPatients.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				searchPatients.fulfilled,
				(state, action: PayloadAction<Patient[]>) => {
					state.loading = false;
					state.patients = action.payload;
					const query = (action as any).meta.arg as string;
				}
			)
			.addCase(searchPatients.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to search patients';
			})
			.addCase(getAllPatients.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getAllPatients.fulfilled,
				(state, action: PayloadAction<Patient[]>) => {
					state.loading = false;
					state.patients = action.payload;
					const query = (action as any).meta.arg as string;
				}
			)
			.addCase(getAllPatients.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to fetch patients';
			})
			.addCase(registerNewPatient.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				registerNewPatient.fulfilled,
				(state, action: PayloadAction<Patient>) => {
					state.loading = false;
					state.patients.push(action.payload);
				}
			)
			.addCase(registerNewPatient.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to register new patients';
			})
			.addCase(addMedsToPatientDatabase.fulfilled, (state, action) => {
				const { patientId } = action.meta.arg;
				const patient = state.patients.find(
					(p) => p.userId === patientId
				);
				if (patient) {
					patient.patientMedication.push(action.payload);
				}
			});
	},
});

export const {
	clearResults,
	setPatients,
	setSelectedPatient,
	openPatientTabs,
	closePatientTab,
	updatePatient,
	deactivatePatient,
	setActivePatientTab,
	addMedicationsToPatient,
	updateMedicationForPatient,
	removeMedicationFromPatient,
	resetPatient,
} = patientSlice.actions;
export default patientSlice.reducer;
