import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../api/userApi';

const DoctorProfile = () => {
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		getUserProfile()
			.then(setUser)
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			DoctorProfile{' '}
			{user ? <div>Hello, {user.email}</div> : <div>Loading...</div>}
		</div>
	);
};

export default DoctorProfile;
