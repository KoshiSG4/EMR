import axios from 'axios';
import api from './axiosInstance';

// Separate axios instance for refresh token
const refreshClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
	withCredentials: true,
});

let isRefreshing = false;
let failedQueue: Array<{
	resolve: (token?: string | null) => void;
	reject: (err: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
	failedQueue.forEach((prom) => {
		error ? prom.reject(error) : prom.resolve(token);
	});
	failedQueue = [];
};

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		// Refresh failed → force logout
		if (
			error.response?.status === 401 &&
			originalRequest.url.includes('/auth/refresh')
		) {
			isRefreshing = false;
			processQueue(error, null);
			return Promise.reject({ logout: true });
		}

		// Access token expired
		if (
			error.response?.status === 401 &&
			!(originalRequest as any)._retry
		) {
			if (isRefreshing) {
				return new Promise((resolve, reject) => {
					failedQueue.push({ resolve, reject });
				}).then((token) => {
					originalRequest.headers[
						'Authorization'
					] = `Bearer ${token}`;
					return api(originalRequest);
				});
			}

			(originalRequest as any)._retry = true;
			isRefreshing = true;

			try {
				const resp = await refreshClient.post('/auth/refresh');

				const newToken = resp.data.accessToken;

				api.defaults.headers.common[
					'Authorization'
				] = `Bearer ${newToken}`;
				originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

				processQueue(null, newToken);

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

export default refreshClient;
