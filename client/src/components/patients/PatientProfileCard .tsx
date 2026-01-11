import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from '@/components/ui/select';
import { useEffect, useRef, useState } from 'react';
import { Patient } from '@/types/patientTypes';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import {
	closePatientTab,
	deactivatePatient,
	deactivatePatientFromDB,
} from '@/store/slices/patientSlice';
import { useNavigate } from 'react-router-dom';
import { Check, Edit3, X } from 'lucide-react';
import { getAllDoctors } from '@/store/slices/doctorsSlice';
import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import { PopoverContent } from '../ui/popover';
import { FaUserCircle } from 'react-icons/fa';
import patientFemale from '../../assets/female_patient.jpg';
import patientMale from '../../assets/male_patient.jpg';
import { User } from '@/types/userTypes';

interface EditPatientInfoDialogProps {
	open: boolean;
	selectedPatient: Patient | null;
	onSave: (updated: Patient) => void;
}

const PatientProfileCard = ({
	open,
	selectedPatient,
	onSave,
}: EditPatientInfoDialogProps) => {
	if (!selectedPatient) return null;

	const [formData, setFormData] = useState<Patient | null>(null);
	const [editMode, setEditMode] = useState<Record<string, boolean>>({});
	const [showDoctorSuggestions, setShowDoctorSuggestions] = useState(false);
	const { activeTabId, selectedPatientWithAllData } = useSelector(
		(state: RootState) => state.patients
	);
	const doctors = useSelector((state: RootState) => state.doctors.doctors);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const dropDownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (selectedPatient) {
			dispatch(getAllDoctors({ doctors: doctors }));
			setFormData(selectedPatient);
		}
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropDownRef.current &&
				!dropDownRef.current.contains(event.target as Node)
			) {
				setShowDoctorSuggestions(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [selectedPatient]);

	if (!formData) return null;

	const toggleEdit = (field: string) => {
		setEditMode((prev) => {
			const isCurrentlyEditing = prev[field];

			if (isCurrentlyEditing && selectedPatient) {
				setFormData((prevForm) => {
					if (!prevForm) return prevForm;

					if (field === 'doctor') {
						return {
							...prevForm,
							doctors: selectedPatient.doctors,
						};
					}
					if (field === 'records') {
						return {
							...prevForm,
							records: selectedPatient.records,
						};
					}

					if (field === 'name') {
						return {
							...prevForm,
							fullName: selectedPatient.fullName,
						};
					}
					if (field === 'email') {
						return {
							...prevForm,
							email: selectedPatient.user.email,
						};
					}
					if (field === 'bloodType') {
						return {
							...prevForm,
							bloodType: selectedPatient.user.bloodType,
						};
					}

					return {
						...prevForm,
						[field]: (selectedPatient as any)[field],
					};
				});
			}
			return { ...prev, [field]: !prev[field] };
		});
	};

	const handleChange = (field: keyof Patient | keyof User, value: any) => {
		setFormData((prev) => {
			if (!prev) return prev;

			const prevDoctors = prev.doctors ?? [];

			if (prevDoctors.some((d) => d.userId === value.userId)) {
				return prev;
			}

			if (field === 'doctors' && showDoctorSuggestions) {
				return {
					...prev,
					doctors: [...prevDoctors, value],
				};
			}

			if (field in prev.user) {
				return {
					...prev,
					user: { ...prev.user, [field]: value as string },
				};
			}

			return { ...prev, [field]: value };
		});
	};

	const handleSaveField = (field: string) => {
		if (!formData) return;
		onSave(formData);
		toggleEdit(field);
	};
	const handleDeactivate = () => {
		if (!formData) return;
		if (activeTabId) dispatch(closePatientTab(activeTabId));
		dispatch(deactivatePatient({ patientId: selectedPatient.userId }));
		dispatch(
			deactivatePatientFromDB({ patientId: selectedPatient.userId })
		);
		navigate(`/patients`);
	};

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
		<Card className="w-full max-w-3xl mx-auto shadow-sm rounded-xl">
			<CardContent className="max-w-3xl p-6">
				<CardHeader>
					<CardTitle className="text-xl font-semibold text-[#2C6A74]">
						{selectedPatient?.fullName.split(' ')[0]}'s Profile
					</CardTitle>
				</CardHeader>
				<div className="flex flex-col mb-8 items-center">
					{selectedPatient?.user.gender === 'Female' ? (
						<img
							src={patientFemale}
							alt="Profile"
							className="w-28 h-28 rounded-full object-cover shadow-md"
						/>
					) : selectedPatient?.user.gender === 'Male' ? (
						<img
							src={patientMale}
							alt="Profile"
							className="w-28 h-28 rounded-full object-cover shadow-md"
						/>
					) : (
						<FaUserCircle className="w-28 h-28 text-gray-400" />
					)}
				</div>
				<CardContent className="grid grid-cols-2 gap-6 mt-4 text-sm">
					{/* Profile Image */}

					{/* Name */}
					<div className="flex flex-col gap-1">
						<Label className="text-xs text-gray-400">Name</Label>
						<div className="flex items-center justify-between gap-2">
							{editMode['name'] ? (
								<Input
									value={formData.fullName}
									onChange={(e) =>
										handleChange('fullName', e.target.value)
									}
									className="flex-1"
								/>
							) : (
								<p className="flex-1 text-gray-900 font-serif">
									{formData.fullName}
								</p>
							)}

							{editMode['name'] ? (
								<div className="flex items-center gap-1">
									<Button
										size="icon"
										className="h-8 w-8 bg-green-500 hover:bg-green-600 text-white"
										onClick={() => handleSaveField('name')}>
										<Check size={16} />
									</Button>
									<Button
										size="icon"
										variant="ghost"
										className="h-8 w-8"
										onClick={() => toggleEdit('name')}>
										<X size={16} />
									</Button>
								</div>
							) : (
								<Button
									size="icon"
									variant="ghost"
									className="h-8 w-8 text-gray-400"
									onClick={() => toggleEdit('name')}>
									<Edit3 size={16} />
								</Button>
							)}
						</div>
					</div>

					{/* Email */}
					<div className="flex flex-col gap-1">
						<Label className="text-xs text-gray-400">Email</Label>
						<div className="flex items-center justify-between gap-2">
							{editMode['email'] ? (
								<Input
									type="email"
									value={formData.user.email}
									onChange={(e) =>
										handleChange('email', e.target.value)
									}
									className="flex-1"
								/>
							) : (
								<p className="flex-1 text-gray-900 font-serif">
									{formData.user.email}
								</p>
							)}

							{editMode['email'] ? (
								<div className="flex items-center gap-1">
									<Button
										size="icon"
										className="h-8 w-8 bg-green-500 hover:bg-green-600 text-white"
										onClick={() =>
											handleSaveField('email')
										}>
										<Check size={16} />
									</Button>
									<Button
										size="icon"
										variant="ghost"
										className="h-8 w-8  "
										onClick={() => toggleEdit('email')}>
										<X size={16} />
									</Button>
								</div>
							) : (
								<Button
									size="icon"
									variant="ghost"
									className="h-8 w-8 text-gray-400"
									onClick={() => toggleEdit('email')}>
									<Edit3 size={16} />
								</Button>
							)}
						</div>
					</div>

					{/* Date of Birth */}
					<div className="flex flex-col gap-1">
						<Label className="text-xs text-gray-400">
							Date of Birth
						</Label>
						<div className="flex items-center justify-between gap-2">
							{editMode['dateOfBirth'] ? (
								<Input
									type="date"
									value={formData.user.dateOfBirth}
									onChange={(e) =>
										handleChange(
											'dateOfBirth',
											e.target.value
										)
									}
									className="flex-1"
								/>
							) : (
								<p className="flex-1 text-gray-900 font-serif">
									{formData.user.dateOfBirth}
								</p>
							)}

							{editMode['dateOfBirth'] ? (
								<div className="flex items-center gap-1">
									<Button
										size="icon"
										className="h-8 w-8 bg-green-500 hover:bg-green-600 text-white"
										onClick={() =>
											handleSaveField('dateOfBirth')
										}>
										<Check size={16} />
									</Button>
									<Button
										size="icon"
										variant="ghost"
										className="h-8 w-8  "
										onClick={() =>
											toggleEdit('dateOfBirth')
										}>
										<X size={16} />
									</Button>
								</div>
							) : (
								<Button
									size="icon"
									variant="ghost"
									className="h-8 w-8 text-gray-400"
									onClick={() => toggleEdit('dateOfBirth')}>
									<Edit3 size={16} />
								</Button>
							)}
						</div>
					</div>

					{/* Age */}
					<div className="flex flex-col gap-1">
						<Label className="text-xs text-gray-400">Age</Label>
						<div className="flex items-center justify-between gap-2">
							<p className="flex-1 text-gray-900 font-serif">
								{calculateAge(
									new Date(formData.user.dateOfBirth)
								)}{' '}
								years
							</p>
						</div>
					</div>

					{/* Blood Type */}
					<div className="flex flex-col gap-1">
						<Label className="text-xs text-gray-400">
							Blood Type
						</Label>
						<div className="flex items-center justify-between gap-2">
							{editMode['name'] ? (
								<Input
									value={formData.user.bloodType}
									onChange={(e) =>
										handleChange('fullName', e.target.value)
									}
									className="flex-1"
								/>
							) : (
								<p className="flex-1 text-gray-900 font-serif">
									{formData.user.bloodType}
								</p>
							)}

							{editMode['bloodType'] ? (
								<div className="flex items-center gap-1">
									<Button
										size="icon"
										className="h-8 w-8 bg-green-500 hover:bg-green-600 text-white"
										onClick={() =>
											handleSaveField('bloodType')
										}>
										<Check size={16} />
									</Button>
									<Button
										size="icon"
										variant="ghost"
										className="h-8 w-8"
										onClick={() => toggleEdit('bloodType')}>
										<X size={16} />
									</Button>
								</div>
							) : (
								<Button
									size="icon"
									variant="ghost"
									className="h-8 w-8 text-gray-400"
									onClick={() => toggleEdit('bloodType')}>
									<Edit3 size={16} />
								</Button>
							)}
						</div>
					</div>

					{/* Gender */}
					<div className="flex flex-col gap-1">
						<Label className="text-xs text-gray-400">Gender</Label>
						<div className="flex items-center justify-between gap-2">
							{editMode['gender'] ? (
								<Select
									value={undefined}
									onValueChange={(value) =>
										handleChange('gender', value)
									}>
									<SelectTrigger className="flex-1">
										<SelectValue placeholder="Select gender" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Male">
											Male
										</SelectItem>
										<SelectItem value="Female">
											Female
										</SelectItem>
										<SelectItem value="Other">
											Other
										</SelectItem>
									</SelectContent>
								</Select>
							) : (
								<p className="flex-1 text-gray-900 font-serif">
									{formData.user.gender}
								</p>
							)}

							{editMode['gender'] ? (
								<div className="flex items-center gap-1">
									<Button
										size="icon"
										className="h-8 w-8 bg-green-500 hover:bg-green-600 text-white"
										onClick={() =>
											handleSaveField('gender')
										}>
										<Check size={16} />
									</Button>
									<Button
										size="icon"
										variant="ghost"
										className="h-8 w-8 "
										onClick={() => toggleEdit('gender')}>
										<X size={16} />
									</Button>
								</div>
							) : (
								<Button
									size="icon"
									variant="ghost"
									className="h-8 w-8  text-gray-400"
									onClick={() => toggleEdit('gender')}>
									<Edit3 size={16} />
								</Button>
							)}
						</div>
					</div>

					{/* Contact No */}
					<div className="flex flex-col gap-1">
						<Label className="text-xs text-gray-400">
							Contact No
						</Label>
						<div className="flex items-center justify-between gap-2">
							{editMode['phone'] ? (
								<PhoneInput
									placeholder="Enter phone number"
									initialValueFormat="national"
									defaultCountry="LK"
									international
									required
									value={undefined}
									onChange={(value) =>
										handleChange('phone', value || '')
									}
									className="flex-1"
								/>
							) : (
								<p className="flex-1 text-gray-900 font-serif">
									{formData.user.phone}
								</p>
							)}

							{editMode['phone'] ? (
								<div className="flex items-center gap-1">
									<Button
										size="icon"
										className="h-8 w-8 bg-green-500 hover:bg-green-600 text-white"
										onClick={() =>
											handleSaveField('phone')
										}>
										<Check size={16} />
									</Button>
									<Button
										size="icon"
										variant="ghost"
										className="h-8 w-8"
										onClick={() => toggleEdit('phone')}>
										<X size={16} />
									</Button>
								</div>
							) : (
								<Button
									size="icon"
									variant="ghost"
									className="h-8 w-8 text-gray-400"
									onClick={() => toggleEdit('phone')}>
									<Edit3 size={16} />
								</Button>
							)}
						</div>
					</div>

					{/* Emergency Contact No */}
					<div className="flex flex-col gap-1">
						<Label className="text-xs text-gray-400">
							Emergency Contact
						</Label>
						<div className="flex items-center justify-between gap-2">
							{editMode['emergencyContact'] ? (
								<PhoneInput
									placeholder="Enter phone number"
									initialValueFormat="national"
									defaultCountry="LK"
									international
									required
									value={undefined}
									onChange={(value) =>
										handleChange(
											'emergencyContact',
											value || ''
										)
									}
									className="flex-1"
								/>
							) : (
								<p className="flex-1 text-gray-900 font-serif">
									{formData.emergencyContact}
								</p>
							)}

							{editMode['emergencyContact'] ? (
								<div className="flex items-center gap-1">
									<Button
										size="icon"
										className="h-8 w-8 bg-green-500 hover:bg-green-600 text-white"
										onClick={() =>
											handleSaveField('emergencyContact')
										}>
										<Check size={16} />
									</Button>
									<Button
										size="icon"
										variant="ghost"
										className="h-8 w-8"
										onClick={() =>
											toggleEdit('emergencyContact')
										}>
										<X size={16} />
									</Button>
								</div>
							) : (
								<Button
									size="icon"
									variant="ghost"
									className="h-8 w-8 text-gray-400"
									onClick={() =>
										toggleEdit('emergencyContact')
									}>
									<Edit3 size={16} />
								</Button>
							)}
						</div>
					</div>

					{/* Address */}
					<div className="flex flex-col gap-1">
						<Label className="text-xs text-gray-400">Address</Label>
						<div className="flex items-center justify-between gap-2">
							{editMode['address'] ? (
								<Input
									type="text"
									value={formData.user.address}
									onChange={(e) =>
										handleChange('address', e.target.value)
									}
									className="flex-1"
								/>
							) : (
								<p className="flex-1 text-gray-900 font-serif">
									{formData.user.address}
								</p>
							)}

							{editMode['address'] ? (
								<div className="flex items-center gap-1">
									<Button
										size="icon"
										className="h-8 w-8 bg-green-500 hover:bg-green-600 text-white"
										onClick={() =>
											handleSaveField('address')
										}>
										<Check size={16} />
									</Button>
									<Button
										size="icon"
										variant="ghost"
										className="h-8 w-8"
										onClick={() => toggleEdit('address')}>
										<X size={16} />
									</Button>
								</div>
							) : (
								<Button
									size="icon"
									variant="ghost"
									className="h-8 w-8 text-gray-400"
									onClick={() => toggleEdit('address')}>
									<Edit3 size={16} />
								</Button>
							)}
						</div>
					</div>
					<div className=" flex flex-col gap-1"></div>
					{/* Doctor */}
					<div className=" flex flex-col gap-1">
						<Label className="text-xs text-gray-400">Doctors</Label>

						<div className="flex flex-col gap-2 flex-1">
							{/* Assigned doctors list */}
							{formData.doctors && formData.doctors.length > 0 ? (
								<div className="flex flex-wrap gap-2">
									{formData.doctors.map((d) => (
										<div
											key={d.userId}
											className="flex items-center bg-sky-100 text-sky-800 px-3 py-1 rounded-full shadow-sm">
											<span className="font-medium">
												{d.user.name}
											</span>
											<span className="ml-2 text-xs text-gray-400">
												({d.specialization})
											</span>

											{editMode['doctor'] && (
												<button
													className="ml-2 text-red-500 hover:text-red-700"
													onClick={() => {
														handleChange(
															'doctors',
															formData.doctors.filter(
																(fd) => {
																	return (
																		fd.userId !==
																		d.userId
																	);
																}
															)
														);
													}}>
													✕
												</button>
											)}
										</div>
									))}
								</div>
							) : (
								<p className="text-sm text-gray-400 italic">
									No doctors assigned
								</p>
							)}

							{/* Add doctor button + suggestions */}
							{editMode['doctor'] && (
								<div className="relative">
									{showDoctorSuggestions &&
										doctors.length > 0 && (
											<div
												ref={dropDownRef}
												className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-md mt-1 max-h-40 overflow-y-auto">
												{doctors.map((doc) => (
													<div
														key={doc.userId}
														className="px-3 py-2 cursor-pointer hover:bg-gray-100"
														onClick={() => {
															handleChange(
																'doctors',
																doc
																// (
																// 	prevDoctors: Patient['doctors']
																// ) => {
																// 	if (
																// 		prevDoctors.some(
																// 			(
																// 				d
																// 			) =>
																// 				d.userId ===
																// 				doc.userId
																// 		)
																// 	)
																// 		return prevDoctors;
																// 	return [
																// 		...prevDoctors,
																// 		doc,
																// 	];
																// }
															);
															setShowDoctorSuggestions(
																false
															);
														}}>
														<p className="text-gray-900 font-serif">
															{doc.user.name}
														</p>
														<p className="text-xs text-gray-400 font-serif">
															{doc.specialization}
														</p>
													</div>
												))}
											</div>
										)}

									<Button
										size="sm"
										variant="outline"
										className="mt-2"
										onClick={() => {
											setShowDoctorSuggestions(
												(prev) => !prev
											);
										}}>
										+ Add Doctor
									</Button>
								</div>
							)}
						</div>

						{/* Edit / Save / Cancel buttons */}
						<div className="flex items-center gap-1 mt-2">
							{editMode['doctor'] ? (
								<>
									<Button
										size="icon"
										className="h-8 w-8 bg-green-500 hover:bg-green-600 text-white"
										onClick={() =>
											handleSaveField('doctor')
										}>
										<Check size={16} />
									</Button>
									<Button
										size="icon"
										variant="ghost"
										className="h-8 w-8"
										onClick={() => toggleEdit('doctor')}>
										<X size={16} />
									</Button>
								</>
							) : (
								<Button
									size="icon"
									variant="ghost"
									className="h-8 w-8 text-gray-400"
									onClick={() => toggleEdit('doctor')}>
									<Edit3 size={16} />
								</Button>
							)}
						</div>
					</div>

					{/* Diagnosis */}
					<div className=" flex flex-col h-fit gap-1">
						<Label className="text-xs text-gray-400">
							Diagnosis
						</Label>

						<div className="flex flex-col gap-2 flex-1">
							{/* Diagnosis list */}
							{formData.records && formData.records.length > 0 ? (
								<div className="flex flex-wrap gap-2">
									{formData.records?.map((rec) => (
										<div
											key={rec.id}
											className="flex w-fit items-center border border-amber-200 bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full shadow-sm">
											<ul className="font-medium">
												{rec.diagnosis?.name}
											</ul>
										</div>
									))}
								</div>
							) : (
								<p className="text-sm text-gray-400 italic">
									No Diagnosis to Display
								</p>
							)}
						</div>
					</div>
				</CardContent>

				<CardFooter className="flex justify-end ">
					{' '}
					<Popover>
						<PopoverTrigger>
							<div
								role="button"
								className=" w-50 cursor-pointer rounded-md px-3 py-2 text-center text-sm text-gray-400 shadow-sm transition-colors  border hover:bg-red-50 hover:text-red-700 focus:outline-dashed focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
								Deactivate
							</div>
						</PopoverTrigger>

						<PopoverContent
							side="top"
							align="center"
							sideOffset={10}
							className="sm:max-w-lg shadow-xl rounded-lg border border-yellow-400 bg-yellow-50 p-4">
							<div className="space-y-2">
								<h3 className="font-semibold text-lg text-yellow-800 flex items-center gap-2">
									⚠️ Deactivate Patient
								</h3>
								<p className="text-sm text-yellow-700">
									This action will deactivate the patient’s
									account. They will no longer be able to
									access the system, but their medical records
									and history will remain in our database.
								</p>
								<p className="text-xs text-yellow-600 italic">
									You can reactivate this patient later if
									needed.
								</p>
							</div>
							<div
								onClick={handleDeactivate}
								role="button"
								className="mt-3 w-full cursor-pointer rounded-md bg-yellow-600 px-4 py-2 text-center text-white shadow-sm transition-colors hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
								Deactivate
							</div>
						</PopoverContent>
					</Popover>
				</CardFooter>
			</CardContent>
		</Card>
	);
};

export default PatientProfileCard;
