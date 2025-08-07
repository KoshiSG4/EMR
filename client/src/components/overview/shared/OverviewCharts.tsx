import {
	OverviewChartConfig,
	OverviewChartData,
} from '../configs/overviewChartsConfig';
import { getUserInfoFromToken } from '../../../utils/jwtUtils';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from 'recharts';

const OverviewCharts = () => {
	const userRole = (getUserInfoFromToken().role?.toLowerCase() ??
		'patient') as keyof OverviewChartConfig;

	const charts = OverviewChartData[userRole];
	return (
		<div className="space-y-6">
			{}
			{charts.map((chart, index) => (
				<div className="bg-white rounded-2xl shadow-md p-4 mb-6">
					<h3 className="text-lg font-semibold mb-2">
						{chart.title}
					</h3>
					<ResponsiveContainer width="100%" height={240}>
						<LineChart data={chart.data}>
							<XAxis dataKey="date" />
							<YAxis />
							<Tooltip />
							<Legend />
							{chart.lines.map(({ key, color, label }) => (
								<Line
									key={key}
									type="monotone"
									dataKey={key}
									stroke={color}
									strokeWidth={2}
									name={label || key}
								/>
							))}
						</LineChart>
					</ResponsiveContainer>
				</div>
			))}
		</div>
	);
};

export default OverviewCharts;
