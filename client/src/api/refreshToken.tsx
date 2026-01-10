import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import api from './axiosInstance';
import { store } from '@/store/store';
import { clearToken, setToken } from '@/store/slices/authSlice';
import {
	getLoggedInUser,
	setLoggedInUser,
	setUsers,
} from '@/store/slices/userSlice';

export const refreshClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true,
});

//prevent multiple refresh calls
export let refreshPromise: Promise<string | null> | null = null;
export const refreshToken = async () => {
	if (!refreshPromise) {
		refreshPromise = (async () => {
			try {
				console.log('refresh starts');
				const res = await refreshClient.post(
					'/auth/refresh',
					{},
					{ withCredentials: true }
				);
				const newToken = res.data.accessToken;
				store.dispatch(setToken(newToken));
				store.dispatch(setLoggedInUser(res.data.user));
				console.log('refresh finish');
				return newToken;
			} catch {
				store.dispatch(clearToken());
				return null;
			} finally {
				refreshPromise = null;
			}
		})();
	}
	return refreshPromise;
};

// attach token to requests
api.interceptors.request.use((config) => {
	const state = store.getState();
	const token = state.token.token;
	if (token) config.headers.Authorization = `Bearer ${token}`;
	return config;
});

// refresh on 401
api.interceptors.response.use(
	(response) => response,
	async (error: AxiosError) => {
		const originalRequest = error.config as AxiosRequestConfig & {
			_retry?: boolean;
		};

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			const newToken = await refreshToken();

			if (newToken && originalRequest.headers) {
				originalRequest.headers.Authorization = `Bearer ${newToken}`;
				return api(originalRequest);
			}
		}

		if (
			error.response?.status === 401 &&
			!error.config?.url?.includes('/auth/refresh')
		) {
			console.log('refresh stoped');
			return Promise.reject({ logout: true });
		}

		return Promise.reject(error);
	}
);

export default api;
