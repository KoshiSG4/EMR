import { LabRequest, LabStatus } from '@/types/LabRequest';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LaboratoryState {
	labRequests: LabRequest[];
	selectedLabRequest: LabRequest | null;
	loading: boolean;
	error: string | null;
}

const initialState: LaboratoryState = {
	labRequests: [],
	selectedLabRequest: null,
	loading: false,
	error: null,
};

const laboratorySlice = createSlice({
	name: 'laboratory',
	initialState,
	reducers: {
		setLabRequests: (state, action: PayloadAction<LabRequest[]>) => {
			state.labRequests = action.payload;
		},
		setSelectedLabRequest: (
			state,
			action: PayloadAction<LabRequest | null>
		) => {
			state.selectedLabRequest = action.payload;
		},
		addLabRequest: (state, action: PayloadAction<LabRequest>) => {
			state.labRequests.push(action.payload);
		},
		updateLabStatus: (
			state,
			action: PayloadAction<{ id: string; status: LabStatus }>
		) => {
			const req = state.labRequests.find(
				(r) => r.id === action.payload.id
			);
			if (req) {
				req.status = action.payload.status;
			}
		},
		enterLabResult: (
			state,
			action: PayloadAction<{ id: string; result: string }>
		) => {
			const req = state.labRequests.find(
				(r) => r.id === action.payload.id
			);
			if (req) {
				req.result = action.payload.result;
				req.status = 'Completed';
			}
		},
		validateLabReport: (
			state,
			action: PayloadAction<{ id: string; validatedBy: string }>
		) => {
			const req = state.labRequests.find(
				(r) => r.id === action.payload.id
			);
			if (req) {
				req.status = 'Validated';
				req.validatedBy = action.payload.validatedBy;
			}
		},
	},
});

export const {
	setLabRequests,
	addLabRequest,
	setSelectedLabRequest,
	updateLabStatus,
	enterLabResult,
	validateLabReport,
} = laboratorySlice.actions;

export default laboratorySlice.reducer;
