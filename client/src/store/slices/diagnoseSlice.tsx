import api from '../../api/axiosInstance';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DiagnoseRecord } from '@/types/diagnoseRecords';

interface DiagnoseState {
	diagnosis: DiagnoseRecord[];
	selectedDiagnose: DiagnoseRecord | null;
	loading: boolean;
	error: string | null;
	cache: Record<string, DiagnoseRecord[]>;
}

const initialState: DiagnoseState = {
	diagnosis: [],
	selectedDiagnose: null,
	loading: false,
	error: null,
	cache: {},
};

export const searchDiagnose = createAsyncThunk<
	DiagnoseRecord[],
	string,
	{ state: { diagnose: DiagnoseState } }
>('diagnose/searchDiagnose', async (query, { getState }) => {
	const { cache } = getState().diagnose;
	if (cache[query]) {
		return cache[query];
	}
	const response = await api.get(`diagnosis/search?query=${query}`);
	return response.data;
});

export const getAllDiagnosis = createAsyncThunk<
	DiagnoseRecord[],
	{ diagnosis: DiagnoseRecord[] }
>('diagnose/getAll', async ({ diagnosis }) => {
	const response = await api.get('diagnosis/getAll', {
		params: { diagnosis },
	});
	return response.data;
});

export const addDiagnose = createAsyncThunk<
	DiagnoseRecord,
	{ diagnose: DiagnoseRecord }
>('diagnose/addNewDiagnose', async ({ diagnose }) => {
	const response = await api.get('diagnosis/add', {
		params: { diagnose },
	});
	return response.data;
});

export const updateDiagnoseDB = createAsyncThunk<
	DiagnoseRecord,
	{ diagnoseId: string; diagnose: DiagnoseRecord }
>('diagnose/update', async ({ diagnoseId, diagnose }) => {
	const response = await api.put(`diagnosis/${diagnoseId}/update`, diagnose);
	console.log(response.data);
	return response.data;
});

export const deleteDiagnoseDB = createAsyncThunk<
	DiagnoseRecord,
	{ diagnoseId: string }
>('diagnose/delete', async ({ diagnoseId }) => {
	const response = await api.delete(`diagnosis/${diagnoseId}/delete`);
	console.log(response.data);
	return response.data;
});

const diagnoseSlice = createSlice({
	name: 'diagnose',
	initialState,
	reducers: {
		clearResults: (state) => {
			state.diagnosis = [];
		},
		setDiagnose: (state, action: PayloadAction<DiagnoseRecord[]>) => {
			state.diagnosis = action.payload;
		},
		addNewDiagnose: (
			state,
			action: PayloadAction<{
				diagnose: DiagnoseRecord;
			}>
		) => {
			const existingRecord = state.diagnosis.find(
				(d) => d.id === action.payload.diagnose.id
			);
			if (!existingRecord) {
				state.diagnosis.push(action.payload.diagnose);
			} else {
				Object.assign(existingRecord, action.payload.diagnose);
			}
		},

		setSelectedDiagnose: (state, action: PayloadAction<DiagnoseRecord>) => {
			state.selectedDiagnose = action.payload;
		},
		updateDiagnose(
			state,
			action: PayloadAction<{
				diagnoseId: string;
				diagnose: DiagnoseRecord;
			}>
		) {
			const { diagnoseId, diagnose } = action.payload;

			const index = state.diagnosis.findIndex((d) => d.id === diagnoseId);
			if (index !== -1) {
				state.diagnosis[index] = {
					...state.diagnosis[index],
					...diagnose,
				};
			}

			if (state.selectedDiagnose?.id === diagnoseId) {
				state.selectedDiagnose = { ...diagnose };
			}
		},
		deleteDiagnose(
			state,
			action: PayloadAction<{
				diagnoseId: string;
			}>
		) {
			state.diagnosis = state.diagnosis.filter(
				(p) => p.id !== action.payload.diagnoseId
			);

			if (state.selectedDiagnose?.id === action.payload.diagnoseId) {
				state.selectedDiagnose = null;
			}
		},
		resetDiagnosis: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(searchDiagnose.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				searchDiagnose.fulfilled,
				(state, action: PayloadAction<DiagnoseRecord[]>) => {
					state.loading = false;
					state.diagnosis = action.payload;
					const query = (action as any).meta.arg as string;
				}
			)
			.addCase(searchDiagnose.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to search diagnose';
			})
			.addCase(getAllDiagnosis.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getAllDiagnosis.fulfilled,
				(state, action: PayloadAction<DiagnoseRecord[]>) => {
					state.loading = false;
					state.diagnosis = action.payload;
				}
			)
			.addCase(getAllDiagnosis.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to fetch diagnosis';
			})
			.addCase(addDiagnose.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				addDiagnose.fulfilled,
				(state, action: PayloadAction<DiagnoseRecord>) => {
					state.loading = false;
					state.diagnosis.push(action.payload);
				}
			)
			.addCase(addDiagnose.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to add diagnose';
			});
	},
});

export const {
	clearResults,
	setDiagnose,
	setSelectedDiagnose,
	updateDiagnose,
	deleteDiagnose,
	resetDiagnosis,
} = diagnoseSlice.actions;
export default diagnoseSlice.reducer;
