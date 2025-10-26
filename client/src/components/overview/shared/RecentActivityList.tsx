import {
	ActivityItem,
	getRecentActivities,
} from '../configs/recentActivityConfig';
import { getTimeAgo } from '../../../utils/timeAgo';
import { useEffect, useState } from 'react';

interface RecentActivityListProps {
	userRole: string;
}

const RecentActivityList = ({ userRole }: RecentActivityListProps) => {
	const activityList1 = [
		{ action: 'New patient registered:John Doe', time: '2 mins ago' },
		{ action: 'Doctor Jane updated a record', time: '14 mins ago' },
		{ action: 'Admin created a new user', time: '1 hour ago' },
	];
	const [activities, setActivities] = useState<ActivityItem[]>([]);

	useEffect(() => {
		const getActivities = async () => {
			const data = await getRecentActivities(userRole);
			setActivities(data);
		};
		getActivities();
	}, [userRole]);

	return (
		<div className="border-2 border-[#85b8ca] rounded-2xl shadow-md p-4 mb-6 ">
			<h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
			<ul className="space-y-2">
				{activityList1.map((item, index) => (
					<li key={index} className="text-sm">
						{item.action}{' '}
						<span className="text-xs text-gray-500">
							({getTimeAgo(item.time)})
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RecentActivityList;
