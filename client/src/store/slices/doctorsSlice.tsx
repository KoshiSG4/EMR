import api from '@/api/axiosInstance';
import { Doctor } from '@/types/doctorsType';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DoctorsState {
	doctors: Doctor[];
	selectedDoctor: Doctor | null;
	loading: boolean;
	error: string | null;
	cache: Record<string, Doctor[]>;
}

const initialState: DoctorsState = {
	doctors: [],
	selectedDoctor: null,
	loading: false,
	error: null,
	cache: {},
};

export const searchDoctors = createAsyncThunk<
	Doctor[],
	string,
	{ state: { doctors: DoctorsState } }
>('doctors/searchDoctors', async (query, { getState }) => {
	const { cache } = getState().doctors;
	if (cache[query]) {
		return cache[query];
	}
	const response = await api.get(`doctors/search?query=${query}`);
	return response.data;
});

export const getAllDoctors = createAsyncThunk<Doctor[], { doctors: Doctor[] }>(
	'doctors/getAll',
	async ({ doctors }) => {
		const response = await api.get('doctors/getAll', {
			params: { doctors },
		});
		return response.data;
	}
);

export const registerNewDoctor = createAsyncThunk<Doctor, { docotr: Doctor }>(
	'docotrs/createNewDocotrProfile',
	async ({ docotr }) => {
		const response = await api.get('docotrs/create', {
			params: { docotr },
		});
		return response.data;
	}
);

export const updateDoctorInfo = createAsyncThunk<
	Doctor,
	{ doctorId: string; doctor: Doctor }
>('doctors/update', async ({ doctorId, doctor }) => {
	const response = await api.put(`doctors/${doctorId}/update`, doctor);
	return response.data;
});

export const deleteDoctorFromDB = createAsyncThunk<
	Doctor,
	{ doctorId: string }
>('doctors/delete', async ({ doctorId }) => {
	const response = await api.delete(`doctors/${doctorId}/delete`);
	return response.data;
});

const doctorSlice = createSlice({
	name: 'doctors',
	initialState,
	reducers: {
		clearResults: (state) => {
			state.doctors = [];
		},
		setDoctors: (state, action: PayloadAction<Doctor[]>) => {
			state.doctors = action.payload;
		},
		setSelectedDoctor: (state, action: PayloadAction<Doctor>) => {
			state.selectedDoctor = action.payload;
		},

		updateDoctor(
			state,
			action: PayloadAction<{
				doctorId: string;
				doctor: Doctor;
			}>
		) {
			const { doctorId, doctor } = action.payload;

			const index = state.doctors.findIndex((p) => p.userId === doctorId);
			if (index !== -1) {
				state.doctors[index] = {
					...state.doctors[index],
					...doctor,
				};
			}

			if (state.selectedDoctor?.userId === doctorId) {
				state.selectedDoctor = { ...doctor };
			}
		},
		deleteDoctor(
			state,
			action: PayloadAction<{
				doctorId: string;
			}>
		) {
			state.doctors = state.doctors.filter(
				(p) => p.userId !== action.payload.doctorId
			);

			if (state.selectedDoctor?.userId === action.payload.doctorId) {
				state.selectedDoctor = null;
			}
		},

		resetDoctor: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(searchDoctors.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				searchDoctors.fulfilled,
				(state, action: PayloadAction<Doctor[]>) => {
					state.loading = false;
					state.doctors = action.payload;
					const query = (action as any).meta.arg as string;
				}
			)
			.addCase(searchDoctors.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to search doctors';
			})
			.addCase(getAllDoctors.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getAllDoctors.fulfilled,
				(state, action: PayloadAction<Doctor[]>) => {
					state.loading = false;
					state.doctors = action.payload;
				}
			)
			.addCase(getAllDoctors.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch doctors';
			})
			.addCase(registerNewDoctor.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				registerNewDoctor.fulfilled,
				(state, action: PayloadAction<Doctor>) => {
					state.loading = false;
					state.doctors.push(action.payload);
				}
			)
			.addCase(registerNewDoctor.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to resgister a new doctor';
			});
	},
});

export const {
	clearResults,
	setDoctors,
	setSelectedDoctor,
	updateDoctor,
	deleteDoctor,
	resetDoctor,
} = doctorSlice.actions;
export default doctorSlice.reducer;
