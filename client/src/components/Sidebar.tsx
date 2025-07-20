import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
	{ to: '/dashboard', label: 'Overview' },
	{ to: '/dashboard/prescriptions', label: 'Prescriptions' },
	{ to: '/dashboard/manage-users', label: 'Manage-users' },
	{ to: '/dashboard/appointments', label: 'Appointments' },
	{ to: '/dashboard/records', label: 'Records' },
	{ to: '/dashboard/settings', label: 'Settings' },
];

const Sidebar = () => {
	return (
		<aside className="w-64 h-full bg-white border-r shadow-sm">
			<div className="p-4 text-xl font-bold border-b">EMR Dashboard</div>
			<nav className="flex flex-col p-4 gap-2">
				{links.map((link) => (
					<NavLink
						key={link.to}
						to={link.to}
						className={({ isActive }) =>
							`px-4 py-2 roiunded hover:bg-gray-100 ${
								isActive ? 'bg-blue-100 text-blue-700' : ''
							}`
						}>
						{link.label}
					</NavLink>
				))}
			</nav>
		</aside>
	);
};

export default Sidebar;
