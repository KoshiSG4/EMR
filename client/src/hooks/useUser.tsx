import { useEffect, useState } from 'react';
import { getOwnProfile } from '../api/userApi';

export const useUser = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		getOwnProfile()
			.then(setUser)
			.catch(() => setUser(null));
	}, []);

	return { user };
};
