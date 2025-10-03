import api from '../../api/axiosInstance';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClinicalDetailRecord } from '@/types/clinicalDetailRecord';
import { VitalsRecord } from '@/types/vitalsRecords';

interface VitalsState {
	vitals: VitalsRecord[];
	selectedVitalsRecord: VitalsRecord | null;
	loading: boolean;
	error: string | null;
	cache: Record<string, VitalsRecord[]>;
}

const initialState: VitalsState = {
	vitals: [],
	selectedVitalsRecord: null,
	loading: false,
	error: null,
	cache: {},
};

export const searchVitalsRecord = createAsyncThunk<
	VitalsRecord[],
	string,
	{ rejectValue: string }
>('vitals/search', async (query, thunkAPI) => {
	try {
		const response = await api.get(`/vitals/search?query=${query}`);
		if (!response) {
			throw new Error('Failed to fetch vitals record');
		}
		return (await response.data) as VitalsRecord[];
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const getAllvitalsRecords = createAsyncThunk<
	VitalsRecord[],
	{ vitalsRecord: VitalsRecord[] }
>('vitals/getAll', async ({ vitalsRecord }) => {
	const response = await api.get('vitals/getAll', {
		params: { vitalsRecord },
	});
	return response.data;
});

export const getSelectedPatientsVitalsRecords = createAsyncThunk<
	VitalsRecord[],
	{ patientId: string; vitalsRecords: VitalsRecord[] }
>('vitals/setvitalsRecords', async ({ patientId, vitalsRecords }) => {
	const response = await api.get(`vitals/${patientId}/getRecords`, {
		params: { vitalsRecords },
	});
	return response.data;
});

export const updateVitalsRecord = createAsyncThunk<
	VitalsRecord,
	{ selectedVitalsRecord: VitalsRecord }
>('vitals/update', async ({ selectedVitalsRecord }) => {
	const response = await api.put(
		`vitals/${selectedVitalsRecord.id}/update`,
		selectedVitalsRecord
	);
	return response.data;
});

export const addNewVitalsRecord = createAsyncThunk<
	VitalsRecord,
	{ vitalsRecord: VitalsRecord }
>('vitals/addVitalsRecord', async ({ vitalsRecord }) => {
	const response = await api.post(`vitals/add`, vitalsRecord);
	return response.data;
});

const vitalsSlice = createSlice({
	name: 'vitals',
	initialState,
	reducers: {
		clearResults: (state) => {
			state.vitals = [];
		},
		setvitalsRecords: (state, action: PayloadAction<VitalsRecord[]>) => {
			state.vitals = action.payload;
		},
		setSelectedvitalsRecord: (
			state,
			action: PayloadAction<VitalsRecord | null>
		) => {
			state.selectedVitalsRecord = action.payload;
		},

		addvitalsRecord: (
			state,
			action: PayloadAction<{
				vitalsRecord: VitalsRecord;
			}>
		) => {
			const existingRecord = state.vitals.find(
				(vitalsRec) => vitalsRec.id === action.payload.vitalsRecord.id
			);
			if (!existingRecord) {
				state.vitals.push(action.payload.vitalsRecord);
			} else {
				Object.assign(existingRecord, action.payload.vitalsRecord);
			}
		},

		updateRecord: (
			state,
			action: PayloadAction<{ vitalsRecord: VitalsRecord }>
		) => {
			const updated = action.payload.vitalsRecord;
			const index = state.vitals.findIndex(
				(vitalsRec) => vitalsRec.id === updated.id
			);

			if (index !== -1) {
				state.vitals[index] = {
					...state.vitals[index],
					...updated,
				};
			}

			if (state.selectedVitalsRecord?.id === updated.id) {
				state.selectedVitalsRecord = {
					...state.selectedVitalsRecord,
					...updated,
				};
			}
		},
		resetVitals: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(searchVitalsRecord.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				searchVitalsRecord.fulfilled,
				(state, action: PayloadAction<VitalsRecord[]>) => {
					state.loading = false;
					state.vitals = action.payload;
					const query = (action as any).meta.arg as string;
					state.cache[query] = action.payload;
				}
			)
			.addCase(searchVitalsRecord.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to search vitals record';
			})
			.addCase(updateVitalsRecord.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateVitalsRecord.fulfilled, (state, action) => {
				state.loading = false;
				const { selectedVitalsRecord } = action.meta.arg;

				const index = state.vitals.findIndex(
					(m) => m.id === selectedVitalsRecord.id
				);

				if (index !== -1) {
					state.vitals[index] = {
						...state.vitals[index],
						...action.payload,
					};
				}
			})
			.addCase(updateVitalsRecord.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to update medications';
			})
			.addCase(getAllvitalsRecords.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getAllvitalsRecords.fulfilled,
				(state, action: PayloadAction<VitalsRecord[]>) => {
					state.loading = false;
					state.vitals = action.payload;
					const query = (action as any).meta.arg as string;
					state.cache[query] = action.payload;
				}
			)
			.addCase(getAllvitalsRecords.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to fetch vitals records';
			})
			.addCase(getSelectedPatientsVitalsRecords.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getSelectedPatientsVitalsRecords.fulfilled,
				(state, action: PayloadAction<VitalsRecord[]>) => {
					state.loading = false;
					state.vitals = action.payload;
				}
			)
			.addCase(
				getSelectedPatientsVitalsRecords.rejected,
				(state, action) => {
					state.loading = false;
					state.error =
						action.error.message ||
						'Failed to fetch selected patient vitals records';
				}
			)

			.addCase(addNewVitalsRecord.fulfilled, (state, action) => {
				const existingvitalsRecord = state.vitals.find(
					(vitalsRec) => vitalsRec.id === action.payload.id
				);
				if (!existingvitalsRecord) {
					state.vitals.push(action.payload);
				} else {
					Object.assign(existingvitalsRecord, action.payload);
				}
			});
	},
});

export const {
	clearResults,
	setvitalsRecords,
	setSelectedvitalsRecord,
	addvitalsRecord,
	updateRecord,
	resetVitals,
} = vitalsSlice.actions;
export default vitalsSlice.reducer;
