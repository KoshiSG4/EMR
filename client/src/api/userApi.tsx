import api from './axiosInstance';

export const getOwnProfile = async () => {
	const response = await api.get('/');
	return response.data.role.toLowerCase();
};

export const getAllAdmins = async () => {
	const response = await api.get('admins/get');
	return response.data;
};

// export const createUser = async (payload) => {
// 	const response = await api.post('admins/create', payload)
// 	return response.data
// }
