import { getUserInfoFromToken } from '../../../utils/jwtUtils';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { SummaryStatsConfig } from '../configs/summaryStatsConfig';

const OverviewSummaryCards = () => {
	const userRole = (getUserInfoFromToken().role?.toLowerCase() ??
		'patient') as keyof SummaryStatsConfig;

	const summaryCards = SummaryStatsConfig[userRole];

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
			{summaryCards.map((card) => {
				const Icon = card.icon;
				return (
					<Card
						key={card.label}
						className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium text-muted-foreground">
								{card.label}
							</CardTitle>
							<Icon className="h-5 w-5 text-primary" />
						</CardHeader>
						<CardContent>
							<p className="text-2xl font-bold text-foreground">
								{card.value}
							</p>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};

export default OverviewSummaryCards;
