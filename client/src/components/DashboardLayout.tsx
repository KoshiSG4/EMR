import React from 'react';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';

type DashboardLayoutProps = {
	children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<div className="flex-1 flex flex-col">
				<TopNavBar />
				<main className="flex-1 p-4 overflow-y-auto">{children}</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
