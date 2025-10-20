import { jwtDecode } from 'jwt-decode';

export const getUserInfoFromToken = (): {
	role: string | null;
	givenName: string | null;
	familyName: string | null;
	id: string | null;
} => {
	try {
		const cookieString = document.cookie;
		if (!cookieString) {
			return { role: null, givenName: null, id: null, familyName: null };
		}

		const token = cookieString
			.split('; ')
			.find((row) => row.startsWith('accessToken='))
			?.split('=')[1];

		if (!token)
			return { role: null, givenName: null, id: null, familyName: null };

		const decoded: any = jwtDecode(token);
		console.log(decoded);

		return {
			role: decoded.role ?? null,
			givenName: decoded.givenName ?? null,
			familyName: decoded.familyName ?? null,
			id: decoded.sub ?? null,
		};
	} catch (error) {
		console.error('Failed to decode token', error);
		return { role: null, givenName: null, id: null, familyName: null };
	}
};
