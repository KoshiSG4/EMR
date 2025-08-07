import { getUserInfoFromToken } from '../../../utils/jwtUtils';
import { Button } from '../../ui/button';
import { QuickActionsConfig } from '../configs/quickActionsConfig';

const QuickActions = () => {
	const userRole = (getUserInfoFromToken().role?.toLowerCase() ??
		'patient') as keyof QuickActionsConfig;

	const quickActions = QuickActionsConfig[userRole];

	return (
		<div className="bg-white dark:bg-muted rounded-2xl shadow-md p-4 mb-6">
			<h3 className="text-lg font-semibold mb-4 text-foreground">
				Quick Actions
			</h3>
			<div className="flex flex-wrap gap-3">
				{quickActions.map((action, index) => (
					<Button
						key={index}
						variant={action.variant || 'default'}
						className="gap-2"
						onClick={action.onClick}>
						{action.icon}
						{action.label}
					</Button>
				))}
			</div>
		</div>
	);
};

export default QuickActions;
