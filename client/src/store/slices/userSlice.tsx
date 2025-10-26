import api from '@/api/axiosInstance';
import { User } from '@/types/userTypes';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsersState {
	users: User[];
	selectedUser: User | null;
	loggedInUser: User | null;
	loading: boolean;
	error: string | null;
	cache: Record<string, User[]>;
}

const initialState: UsersState = {
	users: [],
	selectedUser: null,
	loggedInUser: null,
	loading: false,
	error: null,
	cache: {},
};

export const getAllUsers = createAsyncThunk<User[]>(
	'users/getAll',
	async () => {
		const response = await api.get('admins/getAll', {
			withCredentials: true,
		});
		return response.data;
	}
);

export const getLoggedInUser = createAsyncThunk<User>('user/me', async () => {
	const response = await api.get('auth/me', { withCredentials: true });
	return response.data;
});

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		clearResults: (state) => {
			state.users = [];
		},
		setUsers: (state, action: PayloadAction<User[]>) => {
			state.users = action.payload;
		},
		setLoggedInUser: (state, action: PayloadAction<User>) => {
			state.loggedInUser = action.payload;
		},
		resetUser: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllUsers.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				getAllUsers.fulfilled,
				(state, action: PayloadAction<User[]>) => {
					state.loading = false;
					state.users = action.payload;
				}
			)
			.addCase(getAllUsers.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to search doctors';
			});
	},
});

export const { clearResults, setUsers, setLoggedInUser, resetUser } =
	userSlice.actions;
export default userSlice.reducer;
