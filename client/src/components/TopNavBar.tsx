import React from 'react';
import { FaBell, FaSearch, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import keycloak from '../keycloak';

const TopNavBar = () => {
	const handleLogout = () => {
		keycloak.logout({ redirectUri: window.location.origin });
	};

	return (
		<header className="bg-white shadow-sm px-6 py-3 flex justify-between items-center">
			<div className="text-xl font-bold text-blue-600">EMR System</div>

			{/* Search Bar */}
			<div className="relative w-full max-w-md mx-4 hidden md:block">
				<input
					type="text"
					placeholder="Search"
					className="w-full border rounded-xl px-4 py-2 pl-10 focus:outline-none focus:ring focus:border-blue-300"
				/>
				<FaSearch className="absolute left-3 top-3 text-gray-400" />
			</div>

			{/* Icons */}
			<div className="flex items-center space-x-4">
				<button className="text-gray-600 hover:text-blue-600">
					<FaBell size={20} />
				</button>

				<button className="text-gray-600 hover:text-blue-600">
					<FaUserCircle size={24} />
				</button>

				<button
					className="text-red-600 hover:text-red-800 flex items-center space-x-1 font-semibold"
					onClick={handleLogout}>
					<FaSignOutAlt />
					<span className="hidden sm:inline">Logout</span>
				</button>
			</div>
		</header>
	);
};

export default TopNavBar;
