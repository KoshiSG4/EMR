import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import {
	getSummaryStatsConfig,
	SummaryStat,
} from '../configs/summaryStatsConfig';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { getAllUsers, setUsers } from '@/store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

interface OverviewSummaryCardsProps {
	userRole: string;
}

const OverviewSummaryCards = ({ userRole }: OverviewSummaryCardsProps) => {
	const [stats, setStats] = useState<SummaryStat[]>([]);
	const { loading, users } = useSelector((state: RootState) => state.user);

	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	useEffect(() => {
		if (users.length <= 0) {
			if (userRole === 'admin') {
				dispatch(getAllUsers());
				dispatch(setUsers(users));
			}
		}
	}, [userRole, dispatch]);

	useEffect(() => {
		if (!users) return;

		const config = getSummaryStatsConfig(userRole, {
			doctors: users?.filter((u) => u.role === 'DOCTOR').length || 0,
			patients: users?.filter((u) => u.role === 'PATIENT').length || 0,
			nurses: users?.filter((u) => u.role === 'NURSE').length || 0,
			appointments: 16,
			prescriptions: 78,
		});

		setStats(config);
	}, [userRole, users]);

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
			{stats.map((stat) => {
				const Icon = stat.icon;
				return (
					<Card
						key={stat.label}
						onClick={() => {
							if (stat.link) navigate(stat.link);
						}}
						className="rounded-2xl shadow-md bg-[#274442] hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer">
						<CardHeader className="pb-2 p-4">
							<div className="flex flex-col gap-2">
								<Icon className="h-5 w-5 text-[#F4B840] flex-shrink-0" />
								<CardTitle className="text-sm font-medium text-[#D6F3F6] break-words">
									{stat.label}
								</CardTitle>
							</div>
						</CardHeader>

						<CardContent className="pl-4">
							<p className="text-2xl font-bold text-[#D6F3F6]">
								{stat.value}
							</p>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};

export default OverviewSummaryCards;
