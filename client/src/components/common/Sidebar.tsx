import { NavigateFunction, NavLink, useNavigate } from 'react-router-dom';
import { navLinks as links } from '../../constants/navLinks';
import { useState } from 'react';
import {
	BadgeCheck,
	Bell,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	ChevronsUpDown,
	ChevronUp,
	LogOut,
	User2,
} from 'lucide-react';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarTrigger,
	useSidebar,
} from '../ui/sidebar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useAuth } from '@/context/AuthContext';
import { Collapsible, CollapsibleTrigger } from '../ui/collapsible';
import { CollapsibleContent } from '@radix-ui/react-collapsible';
import { FaUserCircle } from 'react-icons/fa';
import UserProfImage from './UserProfImage';

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
	const user = useSelector((state: RootState) => state.user.loggedInUser);
	const [openSections, setOpenSections] = useState<Record<string, boolean>>(
		{}
	);
	const { signOut } = useAuth();

	const toggleDropDown = (label: string) => {
		setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
	};
	const navigate = useNavigate();

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

	const { isMobile } = useSidebar();

	const handleLogout = async () => {
		navigate('/login');
		await signOut();
		alert('Logged out successfully');
	};

	return (
		<Sidebar
			collapsible="icon"
			{...props}
			className="w-56 h-screen bg-[#061928] mt-16 border-r shadow-sm flex flex-col ">
			<div className="flex justify-end p-3 pb-0">
				<SidebarTrigger className="text-slate-500 " />
			</div>

			<SidebarContent className="flex-1 overflow-y-auto pt-0 scrollbar-thin scrollbar-thumb-[#0d3553] scrollbar-track-[#061928]">
				<SidebarGroup>
					<SidebarMenu>
						{links.map((item) => (
							<Collapsible
								key={item.label}
								asChild
								defaultOpen={item.isActive}>
								<SidebarMenuItem className="py-2 ">
									<SidebarMenuButton
										asChild
										tooltip={item.label}
										isActive={
											location.pathname === item.path
										}
										onClick={() =>
											handleNavigate(navigate, item.path)
										}
										className="w-full h-10 hover:cursor-pointer hover:bg-[#0a2d47] hover:text-[#D6F3F6] transition-colors ">
										<div className="flex items-center gap-3 font-medium text-[#D6F3F6]">
											{item.icon && (
												<item.icon className="w-5 h-5 text-[#c0a615] " />
											)}
											<span className="truncate">
												{item.label}
											</span>
										</div>
									</SidebarMenuButton>
									{item.tabs?.length ? (
										<>
											<CollapsibleTrigger asChild>
												<SidebarMenuAction className="flex items-center justify-center h-10 mt-1 hover:bg-transparent transition-transform duration-200 data-[state=open]:rotate-90">
													<ChevronRight className=" text-[#869597] " />
												</SidebarMenuAction>
											</CollapsibleTrigger>
											<CollapsibleContent>
												<SidebarMenuSub>
													{item.tabs?.map((tab) => (
														<SidebarMenuSubItem
															key={tab.label}>
															<SidebarMenuSubButton
																asChild
																isActive={
																	location.pathname ===
																	`${item.path}/${tab.path}`
																}
																onClick={() =>
																	handleNavigate(
																		navigate,
																		item.path,
																		tab.path
																	)
																}
																className="w-full hover:cursor-pointer h-10 text-[#a5babc] hover:bg-[#0a2d47] hover:text-[#a5babc] ">
																<span>
																	{tab.label}
																</span>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
													))}
												</SidebarMenuSub>
											</CollapsibleContent>
										</>
									) : null}
								</SidebarMenuItem>
							</Collapsible>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>

			{/* Footer */}
			<SidebarFooter className="mb-16 pt-1 border-t-[0.5px] border-[#0d3553]">
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton
									size="lg"
									className="data-[state=open]:bg-[#c0a615] data-[state=open]:text-[#384142] hover:text-[#384142] ">
									{user ? (
										user?.profileImage ? (
											<img
												src={user.profileImage}
												alt={`${
													user.name || 'User'
												}'s profile`}
												className="w-8 h-8 rounded-full object-cover"
											/>
										) : (
											<UserProfImage
												width="w-8"
												height="h-8"
												gender={user.gender}
												role={user.role}
											/>
										)
									) : null}

									<div className="grid flex-1 text-[#a5babc] hover:text-[#384142] text-left text-sm leading-tight">
										<span className="truncate font-medium">
											{user?.name}
										</span>
										<span className="truncate text-xs">
											{user?.email}
										</span>
									</div>
									<ChevronsUpDown className="ml-auto size-4" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className="w-(--radix-dropdown-menu-trigger-width) ml-2 bg-[#D4DEE1] min-w-52 rounded-lg shadow-inner shadow-[#274442]/75"
								side={isMobile ? 'bottom' : 'right'}
								align="end"
								sideOffset={4}>
								<DropdownMenuLabel className="p-2 pb-1 font-normal bg-[#274442] text-[#D6F3F6] rounded-t-lg">
									<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
										{user ? (
											user.profileImage ? (
												<img
													src={user.profileImage}
													alt={`${
														user.name || 'User'
													}'s profile`}
													className="w-8 h-8 rounded-full object-cover"
												/>
											) : (
												<UserProfImage
													width="w-8"
													height="h-8"
													gender={user.gender}
													role={user.role}
												/>
											)
										) : null}
										<div className="grid flex-1 text-left text-sm leading-tight">
											<span className="truncate font-medium">
												{user?.name}
											</span>
											<span className="truncate text-xs">
												{user?.email}
											</span>
										</div>
									</div>
								</DropdownMenuLabel>
								<DropdownMenuSeparator className="border-[1px] border-white" />
								<DropdownMenuGroup>
									<DropdownMenuItem
										className="p-2 hover:cursor-pointer hover:bg-[#c1cacc]"
										onClick={() => navigate('/myAccount')}>
										<div className="flex items-center gap-3 text-sm">
											<User2 className="w-4 h-4 text-[#c0a615]" />
											<span className="truncate">
												My Account
											</span>
										</div>
									</DropdownMenuItem>
									<DropdownMenuItem className="p-2 hover:cursor-pointer hover:bg-[#c1cacc]">
										<div className="flex items-center gap-3 text-sm">
											<Bell className="w-4 h-4 text-[#c0a615]" />
											<span className="truncate">
												Notifications
											</span>
										</div>
									</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator className="border-[1px] mx-1 border-slate-100" />
								<DropdownMenuItem
									className="p-2 hover:cursor-pointer hover:bg-[#c1cacc] hover:rounded-b-lg"
									onClick={handleLogout}>
									<div className="flex items-center gap-3 text-sm">
										<LogOut className="w-4 h-4 text-[#c0a615]" />
										<span className="truncate">
											Log out
										</span>
									</div>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
};

export default AppSidebar;
