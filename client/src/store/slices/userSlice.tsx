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
export const addNewUser = createAsyncThunk<User, { user: User }>(
	'users/create',
	async ({ user }) => {
		try {
			const response = await api.post('admins/create', {
				user,
				withCredentials: true,
			});

			if (response.status === 201 && response.data?.user) {
				const { email, tempPassword } = response.data.user;
				alert(
					`✅ User Created Successfully! \n A new user account has been created. \n Please use the following temporary login credentials: \n 📧 Email: ${email} \n 🔑 Temporary Password: ${tempPassword} \n ⚠️ Make sure to change your password after the first login.`
				);
			} else if (response.status === 400) {
				alert(
					'❌ Failed to create user. \n⚠️Email provided is already in use!\nPlease try again with a different email.'
				);
			} else {
				alert(
					`⚠️ Unexpected response: ${
						response.data?.message || 'No message from server.'
					}`
				);
			}
			return response.data.user;
		} catch (error: unknown) {
			let message = '❌ Failed to create user. Please try again later.';

			if (error && typeof error === 'object' && 'response' in error) {
				const err = error as {
					response?: { data?: { message?: string } };
				};
				message = err.response?.data?.message || message;
			}

			alert(`🚫 ${message}`);
		}
	}
);

export const getLoggedInUser = createAsyncThunk<User>('user/me', async () => {
	try {
		const response = await api.get('auth/me', { withCredentials: true });
		return response.data;
	} catch (error: unknown) {
		let message = '❌ Failed to create user. Please try again later.';

		if (error && typeof error === 'object' && 'response' in error) {
			const err = error as {
				response?: { data?: { message?: string } };
			};
			message = err.response?.data?.message || message;
		}

		alert(`🚫 ${message}`);
	}
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
		setSelectedUser: (state, action: PayloadAction<User>) => {
			state.selectedUser = action.payload;
		},
		clearSelectedUser: (state) => {
			state.selectedUser = null;
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
			})
			.addCase(addNewUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				addNewUser.fulfilled,
				(state, action: PayloadAction<User>) => {
					state.loading = false;
					state.users.push(action.payload);
				}
			)
			.addCase(addNewUser.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to search doctors';
			});
	},
});

export const {
	clearResults,
	setUsers,
	setSelectedUser,
	clearSelectedUser,
	setLoggedInUser,
	resetUser,
} = userSlice.actions;
export default userSlice.reducer;
