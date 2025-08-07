import { jwtDecode } from 'jwt-decode';
import keycloak from '../keycloak';

export const getUserInfoFromToken = (): {
	role: string | null;
	givenName: string | null;
} => {
	try {
		const token = keycloak.token;
		if (!token) return { role: null, givenName: null };

		const decoded: any = jwtDecode(token);

		const role = decoded?.realm_access?.roles?.[0] ?? null;
		const givenName = decoded?.given_name ?? null;

		return { role, givenName };
	} catch (error) {
		console.error('Failed to decode token', error);
		return { role: null, givenName: null };
	}
};
