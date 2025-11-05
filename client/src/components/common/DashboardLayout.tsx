import React from 'react';
import AppSidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import { useAutoLogout } from '@/hooks/useAutoLogout';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';

type DashboardLayoutProps = {
	children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	useAutoLogout();
	return (
		<SidebarProvider className="flex h-screen bg-gray-100">
			<AppSidebar />
			<div className="flex-1 flex flex-col">
				<TopNavBar />
				<main className="flex-1 p-4 pb-8 mt-16 mb-5  overflow-y-hidden overflow-x-hidden scrollbar-thin">
					{/* <SidebarTrigger /> */}
					{children}
				</main>
			</div>
		</SidebarProvider>
	);
};

export default DashboardLayout;
