import React, { useEffect, useRef, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import UserProfImage from './UserProfImage';
import { BadgeCheck, LogOut, User2 } from 'lucide-react';

const TopNavBar = () => {
	const { user } = useAuth();
	const [menuOpen, setMenuOpen] = useState(false);
	const [notificationsMenuOpen, setNotificationsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const notificationRef = useRef<HTMLDivElement>(null);

	const [notifications] = useState<string[]>([
		'New Patient Registered',
		'Doctor added a note',
		'Medical Record Updated',
	]);

	const toggleMenu = () => setMenuOpen((prev) => !prev);
	const toggleNotifications = () => setNotificationsMenuOpen((prev) => !prev);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			if (menuRef.current && !menuRef.current.contains(target)) {
				setMenuOpen(false);
			}
			if (
				notificationRef.current &&
				!notificationRef.current.contains(target)
			) {
				setNotificationsMenuOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full z-50 bg-[linear-gradient(135deg,#172A3A_0%,#0c3736_45%,#004346_100%)] border-b-2 border-[#508991] shadow-md">
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* App Name */}
					<div className="flex-shrink-0 text-2xl font-bold text-[#D6F3F4] tracking-wide drop-shadow-sm">
						EMR System
					</div>

					{/* Right Side */}
					<div className="flex items-center space-x-5">
						{/* Notifications */}
						<div className="relative" ref={notificationRef}>
							<button
								onClick={toggleNotifications}
								className="relative p-2 rounded-full bg-[#004346] hover:bg-[#006166]  shadow-sm transition-transform duration-200 transform hover:-translate-y-0.5">
								<FaBell className="h-6 w-6 text-[#c0a615] hover:text-[#e9c913]" />
								{notifications.length > 0 && (
									<span
										className="absolute -top-1 -right-1 inline-flex items-center justify-center
									px-1.5 py-0.5 text-xs font-bold text-white bg-[#74B3CE] rounded-full shadow-sm">
										{notifications.length}
									</span>
								)}
							</button>

							{notificationsMenuOpen && (
								<div className="absolute right-0 mt-3 w-60 bg-[#d7e1e0] border border-[#b7d6da] rounded-xl shadow-lg z-10">
									{notifications.length > 0 ? (
										notifications.map((notification) => (
											<div
												key={notification}
												className="px-4 py-2 text-sm text-[#254e70] font-medium border-b border-[#b3c5cc] hover:bg-[#eef4f4] transition">
												{notification}
											</div>
										))
									) : (
										<div className="px-4 py-3 text-sm text-[#D6F3F4] text-center">
											No notifications
										</div>
									)}
								</div>
							)}
						</div>

						{/* User Menu */}
						<div className="relative" ref={menuRef}>
							<button
								onMouseEnter={toggleMenu}
								onMouseLeave={toggleMenu}
								className="flex items-center rounded-full bg-[#508991]/50 hover:bg-[#74B3CE]  hover:text-[#172A3A] shadow-sm transition-transform duration-200 transform hover:-translate-y-0.5">
								<div className="w-10 h-10 rounded-full flex items-center justify-center text-[#D6F3F4] hover:text-[#172A3A] font-extrabold shadow-inner">
									{user?.profileImage ? (
										<UserProfImage
											width="w-10"
											height="h-10"
											gender={user.gender}
											role={user.role}
										/>
									) : (
										user?.name.charAt(0).toUpperCase()
									)}
								</div>
							</button>

							{menuOpen && (
								<div className="absolute right-0 mt-3 w-52 bg-[#D4DEE1] border border-[#b7d6da] rounded-xl shadow-lg z-10">
									<div className="flex items-center gap-3 px-4 py-2 text-sm text-[#254e70] font-semibold border-b border-[#b3c5cc]">
										<User2 className="w-4 h-4 text-[#d1b515]" />

										<div className="grid flex-1 text-left text-sm leading-tight">
											<span className="truncate font-medium">
												{user?.name}
											</span>
											<span className="truncate text-xs">
												{user?.email}
											</span>
										</div>
									</div>

									<div className="flex items-center gap-3 px-4 py-2 text-sm text-[#307593] border-b border-[#b3c5cc]">
										<BadgeCheck className="w-4 h-4 text-[#d1b515]" />
										<span>Role: {user?.role || '-'}</span>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNavBar;
