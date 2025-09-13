import { NavLink } from 'react-router-dom';
import { navLinks as links } from '../../constants/navLinks';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Sidebar = () => {
	const [openSections, setOpenSections] = useState<Record<string, boolean>>(
		{}
	);

	const toggleDropDown = (label: string) => {
		setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
	};

	return (
		<aside className="w-60 h-screen bg-white border-r shadow-sm flex flex-col">
			<div className="p-4 text-xl font-bold border-b">EMR Dashboard</div>
			<nav className="flex-1 overflow-y-auto">
				<ul className="p-4 space-y-2">
					{links.map((item) => (
						<li key={item.label}>
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									`block px-4 py-2 rounded transition ${
										isActive
											? 'bg-blue-100 text-blue-700 font-semibold'
											: 'text-gray-700 hover:bg-gray-100'
									}`
								}>
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-2">
										<item.icon className="w-3 h-3" />
										<span>{item.label}</span>
									</div>
									{item.tabs && (
										<button
											onClick={() =>
												toggleDropDown(item.label)
											}
											className="px-2 py-3 text-gray-500 hover:text-gray-700 focus:outline-none">
											{openSections[item.label] ? (
												<ChevronUp className="ml-auto w-3 h-3" />
											) : (
												<ChevronDown className="ml-auto w-3 h-3" />
											)}
										</button>
									)}
								</div>
							</NavLink>

							{/* Sub-links */}
							{item.tabs && openSections[item.label] && (
								<ul className="ml-4 mt-1 space-y-1">
									{item.tabs.map((tab) => (
										<li key={tab.label}>
											<NavLink
												to={tab.path}
												className={({ isActive }) =>
													`block px-4 py-1 rounded text-sm transition ${
														isActive
															? 'bg-blue-50 text-blue-600 font-medium'
															: 'text-gray-600 hover:bg-gray-100'
													}`
												}>
												{tab.label}
											</NavLink>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
