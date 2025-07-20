import { jwtDecode } from 'jwt-decode';
import keycloak from '../keycloak';

export const getRoleFromToken = (): string | null => {
	try {
		const token = keycloak.token;
		if (!token) return null;

		const decoded: any = jwtDecode(token);
		return decoded?.realm_access?.roles?.[0] ?? null;
	} catch (error) {
		console.error('Failed to decode token', error);
		return null;
	}
};
