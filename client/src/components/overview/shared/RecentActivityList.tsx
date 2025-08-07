import {
	ActivityItem,
	getRecentActivities,
} from '../configs/recentActivityConfig';
import { getUserInfoFromToken } from '../../../utils/jwtUtils';
import { getTimeAgo } from '../../../utils/timeAgo';
import { useEffect, useState } from 'react';

const RecentActivityList = () => {
	const activityList1 = [
		{ action: 'New patient registered:John Doe', time: '2 mins ago' },
		{ action: 'Doctor Jane updated a record', time: '14 mins ago' },
		{ action: 'Admin created a new user', time: '1 hour ago' },
	];
	const userRole = getUserInfoFromToken().role?.toLowerCase() ?? 'patient';
	const [activities, setActivities] = useState<ActivityItem[]>([]);

	useEffect(() => {
		const getActivities = async () => {
			const data = await getRecentActivities(userRole);
			setActivities(data);
		};
		getActivities();
	}, [userRole]);

	return (
		<div className="bg-white rounded-2xl shadow-md p-4 mb-6">
			<h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
			<ul className="space-y-2">
				{activities.map((item, index) => (
					<li key={index} className="text-sm text-gray-700">
						{item.action}{' '}
						<span className="text-xs text-gray-400">
							({getTimeAgo(item.timestamp)})
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RecentActivityList;
