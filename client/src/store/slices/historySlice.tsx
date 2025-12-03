import api from '../../api/axiosInstance';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HistoryRecord } from '@/types/historyType';

interface HistoryState {
	histories: HistoryRecord[];
	selectedHistoryRec: HistoryRecord | null;
	loading: boolean;
	error: string | null;
	cache: Record<string, HistoryRecord[]>;
}

const initialState: HistoryState = {
	histories: [],
	selectedHistoryRec: null,
	loading: false,
	error: null,
	cache: {},
};

export const searchAHistoryRec = createAsyncThunk<
	HistoryRecord[],
	string,
	{ state: { history: HistoryState } }
>('history/searchAHistoryRec', async (query, { getState }) => {
	const { cache } = getState().history;
	if (cache[query]) {
		return cache[query];
	}
	const response = await api.get(`history/search?query=${query}`);
	return response.data;
});

export const getAllHistories = createAsyncThunk<
	HistoryRecord[],
	{ patientId: string; histories: HistoryRecord[] }
>('history/getAll', async ({ patientId, histories }) => {
	const response = await api.get(`history/${patientId}/getAll`, {
		params: { histories },
	});
	const formattedData = response.data.map((history: HistoryRecord) => ({
		...history,
		createdAt: history.createdAt ? history.createdAt.split('T')[0] : null,
		updatedAt: history.updatedAt ? history.updatedAt.split('T')[0] : null,
	}));
	return formattedData;
});

export const addHistory = createAsyncThunk<
	HistoryRecord,
	{ history: HistoryRecord }
>('history/addNewHistory', async ({ history }) => {
	const response = await api.get('history/add', {
		params: { history },
	});
	return response.data;
});

export const updateHistoryRec = createAsyncThunk<
	HistoryRecord,
	{ historyId: string; history: HistoryRecord }
>('history/update', async ({ historyId, history }) => {
	const response = await api.put(`history/${historyId}/update`, history);
	return response.data;
});

const historySlice = createSlice({
	name: 'history',
	initialState,
	reducers: {
		clearResults: (state) => {
			state.histories = [];
		},
		setHistory: (state, action: PayloadAction<HistoryRecord[]>) => {
			state.histories = action.payload;
		},
		addNewHistory: (
			state,
			action: PayloadAction<{
				history: HistoryRecord;
			}>
		) => {
			const existingRecord = state.histories.find(
				(d) => d.id === action.payload.history.id
			);
			if (!existingRecord) {
				state.histories.push(action.payload.history);
			} else {
				Object.assign(existingRecord, action.payload.history);
			}
		},

		setSelectedHistoryRec: (
			state,
			action: PayloadAction<HistoryRecord>
		) => {
			state.selectedHistoryRec = action.payload;
		},
		updateHistoryRecord(
			state,
			action: PayloadAction<{
				historyId: string;
				history: HistoryRecord;
			}>
		) {
			const { historyId, history } = action.payload;

			const index = state.histories.findIndex((d) => d.id === historyId);
			if (index !== -1) {
				state.histories[index] = {
					...state.histories[index],
					...history,
				};
			}

			if (state.selectedHistoryRec?.id === historyId) {
				state.selectedHistoryRec = { ...history };
			}
		},
		resetHistories: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(searchAHistoryRec.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				searchAHistoryRec.fulfilled,
				(state, action: PayloadAction<HistoryRecord[]>) => {
					state.loading = false;
					state.histories = action.payload;
				}
			)
			.addCase(searchAHistoryRec.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to search history';
			})
			.addCase(getAllHistories.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getAllHistories.fulfilled,
				(state, action: PayloadAction<HistoryRecord[]>) => {
					state.loading = false;
					state.histories = action.payload;
				}
			)
			.addCase(getAllHistories.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to fetch histories';
			})
			.addCase(addHistory.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				addHistory.fulfilled,
				(state, action: PayloadAction<HistoryRecord>) => {
					state.loading = false;
					state.histories.push(action.payload);
				}
			)
			.addCase(addHistory.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to add history';
			});
	},
});

export const {
	clearResults,
	setHistory,
	addNewHistory,
	setSelectedHistoryRec,
	updateHistoryRecord,
	resetHistories,
} = historySlice.actions;
export default historySlice.reducer;
