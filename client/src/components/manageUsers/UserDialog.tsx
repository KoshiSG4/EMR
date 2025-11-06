import {
	Dialog,
	DialogContent,
	DialogClose,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { User } from '@/types/userTypes';
import UserProfImage from '../common/UserProfImage';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { FaUserCircle } from 'react-icons/fa';

interface UserDialogProps {
	open: boolean;
	onClose: () => void;
	user: User | null;
}

const UserDetailsDialog = ({ open, onClose, user }: UserDialogProps) => {
	if (!user) return null;

	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className="max-w-5xl p-6 bg-[#F5EFEB]">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
					{/* LEFT COLUMN — Profile Card */}
					<div className="col-span-1 flex justify-center">
						<Card className="w-full bg-[#022F56] shadow-sm rounded-xl flex flex-col items-center p-6">
							<div className="flex flex-col items-center mb-4">
								{user ? (
									user.profileImage ? (
										<img
											src={user.profileImage}
											alt={`${
												user.name || 'User'
											}'s profile`}
											className="w-64 h-64 rounded-full object-cover"
										/>
									) : (
										<UserProfImage
											width="w-60"
											height="h-60"
											gender={user.gender}
											role={user.role}
										/>
									)
								) : null}
							</div>
							<CardHeader className="text-center space-y-1">
								<CardTitle className="text-xl font-semibold text-[#CCDEE4]">
									{user.name}
								</CardTitle>
								<h5 className="text-base font-medium text-[#488DB4]">
									{user.role}
								</h5>
							</CardHeader>
						</Card>
					</div>

					{/* RIGHT COLUMN — User Details */}
					<div className="col-span-1 lg:col-span-2  ">
						<DialogHeader>
							<DialogTitle className="text-xl font-semibold">
								{user.name || 'User Profile'}
							</DialogTitle>
							<DialogDescription>
								Detailed profile information of {user.name}.
							</DialogDescription>
						</DialogHeader>

						{/* Two-column user info */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-sm ">
							{/* Column 1 */}
							<div className="space-y-4">
								<div>
									<p className="font-medium text-gray-600">
										Name
									</p>
									<p>{user.name || '—'}</p>
								</div>
								<div>
									<p className="font-medium text-gray-600">
										Email
									</p>
									<p>{user.email || '—'}</p>
								</div>
								<div>
									<p className="font-medium text-gray-600">
										Role
									</p>
									<p>{user.role || '—'}</p>
								</div>
								<div>
									<p className="font-medium text-gray-600">
										Date of Birth
									</p>
									<p>{user.dateOfBirth || '—'}</p>
								</div>
							</div>

							{/* Column 2 */}
							<div className="space-y-4">
								<div>
									<p className="font-medium text-gray-600">
										Gender
									</p>
									<p>{user.gender || '—'}</p>
								</div>
								<div>
									<p className="font-medium text-gray-600">
										Phone
									</p>
									<p>{user.phone || '—'}</p>
								</div>
								<div>
									<p className="font-medium text-gray-600">
										Address
									</p>
									<p>{user.address || '—'}</p>
								</div>
								<div>
									<p className="font-medium text-gray-600">
										Blood Type
									</p>
									<p>{user.bloodType || '—'}</p>
								</div>
								{user.shift && (
									<div>
										<p className="font-medium text-gray-600">
											Shift
										</p>
										<p>{user.shift}</p>
									</div>
								)}
							</div>
						</div>

						<DialogFooter className="mt-8">
							<DialogClose asChild>
								<Button
									variant="default"
									className="hover:bg-white hover:text-slate-950 hover:border-black border">
									Close
								</Button>
							</DialogClose>
						</DialogFooter>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default UserDetailsDialog;
