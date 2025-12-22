import React from 'react';
import AppSidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import { useAutoLogout } from '@/hooks/useAutoLogout';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { Toaster } from '../ui/sonner';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

type DashboardLayoutProps = {
	children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	const user = useSelector((state: RootState) => state.user.loggedInUser);
	if (user) {
		useAutoLogout();
	}
	return (
		<SidebarProvider className="flex h-screen bg-gray-100 min-w-0">
			<AppSidebar />
			<div className="flex-1 flex flex-col min-w-0">
				<TopNavBar />
				<main className="flex-1 p-4 pb-8 mt-16 mb-5  overflow-y-hidden overflow-x-hidden scrollbar-thin min-w-0">
					{/* <SidebarTrigger /> */}
					{children}
				</main>
				<Toaster />
			</div>
		</SidebarProvider>
	);
};

export default DashboardLayout;
