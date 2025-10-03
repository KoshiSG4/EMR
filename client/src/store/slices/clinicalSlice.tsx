import api from '../../api/axiosInstance';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClinicalDetailRecord } from '@/types/clinicalDetailRecord';

interface ClinicalState {
	clinicalDetails: ClinicalDetailRecord[];
	selectedClinicalRecord: ClinicalDetailRecord | null;
	loading: boolean;
	error: string | null;
	cache: Record<string, ClinicalDetailRecord[]>;
}

const initialState: ClinicalState = {
	clinicalDetails: [],
	selectedClinicalRecord: null,
	loading: false,
	error: null,
	cache: {},
};

export const searchClinicalRecord = createAsyncThunk<
	ClinicalDetailRecord[],
	string,
	{ rejectValue: string }
>('clinical/search', async (query, thunkAPI) => {
	try {
		const response = await api.get(`/clinical/search?query=${query}`);
		if (!response) {
			throw new Error('Failed to fetch clinical record');
		}
		return (await response.data) as ClinicalDetailRecord[];
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const getAllClinicalRecords = createAsyncThunk<
	ClinicalDetailRecord[],
	{ clinicalRecord: ClinicalDetailRecord[] }
>('clinical/getAll', async ({ clinicalRecord }) => {
	const response = await api.get('clinical/getAll', {
		params: { clinicalRecord },
	});
	return response.data;
});

export const getSelectedPatientsClinicalRecords = createAsyncThunk<
	ClinicalDetailRecord[],
	{ patientId: string; clinicalRecord: ClinicalDetailRecord[] }
>('clinical/setClinicalRecords', async ({ patientId, clinicalRecord }) => {
	const response = await api.get(`clinical/${patientId}/getRecord`, {
		params: { clinicalRecord },
	});
	return response.data;
});

export const updateClinicalRecord = createAsyncThunk<
	ClinicalDetailRecord,
	{ selectedClinicalRecord: ClinicalDetailRecord }
>('clinical/update', async ({ selectedClinicalRecord }) => {
	const response = await api.put(
		`clinical/${selectedClinicalRecord.id}`,
		selectedClinicalRecord
	);
	return response.data;
});

export const addNewClinicalRecord = createAsyncThunk<
	ClinicalDetailRecord,
	{ clinicalRecord: ClinicalDetailRecord }
>('clinical/addClinicalRecord', async ({ clinicalRecord }) => {
	const response = await api.post(`clinical/add`, clinicalRecord);
	return response.data;
});

const clinicalSlice = createSlice({
	name: 'clinical',
	initialState,
	reducers: {
		clearResults: (state) => {
			state.clinicalDetails = [];
		},
		setClinicalRecords: (
			state,
			action: PayloadAction<ClinicalDetailRecord[]>
		) => {
			state.clinicalDetails = action.payload;
		},
		setSelectedClinicalRecord: (
			state,
			action: PayloadAction<ClinicalDetailRecord | null>
		) => {
			state.selectedClinicalRecord = action.payload;
		},

		addClinicalRecord: (
			state,
			action: PayloadAction<{
				clinicalRecord: ClinicalDetailRecord;
			}>
		) => {
			const existingRecord = state.clinicalDetails.find(
				(clinicalRec) =>
					clinicalRec.id === action.payload.clinicalRecord.id
			);
			if (!existingRecord) {
				state.clinicalDetails.push(action.payload.clinicalRecord);
			} else {
				Object.assign(existingRecord, action.payload.clinicalRecord);
			}
		},

		updateRecord: (
			state,
			action: PayloadAction<{ clinicalRecord: ClinicalDetailRecord }>
		) => {
			const updated = action.payload.clinicalRecord;
			const index = state.clinicalDetails.findIndex(
				(clinicalRec) => clinicalRec.id === updated.id
			);

			if (index !== -1) {
				state.clinicalDetails[index] = {
					...state.clinicalDetails[index],
					...updated,
				};
			}

			if (state.selectedClinicalRecord?.id === updated.id) {
				state.selectedClinicalRecord = {
					...state.selectedClinicalRecord,
					...updated,
				};
			}
		},
		resetClinicalRecord: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(searchClinicalRecord.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				searchClinicalRecord.fulfilled,
				(state, action: PayloadAction<ClinicalDetailRecord[]>) => {
					state.loading = false;
					state.clinicalDetails = action.payload;
					const query = (action as any).meta.arg as string;
					state.cache[query] = action.payload;
				}
			)
			.addCase(searchClinicalRecord.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to search clinical record';
			})
			.addCase(updateClinicalRecord.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateClinicalRecord.fulfilled, (state, action) => {
				state.loading = false;
				const { selectedClinicalRecord } = action.meta.arg;

				const index = state.clinicalDetails.findIndex(
					(m) => m.id === selectedClinicalRecord.id
				);

				if (index !== -1) {
					state.clinicalDetails[index] = {
						...state.clinicalDetails[index],
						...action.payload,
					};
				}
			})
			.addCase(updateClinicalRecord.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to search medications';
			})
			.addCase(getAllClinicalRecords.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getAllClinicalRecords.fulfilled,
				(state, action: PayloadAction<ClinicalDetailRecord[]>) => {
					state.loading = false;
					state.clinicalDetails = action.payload;
					const query = (action as any).meta.arg as string;
					state.cache[query] = action.payload;
				}
			)
			.addCase(getAllClinicalRecords.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to fetch clinical records';
			})
			.addCase(getSelectedPatientsClinicalRecords.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getSelectedPatientsClinicalRecords.fulfilled,
				(state, action: PayloadAction<ClinicalDetailRecord[]>) => {
					state.loading = false;
					state.clinicalDetails = action.payload;
				}
			)
			.addCase(
				getSelectedPatientsClinicalRecords.rejected,
				(state, action) => {
					state.loading = false;
					state.error =
						action.error.message ||
						'Failed to fetch selected patient clinical records';
				}
			)

			.addCase(addNewClinicalRecord.fulfilled, (state, action) => {
				const existingClinicalRecord = state.clinicalDetails.find(
					(clinicalRec) => clinicalRec.id === action.payload.id
				);
				if (!existingClinicalRecord) {
					state.clinicalDetails.push(action.payload);
				} else {
					Object.assign(existingClinicalRecord, action.payload);
				}
			});
	},
});

export const {
	clearResults,
	setClinicalRecords,
	setSelectedClinicalRecord,
	addClinicalRecord,
	updateRecord,
	resetClinicalRecord,
} = clinicalSlice.actions;
export default clinicalSlice.reducer;
