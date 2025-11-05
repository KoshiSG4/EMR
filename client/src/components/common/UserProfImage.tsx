import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';
import adminMale from '../../assets/male_admin.jpg';
import nurseMale from '../../assets/male_nurse.jpg';
import doctorMale from '../../assets/male_doctor.png';
import patientMale from '../../assets/male_patient.jpg';
import adminFemale from '../../assets/female_admin.jpg';
import nurseFemale from '../../assets/female_nurse.jpg';
import doctorFemale from '../../assets/female_doctor.jpg';
import patientFemale from '../../assets/female_patient.jpg';

interface UserProfImageProps {
	width: string;
	height: string;
	role: string;
	gender: string;
}

const UserProfImage = ({ width, height, role, gender }: UserProfImageProps) => {
	// const user = useSelector((state: RootState) => state.user.loggedInUser);
	let image;
	if (role == 'ADMIN' && gender == 'Male') {
		image = adminMale;
	} else if (role == 'ADMIN' && gender == 'Female') {
		image = adminFemale;
	} else if (role == 'NURSE' && gender == 'Female') {
		image = nurseFemale;
	} else if (role == 'NURSE' && gender == 'Male') {
		image = nurseMale;
	} else if (role == 'DOCTOR' && gender == 'Male') {
		image = doctorMale;
	} else if (role == 'DOCTOR' && gender == 'Female') {
		image = doctorFemale;
	} else if (role == 'PATIENT' && gender == 'Female') {
		image = patientFemale;
	} else if (role == 'PATIENT' && gender == 'Male') {
		image = patientMale;
	}
	return (
		<img
			src={image}
			alt="Profile"
			className={`${width} ${height} rounded-full object-cover shadow-md`}
		/>
	);
};

export default UserProfImage;
