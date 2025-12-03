import { dashBoardWidgets } from '../configs/dashboardWidgets';

interface OverviewProps {
	userRole: string;
}

const Overview = ({ userRole }: OverviewProps) => {
	const widgets = dashBoardWidgets(userRole);

	return (
		<div className="p-6 space-y-6">
			{widgets.welcomeCard && widgets.welcomeCard}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Left */}
				<div className="col-span-1 lg:col-span-2 space-y-6">
					{widgets.leftColumn.map((Component, index) => (
						<div key={index}>{Component}</div>
					))}
				</div>

				{/* Right */}
				<div className="space-y-6">
					{widgets.rightColumn?.map((Component, index) => (
						<div key={index}>{Component}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Overview;
