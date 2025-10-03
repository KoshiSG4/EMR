import api from '../../api/axiosInstance';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MedicalRecord } from '@/types/medicalRecords';

interface MedicalRecordsState {
	medicalRecords: MedicalRecord[];
	selectedMedicalRecord: MedicalRecord | null;
	loading: boolean;
	error: string | null;
	cache: Record<string, MedicalRecord[]>;
}

const initialState: MedicalRecordsState = {
	medicalRecords: [],
	selectedMedicalRecord: null,
	loading: false,
	error: null,
	cache: {},
};

export const searchMedicalRecord = createAsyncThunk<
	MedicalRecord[],
	string,
	{ rejectValue: string }
>('medicalRecords/search', async (query, thunkAPI) => {
	try {
		const response = await api.get(`/medicalRecords/search?query=${query}`);
		if (!response) {
			throw new Error('Failed to fetch medical record');
		}
		return (await response.data) as MedicalRecord[];
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const getAllMedicalRecords = createAsyncThunk<
	MedicalRecord[],
	{ medicalRecord: MedicalRecord[] }
>('medicalRecords/getAll', async ({ medicalRecord }) => {
	const response = await api.get('medicalRecords/getAll', {
		params: { medicalRecord },
	});
	return response.data;
});

export const getSelectedPatientsMedicalRecords = createAsyncThunk<
	MedicalRecord[],
	{ patientId: string; medicalRecords: MedicalRecord[] }
>('medicalRecords/setMedicalRecords', async ({ patientId, medicalRecords }) => {
	const response = await api.get(`medicalRecords/${patientId}/getRecords`, {
		params: { medicalRecords },
	});
	return response.data;
});

export const updateMedicalRecord = createAsyncThunk<
	MedicalRecord,
	{ selectedMedicalRecord: MedicalRecord }
>('medicalRecords/update', async ({ selectedMedicalRecord }) => {
	const response = await api.put(
		`medicalRecords/${selectedMedicalRecord.id}/update`,
		selectedMedicalRecord
	);
	return response.data;
});

export const addNewMedicalRecord = createAsyncThunk<
	MedicalRecord,
	{ patientId: string; medicalRecord: MedicalRecord }
>('medicalRecords/addMedicalRecord', async ({ patientId, medicalRecord }) => {
	const response = await api.post(
		`medicalRecords/${patientId}/add`,
		medicalRecord
	);
	return response.data;
});

const medicalRecordsSlice = createSlice({
	name: 'medicalRecords',
	initialState,
	reducers: {
		clearResults: (state) => {
			state.medicalRecords = [];
		},
		setMedicalRecords: (state, action: PayloadAction<MedicalRecord[]>) => {
			state.medicalRecords = action.payload;
		},
		addMedicalRecord: (
			state,
			action: PayloadAction<{
				patientId: string;
				medicalRecord: MedicalRecord;
			}>
		) => {
			const existingRecord = state.medicalRecords.find(
				(medRec) =>
					medRec.diagnosisId ===
					action.payload.medicalRecord.diagnosisId
			);
			if (!existingRecord) {
				state.medicalRecords.push(action.payload.medicalRecord);
			} else {
				Object.assign(existingRecord, action.payload.medicalRecord);
			}
		},

		updateRecord: (
			state,
			action: PayloadAction<{ medicalRecord: MedicalRecord }>
		) => {
			const updated = action.payload.medicalRecord;
			const index = state.medicalRecords.findIndex(
				(medRec) => medRec.id === updated.id
			);

			if (index !== -1) {
				state.medicalRecords[index] = {
					...state.medicalRecords[index],
					...updated,
				};
			}

			if (state.selectedMedicalRecord?.id === updated.id) {
				state.selectedMedicalRecord = {
					...state.selectedMedicalRecord,
					...updated,
				};
			}
		},
		resetMedicalRecord: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(searchMedicalRecord.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				searchMedicalRecord.fulfilled,
				(state, action: PayloadAction<MedicalRecord[]>) => {
					state.loading = false;
					state.medicalRecords = action.payload;
					const query = (action as any).meta.arg as string;
					state.cache[query] = action.payload;
				}
			)
			.addCase(searchMedicalRecord.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to search medical record';
			})
			.addCase(updateMedicalRecord.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateMedicalRecord.fulfilled, (state, action) => {
				state.loading = false;
				const { selectedMedicalRecord } = action.meta.arg;

				const index = state.medicalRecords.findIndex(
					(m) => m.id === selectedMedicalRecord.id
				);

				if (index !== -1) {
					state.medicalRecords[index] = {
						...state.medicalRecords[index],
						...action.payload,
					};
				}
			})
			.addCase(updateMedicalRecord.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to update medical record';
			})
			.addCase(getAllMedicalRecords.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getAllMedicalRecords.fulfilled,
				(state, action: PayloadAction<MedicalRecord[]>) => {
					state.loading = false;
					state.medicalRecords = action.payload;
					const query = (action as any).meta.arg as string;
					state.cache[query] = action.payload;
				}
			)
			.addCase(getAllMedicalRecords.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to add a medical records';
			})
			.addCase(getSelectedPatientsMedicalRecords.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getSelectedPatientsMedicalRecords.fulfilled,
				(state, action: PayloadAction<MedicalRecord[]>) => {
					state.loading = false;
					state.medicalRecords = action.payload;
				}
			)
			.addCase(
				getSelectedPatientsMedicalRecords.rejected,
				(state, action) => {
					state.loading = false;
					state.error =
						action.error.message ||
						'Failed to fetch selected patient medicalRecords records';
				}
			)

			.addCase(addNewMedicalRecord.fulfilled, (state, action) => {
				const existingRecord = state.medicalRecords.find(
					(medRec) => medRec.id === action.payload.id
				);
				if (!existingRecord) {
					state.medicalRecords.push(action.payload);
				} else {
					Object.assign(existingRecord, action.payload);
				}
			});
	},
});

export const {
	clearResults,
	setMedicalRecords,
	addMedicalRecord,
	updateRecord,
} = medicalRecordsSlice.actions;
export default medicalRecordsSlice.reducer;
