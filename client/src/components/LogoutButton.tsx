import React from 'react';
import keycloak from '../keycloak';

const LogoutButton = () => {
	const handleLogout = () => {
		keycloak.logout({ redirectUri: window.location.origin });
	};

	return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
