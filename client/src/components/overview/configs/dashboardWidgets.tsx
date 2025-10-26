import OverviewSummaryCards from '../shared/OverviewSummaryCards';
import QuickActions from '../shared/QuickActions';
import { ReactNode } from 'react';
import RecentActivityList from '../shared/RecentActivityList';
import SystemHealthStatus from '../admin/SystemHealthStatus';
import OverviewCharts from '../shared/OverviewCharts';
import WelcomeCard from '../shared/WelcomeCard';
import UserProfileCard from '../shared/UserProfileCard';

type RoleDashboardWidgets = {
	welcomeCard?: ReactNode;
	leftColumn: ReactNode[];
	rightColumn?: ReactNode[];
};

export const dashBoardWidgets = (userRole: string): RoleDashboardWidgets => ({
	leftColumn: [
		<WelcomeCard userRole={userRole} />,
		<OverviewSummaryCards userRole={userRole} />,
		<QuickActions userRole={userRole} />,
		<OverviewCharts userRole={userRole} />,
	],
	rightColumn: [
		<UserProfileCard userRole={userRole} />,
		<RecentActivityList userRole={userRole} />,
		<SystemHealthStatus />,
	],
});
