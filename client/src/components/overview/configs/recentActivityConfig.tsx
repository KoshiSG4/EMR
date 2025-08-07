import api from '../../../api/axiosInstance';
import axios from 'axios';

export type ActivityItem = {
	action: string;
	timestamp: string;
};

export const createActivity = async (
	role: string,
	action: string,
	userId?: string
) => {
	try {
		await api.post('/activity', { role, action, userId });
	} catch (error) {
		console.error('❌ Failed to log activity', error);
	}
};

export const getRecentActivities = async (
	role: string
): Promise<ActivityItem[]> => {
	try {
		const res = await api.get('/activity', {
			params: { role },
		});
		return res.data;
	} catch (error) {
		console.error('❌ Error while getting recent activities', error);
		return [];
	}
};
