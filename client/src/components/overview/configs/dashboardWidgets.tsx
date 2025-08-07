import OverviewSummaryCards from '../shared/OverviewSummaryCards';
import QuickActions from '../shared/QuickActions';
import { ReactNode } from 'react';
import RecentActivityList from '../shared/RecentActivityList';
import SystemHealthStatus from '../admin/SystemHealthStatus';
import OverviewCharts from '../shared/OverviewCharts';

type RoleDashboardWidgets = {
	cards?: ReactNode;
	leftColumn: ReactNode[];
	rightColumn?: ReactNode[];
};

export const dashBoardWidgetsbyRole: Record<string, RoleDashboardWidgets> = {
	admin: {
		cards: <OverviewSummaryCards />,
		leftColumn: [<QuickActions />, <OverviewCharts />],
		rightColumn: [<RecentActivityList />, <SystemHealthStatus />],
	},
	doctor: {
		cards: <OverviewSummaryCards />,
		leftColumn: [<QuickActions />, <OverviewCharts />],
		rightColumn: [<RecentActivityList />, <SystemHealthStatus />],
	},
	nurse: {
		cards: <OverviewSummaryCards />,
		leftColumn: [<QuickActions />, <OverviewCharts />],
		rightColumn: [<RecentActivityList />, <SystemHealthStatus />],
	},
	patient: {
		cards: <OverviewSummaryCards />,
		leftColumn: [<QuickActions />, <OverviewCharts />],
		rightColumn: [<RecentActivityList />, <SystemHealthStatus />],
	},
};
