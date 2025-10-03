import api from '@/api/axiosInstance';
import { LabRequest } from '@/types/labRequest';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LaboratoryState {
	allLabRequests: LabRequest[];
	patientLabRequests: Record<string, LabRequest[]>;
	selectedLabRequest: LabRequest | null;
	loadedAll: boolean;
	loadedPatients: Record<string, boolean>;
	loading: boolean;
	error: string | null;
}

const initialState: LaboratoryState = {
	allLabRequests: [],
	patientLabRequests: {},
	selectedLabRequest: null,
	loadedAll: false,
	loadedPatients: {},
	loading: false,
	error: null,
};

export const getAllLabTests = createAsyncThunk<
	LabRequest[],
	{ labRequests: LabRequest[] }
>('laboratory/getAll', async ({ labRequests }) => {
	const response = await api.get(`laboratory/getAll`, {
		params: { labRequests },
	});
	console.log('get all');
	return response.data;
});

export const getSelectedPatientsLabTests = createAsyncThunk<
	LabRequest[],
	{ patientId: string; labRequests: LabRequest[] }
>('laboratory/getAllPatientLabTests', async ({ patientId, labRequests }) => {
	const response = await api.get(
		`patients/${patientId}/medical-records/clinical/lab/getAll`,
		{
			params: { labRequests },
		}
	);
	console.log('get selected');
	return response.data;
});

export const addLabTestRequest = createAsyncThunk<
	LabRequest,
	{ labRequest: LabRequest }
>('laboratory/addLabTestRequest', async ({ labRequest }) => {
	const response = await api.get('laboratory/add', {
		params: { labRequest },
	});
	return response.data;
});

export const updateLabTestRecord = createAsyncThunk<
	LabRequest,
	{ labRequestId: string; labRequest: LabRequest }
>('laboratory/update', async ({ labRequestId, labRequest }) => {
	const response = await api.put(
		`laboratory/${labRequestId}/update`,
		labRequest
	);
	return response.data;
});

const laboratorySlice = createSlice({
	name: 'laboratory',
	initialState,
	reducers: {
		setLabRequests: (state, action: PayloadAction<LabRequest[]>) => {
			state.allLabRequests = action.payload;
		},
		setSelectedLabRequest: (
			state,
			action: PayloadAction<LabRequest | null>
		) => {
			state.selectedLabRequest = action.payload;
		},
		addLabRequest: (
			state,
			action: PayloadAction<{ patientId: string; labRequest: LabRequest }>
		) => {
			const { patientId, labRequest } = action.payload;
			state.patientLabRequests[patientId].push(action.payload.labRequest);
		},
		updateLabRequest(
			state,
			action: PayloadAction<{
				labRequestId: string;
				labRequest: LabRequest;
			}>
		) {
			const { labRequest, labRequestId } = action.payload;

			const index = state.allLabRequests.findIndex(
				(l) => l.id === labRequestId
			);
			if (index !== -1) {
				state.allLabRequests[index] = {
					...state.allLabRequests[index],
					...labRequest,
				};
			}

			if (state.selectedLabRequest?.id === labRequestId) {
				state.selectedLabRequest = { ...labRequest };
			}
		},
		resetLabRequests: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllLabTests.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getAllLabTests.fulfilled, (state, action) => {
				state.allLabRequests = action.payload;
				state.loadedAll = true;
			})
			.addCase(getAllLabTests.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to fetch lab tests';
			})

			.addCase(getSelectedPatientsLabTests.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getSelectedPatientsLabTests.fulfilled, (state, action) => {
				const patientId = action.meta.arg.patientId;
				state.patientLabRequests[patientId] = action.payload;
				state.loadedPatients[patientId] = true;
			})

			.addCase(getSelectedPatientsLabTests.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to fetch patient lab tests';
			})

			.addCase(addLabTestRequest.fulfilled, (state, action) => {
				state.allLabRequests.push(action.payload);
			})

			.addCase(updateLabTestRecord.fulfilled, (state, action) => {
				const idx = state.allLabRequests.findIndex(
					(r) => r.id === action.payload.id
				);
				if (idx !== -1) {
					state.allLabRequests[idx] = action.payload;
				}
			});
	},
});

export const {
	setLabRequests,
	addLabRequest,
	setSelectedLabRequest,
	updateLabRequest,
	resetLabRequests,
} = laboratorySlice.actions;

export default laboratorySlice.reducer;
