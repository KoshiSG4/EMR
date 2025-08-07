import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import Forbidden from '../components/Forbidden';
import axios from 'axios';
import { getUserInfoFromToken } from '../utils/jwtUtils';
import { navLinks } from '../constants/navLinks';
import Overview from '../components/overview/shared/Overview';
import AppointmentsPage from './AppointmentsPage';

const Dashboard = () => {
	const { section = '', tab = '' } = useParams();
	const navigate = useNavigate();

	const [tabContent, setTabContent] = useState<React.ReactNode>(null);
	const [isForbidden, setIsForbidden] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const userRole = getUserInfoFromToken().role?.toLocaleLowerCase();

	const currentSection = navLinks.find((link) => link.path.endsWith(section));

	if (!userRole) {
		return <div>Unauthorized Access</div>;
	}

	const allowedTabs =
		currentSection?.tabs?.filter(
			(tab) => !tab.roles || tab.roles.includes(userRole)
		) || [];

	useEffect(() => {
		console.log(tab);
		const fetchTabData = async () => {
			console.log(userRole);
			setIsLoading(true);
			setIsForbidden(false);
			setTabContent(null);

			try {
				const response = await axios.get(
					`/api/${userRole}/${section}/${tab || 'default'}`
				);
				console.log(section);

				if (section === 'overview') {
					setTabContent(<Overview />);
				} else if (section === 'appointments') {
					setTabContent(<AppointmentsPage activeTab={tab} />);
				} else {
					setTabContent(
						<pre className="text-sm text-gray-700 whitespace-pre-wrap break-all ">
							{JSON.stringify(response.data, null, 2)}
						</pre>
					);
				}
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

		if (currentSection) fetchTabData();
	}, [section, tab]);

	return (
		<DashboardLayout>
			<div className="mb-4 mt-16">
				<h1 className="text-2xl font-semibold capitalize">
					{currentSection?.label || 'Dashboard'}
				</h1>
			</div>

			{/* Tabs */}
			{allowedTabs.length > 0 && (
				<div className="flex gap-4 border-b mb-6">
					{allowedTabs.map((tabItem) => (
						<button
							key={tabItem.label}
							onClick={() =>
								navigate(`/${section}/${tabItem.path}`)
							}
							className={`px-4 py-2 font-medium capitalize ${
								tab === tabItem.path
									? 'border-b-2 border-blue-600 text-blue-600'
									: 'text-gray-600'
							}`}>
							{tabItem.label}
						</button>
					))}
				</div>
			)}

			{/* Tab Content */}
			<div className="p-4 border rounded shadow bg-white min-h-[200px]">
				{isLoading ? (
					<p>Loading...</p>
				) : isForbidden ? (
					<Forbidden />
				) : (
					tabContent
				)}
			</div>
		</DashboardLayout>
	);
};

export default Dashboard;
