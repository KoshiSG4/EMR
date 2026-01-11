import {
	ChartData,
	getOverviewChartData,
} from '../configs/overviewChartsConfig';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from 'recharts';
import { useEffect, useState } from 'react';

interface OverviewChartsProps {
	userRole: string;
}

const OverviewCharts = ({ userRole }: OverviewChartsProps) => {
	const [charts, setcharts] = useState<ChartData[]>([]);

	useEffect(() => {
		const loadCharts = async () => {
			const config = await getOverviewChartData();
			setcharts(config[userRole]);
		};
		loadCharts();
	}, [userRole]);

	return (
		<div className="space-y-6">
			{}
			{charts.map((chart, index) => (
				<div
					className="border-2 border-[#CEDFDF] rounded-2xl shadow-md p-4 mb-6"
					key={index}>
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
