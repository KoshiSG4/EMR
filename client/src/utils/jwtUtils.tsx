import { jwtDecode } from 'jwt-decode';
import keycloak from '../keycloak';

export const getUserInfoFromToken = (): {
	role: string | null;
	givenName: string | null;
	familyName: string | null;
	id: string | null;
} => {
	try {
		const token = keycloak.token;
		if (!token)
			return { role: null, givenName: null, id: null, familyName: null };

		const decoded: any = jwtDecode(token);
		// console.log(decoded);

		const role = decoded?.realm_access?.roles?.[0] ?? null;
		const givenName = decoded?.given_name ?? null;
		const familyName = decoded?.family_name ?? null;
		const id = decoded?.sub ?? null;

		return { role, givenName, id, familyName };
	} catch (error) {
		console.error('Failed to decode token', error);
		return { role: null, givenName: null, id: null, familyName: null };
	}
};
