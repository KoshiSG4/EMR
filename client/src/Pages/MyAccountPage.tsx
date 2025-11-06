import { Label } from '@/components/ui/label';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../components/ui/card';
import { FaUserCircle } from 'react-icons/fa';
import { User } from '@/types/userTypes';
import UserProfImage from '../components/common/UserProfImage';

interface MyAccountProps {
	selectedUser: User;
}

const MyAccount = ({ selectedUser }: MyAccountProps) => {
	const calculateAge = (dob: Date) => {
		const today = new Date();
		let age = today.getFullYear() - dob.getFullYear();
		const m = today.getMonth() - dob.getMonth();

		if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
			age--;
		}
		return age;
	};

	return (
		<div className="p-6 space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Left */}
				<div className="col-span-1 lg:col-span-1 space-y-6">
					<Card className="w-full h-full bg-[#022F56] max-w-3xl mx-auto shadow-sm rounded-xl">
						<CardHeader className="p-4">
							<CardTitle className="mt-6 text-xl text-center font-semibold text-[#CCDEE4]">
								{selectedUser?.name}
							</CardTitle>
						</CardHeader>

						<CardContent className="p-6">
							<div className="flex flex-col items-center mb-5">
								{selectedUser?.profileImage ? (
									<img
										src={selectedUser.profileImage}
										alt={`${
											selectedUser.name || 'User'
										}'s profile`}
										className="w-64 h-64 rounded-full object-cover"
									/>
								) : (
									<UserProfImage
										width="w-64"
										height="h-64"
										gender={selectedUser.gender}
										role={selectedUser.role}
									/>
								)}
							</div>
							<h5 className="text-base text-center font-medium text-[#488DB4]">
								{selectedUser.role}
							</h5>
						</CardContent>
					</Card>
				</div>

				{/* Right */}
				<div className="col-span-1 lg:col-span-2 space-y-6">
					<Card className="border-[#85c4e4] w-full h-full max-w-3xl mx-auto shadow-sm rounded-xl">
						<CardHeader className="ml-4 p-4">
							<CardTitle className="mt-6 text-xl font-semibold text-[#022F56]">
								Profile Details
							</CardTitle>
						</CardHeader>

						<CardContent className="ml-4 p-4">
							{/* Profile Details */}
							<div className="grid grid-cols-2 gap-6 text-sm mb-4">
								<div>
									<Label className="text-xs text-gray-400">
										Name
									</Label>
									<p className="text-gray-900 font-serif">
										{selectedUser.name}
									</p>
								</div>
								<div>
									<Label className="text-xs text-gray-400">
										Email
									</Label>
									<p className="text-gray-900 font-serif">
										{selectedUser.email}
									</p>
								</div>
								<div>
									<Label className="text-xs text-gray-400">
										Phone
									</Label>
									<p className="text-gray-900 font-serif">
										{selectedUser.phone || '—'}
									</p>
								</div>
								<div>
									<Label className="text-xs text-gray-400">
										Address
									</Label>
									<p className="text-gray-900 font-serif">
										{selectedUser.address || '—'}
									</p>
								</div>
								<div>
									<Label className="text-xs text-gray-400">
										Date of Birth
									</Label>
									<p className="text-gray-900 font-serif">
										{selectedUser.dateOfBirth || '—'}
									</p>
								</div>
								<div>
									<Label className="text-xs text-gray-400">
										Age
									</Label>
									<p className="text-gray-900 font-serif">
										{calculateAge(
											new Date(selectedUser.dateOfBirth)
										) || '—'}
									</p>
								</div>
								<div>
									<Label className="text-xs text-gray-400">
										Blood Type
									</Label>
									<p className="text-gray-900 font-serif">
										{selectedUser.bloodType || '—'}
									</p>
								</div>
								<div>
									<Label className="text-xs text-gray-400">
										Gender
									</Label>
									<p className="text-gray-900 font-serif">
										{selectedUser.gender || '—'}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default MyAccount;
