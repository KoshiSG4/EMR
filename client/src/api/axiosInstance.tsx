import { resetUser } from '@/store/slices/userSlice';
import { store } from '@/store/store';
import axios from 'axios';

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
	withCredentials: true,
});

let isRefreshing = false;
let failedQueue: Array<{
	resolve: (value?: unknown) => void;
	reject: (error: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
	failedQueue.forEach((prom) => {
		if (error) prom.reject(error);
		else prom.resolve(token);
	});
	failedQueue = [];
};

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (
			error.response?.status === 401 &&
			originalRequest.url.includes('/auth/refresh')
		) {
			isRefreshing = false;
			processQueue(error, null);
			return Promise.reject({ logout: true });
		}

		// Handle access token expiry
		if (
			error.response?.status === 401 &&
			!(originalRequest as any)._retry
		) {
			if (isRefreshing) {
				return new Promise((resolve, reject) => {
					failedQueue.push({ resolve, reject });
				}).then(() => api(originalRequest));
			}

			(originalRequest as any)._retry = true;
			isRefreshing = true;

			try {
				const resp = await api.post(
					'/auth/refresh',
					{},
					{ withCredentials: true }
				);
				api.defaults.headers.common[
					'Authorization'
				] = `Bearer ${resp.data.accessToken}`;
				originalRequest.headers[
					'Authorization'
				] = `Bearer ${resp.data.accessToken}`;
				processQueue(null, resp.data.accessToken);
				return api(originalRequest);
			} catch (err) {
				processQueue(err, null);
				return Promise.reject({ logout: true });
			} finally {
				isRefreshing = false;
			}
		}

		return Promise.reject(error);
	}
);

export default api;
