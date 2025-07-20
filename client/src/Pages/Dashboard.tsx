import { useEffect, useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import Forbidden from '../components/Forbidden';
import axios from 'axios';
import { getRoleFromToken } from '../utils/jwtUtils';

const Dashboard = () => {
	const [activeTab, setActiveTab] = useState('overview');
	const [tabContent, setTabContent] = useState<string | null>(null);
	const [isForbidden, setIsForbidden] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const userRole = getRoleFromToken()?.toLocaleLowerCase();

	const tabs = [
		'overview',
		'prescriptions',
		'manage-users',
		'appointments',
		'records',
		'settings',
	];

	useEffect(() => {
		console.log(userRole);

		const fetchTabData = async () => {
			setIsLoading(true);
			setIsForbidden(false);
			setTabContent(null);

			try {
				const response = await axios.get(
					`/api/${userRole}/${activeTab}`
				);
				setTabContent(JSON.stringify(response.data, null, 2));
			} catch (err: any) {
				if (err.response?.status === 403) {
					setIsForbidden(true);
				} else {
					setTabContent('Error loading content');
				}
			} finally {
				setIsLoading(false);
			}
		};
		fetchTabData();
	}, [activeTab]);

	return (
		<DashboardLayout>
			<div className="mb-4">
				<h1 className="text-2xl font-semibold">Dashboard</h1>
			</div>

			{/* Tabs */}
			<div className="flex gap-4 border-b mb-6">
				{tabs.map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`px-4 py-2 font-medium capitalize ${
							activeTab === tab
								? 'border-b-2 border-blue-600 text-blue-600'
								: 'text-gray-600'
						}`}>
						{tab.replace('-', ' ')}
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className="p-4 border rounded shadow bg-white">
				{isLoading ? (
					<p>Loading...</p>
				) : isForbidden ? (
					<Forbidden />
				) : (
					<>
						<p className="text-lg font-semibold capitalize mb-2">
							{activeTab} Content
						</p>
						<pre className="text-sm text-gray-700 whitespace-pre-wrap">
							{tabContent}
						</pre>
					</>
				)}
			</div>
		</DashboardLayout>
	);
};

export default Dashboard;
