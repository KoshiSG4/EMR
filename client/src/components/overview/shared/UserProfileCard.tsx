import { useState } from 'react';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import adminMale from '../../../assets/male_admin.jpg';
import nurseMale from '../../../assets/male_nurse.jpg';
import doctorMale from '../../../assets/male_doctor.png';
import patientMale from '../../../assets/male_patient.jpg';
import adminFemale from '../../../assets/female_admin.jpg';
import nurseFemale from '../../../assets/female_nurse.jpg';
import doctorFemale from '../../../assets/female_doctor.jpg';
import patientFemale from '../../../assets/female_patient.jpg';

interface UserProfileCardProps {
	userRole: string;
}

const UserProfileCard = ({ userRole }: UserProfileCardProps) => {
	const [hover, setHover] = useState(false);
	const user = useSelector((state: RootState) => state.user.loggedInUser);

	let image = user?.profileImage;
	if (user?.role == 'ADMIN' && user.gender == 'Male') {
		image = adminMale;
	} else if (user?.role == 'ADMIN' && user.gender == 'Female') {
		image = adminFemale;
	} else if (user?.role == 'NURSE' && user.gender == 'Female') {
		image = nurseFemale;
	} else if (user?.role == 'NURSE' && user.gender == 'Male') {
		image = nurseMale;
	} else if (user?.role == 'DOCTOR' && user.gender == 'Male') {
		image = doctorMale;
	} else if (user?.role == 'DOCTOR' && user.gender == 'Female') {
		image = doctorFemale;
	} else if (user?.role == 'PATIENT' && user.gender == 'Female') {
		image = patientFemale;
	} else if (user?.role == 'PATIENT' && user.gender == 'Male') {
		image = patientMale;
	}

	return (
		<div className="bg-white shadow-md rounded-2xl max-w-md w-full border border-gray-200">
			{/* Header */}
			<div className="flex justify-between items-center p-4 mb-4 bg-[#274442] rounded-md">
				<h2 className="text-xl font-semibold  text-[#D6F3F6]">
					My Profile
				</h2>
				<button
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					className="text-[#c5ab19] hover:text-[#D6F3F6] transition-colors">
					<FaEdit size={20} />
				</button>
			</div>

			{/* Profile Image */}
			<div className="flex flex-col items-center">
				{user?.profileImage ? (
					<img
						src={image}
						alt="Profile"
						className="w-28 h-28 rounded-full object-cover shadow-md"
					/>
				) : (
					<FaUserCircle className="w-28 h-28 text-gray-400" />
				)}

				<h3 className="text-lg font-medium text-[#05668d] mt-3">
					{user?.name}
				</h3>
			</div>

			{/* Details */}
			<div className="mt-6 mb-2 text-gray-700">
				<div className="flex items-stretch text-[#508991] text-sm divide-x divide-gray-300 border-gray-300 rounded-lg">
					<div className="flex-1 px-4 py-3 text-center flex flex-col justify-center">
						<span className="font-semibold block">Shift</span>
						<span className="block">{user?.shift}</span>
					</div>

					<div className="flex-1 px-4 py-3 text-center flex flex-col justify-center">
						<span className="font-semibold block">
							Date of Birth
						</span>
						<span className="block">{user?.dateOfBirth}</span>
					</div>

					<div className="flex-1 px-4 py-3 text-center flex flex-col justify-center">
						<span className="font-semibold block">Blood Type</span>
						<span className="block">{user?.bloodType}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfileCard;
