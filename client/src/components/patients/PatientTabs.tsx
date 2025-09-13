import { Patient } from '@/types/patientTypes';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface PatientTabsProps {
	patient: Patient;
}

const PatientTabs = ({ patient }: PatientTabsProps) => {
	const navigate = useNavigate();
	const location = useLocation();

	const isActive = (path: string) => location.pathname.includes(path);

	return (
		<div className="flex gap-4 border-b mb-2 px-2 py-1 z-50">
			{/* Profile */}
			<Button
				variant="outline"
				onClick={() => navigate(`/patients/${patient.userId}/profile`)}
				className={cn(
					'rounded-lg shadow-sm transition-colors',
					isActive('profile')
						? 'bg-sky-100 text-sky-800 border border-sky-300'
						: 'bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-800'
				)}>
				Profile
			</Button>
			<DropdownMenu>
				{/* Medical Records */}
				<DropdownMenuTrigger
					className={cn(
						'flex items-center justify-between gap-2 px-3 py-1 text-sm font-medium rounded-lg transition-colors border border-input shadow-sm focus:outline-none focus:ring-0 cursor-pointer',
						isActive('medical-records')
							? 'bg-sky-100 text-sky-800 border-sky-300 shadow-md'
							: 'bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-800'
					)}>
					<span>Medical Records</span>
					<ChevronRight className="w-4 h-4" />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="bg-white rounded-lg p-2 shadow-md min-w-[180px] focus:outline-none focus:ring-0 z-50">
					{/* Clinical */}
					<DropdownMenuSub>
						<DropdownMenuSubTrigger className="flex items-center justify-between gap-2 px-3 py-2 rounded-md hover:bg-sky-50 hover:text-sky-800 transition-colors text-sm font-medium focus:outline-none focus:ring-0">
							<span>Clinical</span>
							<ChevronRight className="w-4 h-4" />
						</DropdownMenuSubTrigger>

						<DropdownMenuSubContent className="bg-white rounded-lg p-2 shadow-md min-w-[180px] focus:outline-none focus:ring-0">
							<DropdownMenuItem
								onClick={() =>
									navigate(
										`/patients/${patient.userId}/medical-records/clinical/enter`
									)
								}
								className="px-3 py-2 rounded-md hover:bg-sky-100 hover:text-sky-800 transition-colors text-sm cursor-pointer focus:outline-none focus:ring-0">
								Enter Clinical Details
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() =>
									navigate(
										`/patients/${patient.userId}/medical-records/clinical/visits`
									)
								}
								className="px-3 py-2 rounded-md hover:bg-sky-100 hover:text-sky-800 transition-colors text-sm cursor-pointer focus:outline-none focus:ring-0">
								Past Visits
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() =>
									navigate(
										`/patients/${patient.userId}/medical-records/clinical/referrals`
									)
								}
								className="px-3 py-2 rounded-md hover:bg-sky-100 hover:text-sky-800 transition-colors text-sm cursor-pointer focus:outline-none focus:ring-0">
								Referrals
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() =>
									navigate(
										`/patients/${patient.userId}/medical-records/clinical/lab`
									)
								}
								className="px-3 py-2 rounded-md hover:bg-sky-100 hover:text-sky-800 transition-colors text-sm cursor-pointer focus:outline-none focus:ring-0">
								Lab Requests & Results
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() =>
									navigate(
										`/patients/${patient.userId}/medical-records/clinical/prescriptions`
									)
								}
								className="px-3 py-2 rounded-md hover:bg-sky-100 hover:text-sky-800 transition-colors text-sm cursor-pointer focus:outline-none focus:ring-0">
								Prescriptions
							</DropdownMenuItem>
							<DropdownMenuItem
								onClick={() =>
									navigate(
										`/patients/${patient.userId}/medical-records/clinical/medications`
									)
								}
								className="px-3 py-2 rounded-md hover:bg-sky-100 hover:text-sky-800 transition-colors text-sm cursor-pointer focus:outline-none focus:ring-0">
								Medications
							</DropdownMenuItem>
						</DropdownMenuSubContent>
					</DropdownMenuSub>

					{/* Other medical records */}
					<DropdownMenuItem
						onClick={() =>
							navigate(
								`/patients/${patient.userId}/medical-records/vitals`
							)
						}
						className="px-3 py-2 rounded-md hover:bg-sky-100 hover:text-sky-800 transition-colors text-sm cursor-pointer focus:outline-none focus:ring-0">
						Vitals
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() =>
							navigate(
								`/patients/${patient.userId}/medical-records/diagnoses`
							)
						}
						className="px-3 py-2 rounded-md hover:bg-sky-100 hover:text-sky-800 transition-colors text-sm cursor-pointer focus:outline-none focus:ring-0">
						Diagnoses
					</DropdownMenuItem>
					<DropdownMenuItem
						onClick={() =>
							navigate(
								`/patients/${patient.userId}/medical-records/history`
							)
						}
						className="px-3 py-2 rounded-md hover:bg-sky-100 hover:text-sky-800 transition-colors text-sm cursor-pointer focus:outline-none focus:ring-0">
						Medical History
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default PatientTabs;
