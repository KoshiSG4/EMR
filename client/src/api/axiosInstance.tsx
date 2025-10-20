import axios from 'axios';
import keycloak from '../keycloak';

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
		if (error) {
			prom.reject(error);
		} else {
			prom.resolve(token);
		}
	});
	failedQueue = [];
};

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			if (isRefreshing) {
				return new Promise(function (resolve, reject) {
					failedQueue.push({ resolve, reject });
				})
					.then(() => api(originalRequest))
					.catch((err) => Promise.reject(err));
			}

			originalRequest._retry = true;
			isRefreshing = true;

			return new Promise(async (resolve, reject) => {
				api.post('/auth/refresh')
					.then((resp) => {
						processQueue(null, resp.data.accessToken);
						resolve(api(originalRequest));
					})
					.catch((err) => {
						processQueue(err, null);
						reject(err);
					})
					.finally(() => {
						isRefreshing = false;
					});
			});
		}
		return Promise.reject(error);
	}
);

export default api;
