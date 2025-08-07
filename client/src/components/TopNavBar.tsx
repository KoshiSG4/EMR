import React, { useEffect, useRef, useState } from 'react';
import keycloak from '../keycloak';
import { getUserInfoFromToken } from '../utils/jwtUtils';
import { FaBell } from 'react-icons/fa';

const TopNavBar = () => {
	const { givenName: userName, role: userRole } = getUserInfoFromToken();
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

	const handleLogout = () => {
		keycloak.logout({ redirectUri: window.location.origin });
	};

	return (
		<div className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
			<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* App Name */}
					<div className="flex-shrink-0 text-xl font-bold text-blue-800">
						EMR System
					</div>

					{/* Right Side */}
					<div className="flex items-center space-x-4">
						{/* Notifications */}
						<div className="relative" ref={notificationRef}>
							<button
								onClick={toggleNotifications}
								className="flex items-center space-x-2 focus:outline-none">
								<FaBell className="h-6 w-6 text-gray-600" />
								{notifications.length > 0 && (
									<span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
										{notifications.length}
									</span>
								)}
							</button>
							{notificationsMenuOpen && (
								<div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
									{notifications.map((notification) => (
										<div
											key={notification}
											className="px-4 py-2 text-sm text-gray-700 font-medium border-b border-gray-100">
											{notification}
										</div>
									))}
								</div>
							)}
						</div>

						{/* User */}
						<div className="relative" ref={menuRef}>
							<button
								onClick={toggleMenu}
								className="flex items-center space-x-2 focus:outline-none">
								<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
									{userName?.charAt(0)}
								</div>
							</button>
							{menuOpen && (
								<div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
									<div className="px-4 py-2 text-sm text-gray-700 font-medium border-b border-gray-100">
										{userName || 'Loading..'}
									</div>
									<div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
										Role: {userRole || '-'}
									</div>
									<button
										onClick={handleLogout}
										className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
										Logout
									</button>
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
