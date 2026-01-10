import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
	isAuthenticated: boolean;
	token: string | null;
	loading: boolean;
}

const initialState: AuthState = {
	isAuthenticated: false,
	token: null,
	loading: true,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		setToken: (state, action: PayloadAction<string | null>) => {
			const token = action.payload;

			if (token) {
				state.token = token;
				state.isAuthenticated = true;
				state.loading = false;
			} else {
				state.token = null;
				state.isAuthenticated = false;
				state.loading = false;
			}
		},
		clearToken: (state) => {
			state.token = null;
			state.isAuthenticated = false;
			state.loading = false;
		},
	},
});

export const { setLoading, setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
