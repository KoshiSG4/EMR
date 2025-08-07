import { getUserInfoFromToken } from '../../../utils/jwtUtils';
import { dashBoardWidgetsbyRole } from '../configs/dashboardWidgets';

const Overview = () => {
	type UserRole = 'admin' | 'doctor' | 'nurse' | 'patient';

	const role = getUserInfoFromToken().role?.toLocaleLowerCase();
	const userRole: UserRole = (role ?? 'patient') as UserRole;

	const { cards, leftColumn, rightColumn } =
		dashBoardWidgetsbyRole[userRole] || {};

	return (
		<div className="p-6 space-y-6">
			{cards && cards}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Left */}
				<div className="col-span-1 lg:col-span-2 space-y-6">
					{leftColumn.map((Component, index) => (
						<div key={index}>{Component}</div>
					))}
				</div>

				{/* Right */}
				<div className="space-y-6">
					{rightColumn?.map((Component, index) => (
						<div key={index}>{Component}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Overview;
