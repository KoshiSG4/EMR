import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavigateFunction } from 'react-router-dom';
import DashboardLayout from '../components/common/DashboardLayout';
import Forbidden from '../components/common/Forbidden';
import axios from 'axios';
import { navLinks } from '../constants/navLinks';
import Overview from '../components/overview/shared/Overview';
import AppointmentsPage from './AppointmentsPage';
import MedicationsPage from './MedicationsPage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import {
	clearPanels,
	clearSelectedPatient,
	closePatientTab,
	resetPatient,
	setActivePatientTab,
	setSelectedPatient,
} from '../store/slices/patientSlice';
import { cn } from '@/lib/utils';
import {
	DropdownMenu,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import PatientsPage from '@/Pages/PatientsPage';
import SelectedPatientContent from '@/components/patients/SelectedPatientContent';
import LabPage from '@/Pages/LabPage';
import MyAccount from '@/Pages/MyAccountPage';
import ManageUsersPage from './ManageUsersPage';
import { LoaderIcon } from 'lucide-react';

interface NavTab {
	label: string;
	path: string;
	roles?: string[];
	tabs?: NavTab[];
}

const Dashboard = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const { section, tab, subTab, innerTab, innerSubTab } = useParams();

	const [tabContent, setTabContent] = useState<React.ReactNode>(null);
	const [isForbidden, setIsForbidden] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const selectedPatient = useSelector(
		(state: RootState) => state.patients.selectedPatient
	);
	const { openTabs, activeTabId } = useSelector(
		(state: RootState) => state.patients
	);

	const user = useSelector((state: RootState) => state.user.loggedInUser);
	const userRole = user?.role?.toLowerCase();
	if (!userRole) {
		return <div>Unauthorized Access</div>;
	}

	const filterTabs = (tabs: NavTab[], userRole: string): NavTab[] =>
		tabs
			.filter((t) => !t.roles || t.roles.includes(userRole))
			.map((t) => ({
				...t,
				tabs: t.tabs ? filterTabs(t.tabs, userRole) : undefined,
			}));

	const currentSection = navLinks.find((s) => s.path === `/${section}`);
	let allowedTabs: NavTab[] = currentSection?.tabs
		? filterTabs(currentSection.tabs, userRole)
		: [];

	let currentTab = allowedTabs.find((t) => t.path === tab);
	let currentSubTab = currentTab?.tabs?.find((st) => st.path === subTab);
	let currentInnerTab = currentSubTab?.tabs?.find(
		(st) => st.path === innerTab
	);
	let currentInnerSubTab = currentInnerTab?.tabs?.find(
		(st) => st.path === innerSubTab
	);

	useEffect(() => {
		if (!user) return;

		const fetchTabData = async () => {
			setIsLoading(true);
			setIsForbidden(false);
			setTabContent(null);

			try {
				const response = await axios.get(
					`/api/${userRole}/${section}/${tab || 'default'}`
				);

				if (section === 'overview' || section === undefined) {
					setTabContent(<Overview userRole={userRole} />);
				} else if (section === 'appointments') {
					setTabContent(
						<AppointmentsPage activeTab={currentTab?.label} />
					);
				} else if (section === 'myAccount') {
					setTabContent(<MyAccount selectedUser={user} />);
				} else if (section === 'patients') {
					if (tab === 'search' || !selectedPatient) {
						setTabContent(<PatientsPage />);
					} else {
						setTabContent(
							<SelectedPatientContent patient={selectedPatient} />
						);
					}
				} else if (section === 'medications') {
					setTabContent(<MedicationsPage />);
				} else if (section === 'laboratory') {
					setTabContent(<LabPage />);
				} else if (section === 'manage-users') {
					setTabContent(<ManageUsersPage />);
				} else {
					setTabContent(
						<pre className="text-sm text-gray-700 whitespace-pre-wrap break-all ">
							{JSON.stringify(response.data, null, 2)}
						</pre>
					);
				}
			} catch (err: any) {
				if (err.response?.status === 403) {
					setIsForbidden(true);
				} else {
					setTabContent('Error loading content');
				}
			} finally {
				setIsLoading(false);
			}
		};

		fetchTabData();
	}, [section, tab, subTab, innerTab, innerSubTab, selectedPatient]);

	const isActive = (path: string) => location.pathname.includes(path);

	const handleCloseTab = (ptId: string, patientId: string) => {
		dispatch(closePatientTab(ptId));
		dispatch(clearPanels({ patientId }));

		if (activeTabId === ptId) {
			const remainingTabs = openTabs.filter((t) => t.id !== ptId);
			if (remainingTabs.length > 0) {
				navigate(
					`/patients/${
						remainingTabs[remainingTabs.length - 1].id
					}/profile`
				);
				dispatch(
					setActivePatientTab(
						remainingTabs[remainingTabs.length - 1].id
					)
				);
				dispatch(
					setSelectedPatient(
						remainingTabs[remainingTabs.length - 1].patient
					)
				);
			} else if (remainingTabs.length <= 0) {
				navigate(`/patients`);
				dispatch(clearSelectedPatient());
				setTabContent(<PatientsPage />);
			}
		}
	};

	const handleNavigate = (
		navigate: NavigateFunction,
		...segments: string[]
	) => {
		const cleaned = segments
			.filter(Boolean)
			.map((s) => s.replace(/^\/+|\/+$/g, ''))
			.join('/');

		navigate(`/${cleaned}`, { replace: true });
	};

	return (
		<DashboardLayout>
			<div className="mb-4 ">
				<h1 className="text-2xl font-semibold capitalize">
					{currentSection?.label ?? 'overview'}
				</h1>
			</div>

			{allowedTabs.length > 0 && section && (
				<div className="flex gap-4 border-b mb-6 px-2 py-1 ">
					{allowedTabs.map((ct) => {
						const hasSubTabs = ct.tabs && ct.tabs.length > 0;

						return (
							<DropdownMenu key={ct.path}>
								<DropdownMenuTrigger asChild>
									<Button
										variant="outline"
										onClick={() =>
											!hasSubTabs &&
											handleNavigate(
												navigate,
												section,
												ct.path
											)
										}
										className={cn(
											'rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-0',
											!hasSubTabs ? 'cursor-pointer' : '',
											isActive(ct.path)
												? 'bg-[#022F56] text-[#d1b515] border hover:bg-[#022F56] hover:text-[#d1b515]'
												: 'hover:bg-[#022F56] hover:text-[#D6F3F6] border border-[#162726]  text-[#274442]'
										)}>
										{ct.label}
									</Button>
								</DropdownMenuTrigger>

								{hasSubTabs && (
									<DropdownMenuContent className="z-50 bg-white shadow-lg rounded-lg p-2 min-w-[200px] focus:outline-none focus:ring-0">
										{ct.tabs?.map((st) =>
											st.tabs && st.tabs.length > 0 ? (
												<DropdownMenuSub key={st.path}>
													<DropdownMenuSubTrigger
														className={cn(
															'px-3 py-2 rounded-md transition-colors text-sm font-medium focus:outline-none focus:ring-0',
															isActive(st.path)
																? 'bg-sky-100 text-sky-800'
																: 'hover:bg-sky-50 hover:text-sky-800'
														)}>
														{st.label}
													</DropdownMenuSubTrigger>
													<DropdownMenuSubContent className="bg-white rounded-lg p-2 shadow-md min-w-[180px] focus:outline-none focus:ring-0">
														{st.tabs.map((it) =>
															it.tabs &&
															it.tabs.length >
																0 ? (
																<DropdownMenuSub
																	key={
																		it.path
																	}>
																	<DropdownMenuSubTrigger
																		className={cn(
																			'px-3 py-2 rounded-md transition-colors text-sm font-medium focus:outline-none focus:ring-0',
																			isActive(
																				it.path
																			)
																				? 'bg-sky-100 text-sky-800'
																				: 'hover:bg-sky-50 hover:text-sky-800'
																		)}>
																		{
																			it.label
																		}
																	</DropdownMenuSubTrigger>
																	<DropdownMenuSubContent className="bg-white rounded-lg p-2 shadow-md min-w-[160px] focus:outline-none focus:ring-0">
																		{it.tabs.map(
																			(
																				inner
																			) => (
																				<DropdownMenuItem
																					key={
																						inner.path
																					}
																					onClick={() =>
																						handleNavigate(
																							navigate,
																							section,
																							ct.path,
																							st.path,
																							it.path,
																							inner.path
																						)
																					}
																					className={cn(
																						'px-3 py-2 rounded-md transition-colors text-sm cursor-pointer focus:outline-none focus:ring-0',
																						isActive(
																							inner.path
																						)
																							? 'bg-sky-100 text-sky-800'
																							: 'hover:bg-sky-100 hover:text-sky-800'
																					)}>
																					{
																						inner.label
																					}
																				</DropdownMenuItem>
																			)
																		)}
																	</DropdownMenuSubContent>
																</DropdownMenuSub>
															) : (
																<DropdownMenuItem
																	key={
																		it.path
																	}
																	onClick={() =>
																		handleNavigate(
																			navigate,
																			section,
																			ct.path,
																			st.path,
																			it.path
																		)
																	}
																	className={cn(
																		'px-3 py-2 rounded-md transition-colors text-sm cursor-pointer focus:outline-none focus:ring-0',
																		isActive(
																			it.path
																		)
																			? 'bg-sky-100 text-sky-800'
																			: 'hover:bg-sky-100 hover:text-sky-800'
																	)}>
																	{it.label}
																</DropdownMenuItem>
															)
														)}
													</DropdownMenuSubContent>
												</DropdownMenuSub>
											) : (
												<DropdownMenuItem
													key={st.path}
													onClick={() =>
														handleNavigate(
															navigate,
															section,
															ct.path,
															st.path
														)
													}
													className={cn(
														'px-3 py-2 rounded-md transition-colors text-sm cursor-pointer focus:outline-none focus:ring-0',
														isActive(st.path)
															? 'bg-sky-100 text-sky-800'
															: 'hover:bg-sky-100 hover:text-sky-800'
													)}>
													{st.label}
												</DropdownMenuItem>
											)
										)}
									</DropdownMenuContent>
								)}
							</DropdownMenu>
						);
					})}

					{/* Patient tabs bar */}
					{section === 'patients' && openTabs.length > 0 && (
						<div className="flex">
							{openTabs.map((pt) => (
								<div
									key={pt.id}
									className={cn(
										'flex items-center gap-2 px-3 py-1 rounded-t-lg cursor-pointer transition-colors',
										activeTabId === pt.id
											? 'bg-purple-100 text-purple-800 border border-b-0 border-purple-300'
											: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
									)}
									onClick={() => {
										dispatch(setActivePatientTab(pt.id));
										dispatch(
											setSelectedPatient(pt.patient)
										);
										handleNavigate(
											navigate,
											'patients',
											pt.id,
											'profile'
										);
									}}>
									<span className="text-sm font-medium">
										{pt.patient.fullName} (
										{pt.patient.user.gender})
									</span>
									<button
										onClick={(e) => {
											e.stopPropagation();
											handleCloseTab(
												pt.id,
												pt.patient.userId
											);
										}}
										className="ml-2 text-gray-500 hover:text-red-500">
										×
									</button>
								</div>
							))}
						</div>
					)}
				</div>
			)}

			{/* Tab Content */}
			<div
				className={cn(
					'flex-1 p-4 border rounded shadow bg-white overflow-x-auto overflow-y-auto scrollbar-thin min-h-[200px] max-w-full ',
					section === 'overview' || section === undefined
						? 'h-[95%] '
						: 'h-[88%] '
				)}>
				{isLoading ? (
					<div className="flex min-h-screen items-center justify-center bg-purple-50/30">
						<div className="text-purple-600 pr-3">Loading...</div>
						<LoaderIcon
							role="status"
							aria-label="Loading"
							className={cn('size-4 animate-spin')}
						/>
					</div>
				) : isForbidden ? (
					<Forbidden />
				) : (
					tabContent
				)}
			</div>
		</DashboardLayout>
	);
};

export default Dashboard;
