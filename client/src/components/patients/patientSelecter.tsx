import { Patient } from '@/types/patientTypes';
import { User } from '@/types/userTypes';
import { createSelector } from '@reduxjs/toolkit';

export const selectPatientsWithUserData = createSelector(
	[(state) => state.patients.patients, (state) => state.user.users],
	(patients, users) => {
		return patients.map((patient: Patient) => {
			const matchingUser = users.find(
				(u: User) => u.id === patient.userId
			);
			return {
				...patient,
				...matchingUser,
			};
		});
	}
);
