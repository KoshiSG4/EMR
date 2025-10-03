import api from '../../api/axiosInstance';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MedicationInventory } from '@/types/medicationInventoryType';

interface MedicationsState {
	medications: MedicationInventory[];
	selectedMedication: MedicationInventory | null;
	loading: boolean;
	error: string | null;
	cache: Record<string, MedicationInventory[]>;
}

const initialState: MedicationsState = {
	medications: [],
	selectedMedication: null,
	loading: false,
	error: null,
	cache: {},
};

export const searchMeds = createAsyncThunk<
	MedicationInventory[],
	string,
	{ rejectValue: string }
>('medications/search', async (query, thunkAPI) => {
	try {
		const response = await api.get(`/medications/search?query=${query}`);
		if (!response) {
			throw new Error('Failed to fetch medications');
		}
		return (await response.data) as MedicationInventory[];
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const getMedicationInventory = createAsyncThunk<
	MedicationInventory[],
	{ medications: MedicationInventory[] }
>('medications/getAll', async ({ medications }) => {
	const response = await api.get('medications/getAll', {
		params: { medications },
	});
	return response.data;
});

export const updateMedicationInventory = createAsyncThunk<
	MedicationInventory,
	{ selectedMedication: MedicationInventory }
>('medications/update', async ({ selectedMedication }) => {
	const response = await api.put(
		`medications/${selectedMedication.id}`,
		selectedMedication
	);
	return response.data;
});

export const addMedicationsToMedicationsDB = createAsyncThunk<
	MedicationInventory,
	{ medication: MedicationInventory }
>('medications/addMedication', async ({ medication }) => {
	const response = await api.post(`medications/add`, medication);
	return response.data;
});

const medicationSlice = createSlice({
	name: 'medications',
	initialState,
	reducers: {
		clearResults: (state) => {
			state.medications = [];
		},

		setMedications: (
			state,
			action: PayloadAction<MedicationInventory[]>
		) => {
			state.medications = action.payload;
		},

		setSelectedMedication: (
			state,
			action: PayloadAction<MedicationInventory | null>
		) => {
			state.selectedMedication = action.payload;
		},

		addMedications: (
			state,
			action: PayloadAction<{
				medication: MedicationInventory;
			}>
		) => {
			const existingMed = state.medications.find(
				(med) => med.name === action.payload.medication.name
			);
			if (!existingMed) {
				state.medications.push(action.payload.medication);
			} else {
				Object.assign(existingMed, action.payload.medication);
			}
		},

		updateMedication: (
			state,
			action: PayloadAction<{ medication: MedicationInventory }>
		) => {
			const updated = action.payload.medication;
			const index = state.medications.findIndex(
				(med) => med.id === updated.id
			);

			if (index !== -1) {
				state.medications[index] = {
					...state.medications[index],
					...updated,
				};
			}

			if (state.selectedMedication?.id === updated.id) {
				state.selectedMedication = {
					...state.selectedMedication,
					...updated,
				};
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(searchMeds.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				searchMeds.fulfilled,
				(state, action: PayloadAction<MedicationInventory[]>) => {
					state.loading = false;
					state.medications = action.payload;
					const query = (action as any).meta.arg as string;
					state.cache[query] = action.payload;
				}
			)
			.addCase(searchMeds.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to search medications';
			})
			.addCase(updateMedicationInventory.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateMedicationInventory.fulfilled, (state, action) => {
				state.loading = false;
				const { selectedMedication } = action.meta.arg;

				const index = state.medications.findIndex(
					(m) => m.id === selectedMedication.id
				);

				if (index !== -1) {
					state.medications[index] = {
						...state.medications[index],
						...action.payload,
					};
				}
			})
			.addCase(updateMedicationInventory.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to update medications';
			})
			.addCase(getMedicationInventory.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getMedicationInventory.fulfilled,
				(state, action: PayloadAction<MedicationInventory[]>) => {
					state.loading = false;
					state.medications = action.payload;
					const query = (action as any).meta.arg as string;
					state.cache[query] = action.payload;
				}
			)
			.addCase(getMedicationInventory.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to fetch medications';
			})
			.addCase(
				addMedicationsToMedicationsDB.fulfilled,
				(state, action) => {
					const existingMed = state.medications.find(
						(med) => med.name === action.payload.name
					);
					if (!existingMed) {
						state.medications.push(action.payload);
					} else {
						Object.assign(existingMed, action.payload);
					}
				}
			);
	},
});

export const {
	clearResults,
	setMedications,
	setSelectedMedication,
	addMedications,
	updateMedication,
} = medicationSlice.actions;
export default medicationSlice.reducer;
