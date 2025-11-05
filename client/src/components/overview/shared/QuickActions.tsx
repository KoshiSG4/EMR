import { useEffect, useState } from 'react';
import { Button } from '../../ui/button';
import {
	getQuickActionsConfig,
	QuickAction,
} from '../configs/quickActionsConfig';
import { useNavigate } from 'react-router-dom';

interface QuickActionsProps {
	userRole: string;
}

const QuickActions = ({ userRole }: QuickActionsProps) => {
	const [quickActions, setQuickActions] = useState<QuickAction[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const loadQuickActions = async () => {
			const config = await getQuickActionsConfig();
			setQuickActions(config[userRole]);
		};
		loadQuickActions();
	}, [userRole]);

	return (
		<div className="  border-2 border-[#A9C3B6] rounded-2xl shadow-md p-4 mb-6">
			<h3 className="text-lg font-semibold mb-4 text-foreground">
				Quick Actions
			</h3>
			<div className="flex flex-wrap gap-3 ">
				{quickActions.map((action, index) => (
					<Button
						key={index}
						variant={action.variant || 'default'}
						className="gap-2 "
						onClick={() => {
							const label = action.label;
							if (action.link)
								navigate(action.link, { state: { label } });
						}}>
						{action.icon}
						{action.label}
					</Button>
				))}
			</div>
		</div>
	);
};

export default QuickActions;
