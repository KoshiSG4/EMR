import { Patient } from '@/types/patientTypes';

interface PatientInfoHeaderProps {
	selectedPatient: Patient;
}

const calculateAge = (dob: Date) => {
	const today = new Date();
	let age = today.getFullYear() - dob.getFullYear();
	const m = today.getMonth() - dob.getMonth();

	if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
		age--;
	}
	return age;
};

const PatientInfoHeader = ({ selectedPatient }: PatientInfoHeaderProps) => {
	return (
		<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-2">
			{/* Name & Gender */}
			<h2 className="text-lg font-semibold text-gray-800">
				{selectedPatient.fullName}
				<span className="ml-2 text-base text-gray-500 font-normal">
					{` | ${selectedPatient.gender}`}
				</span>
			</h2>

			{/* Age */}
			<p className="text-sm text-gray-600 mt-1">
				<span className="font-medium">Age:</span>{' '}
				{calculateAge(new Date(selectedPatient.dateOfBirth))}
			</p>

			{/* Diagnosis */}
			{selectedPatient.records && selectedPatient.records.length > 0 && (
				<p className="text-sm text-gray-600 mt-1">
					<span className="font-medium">Diagnosis:</span>{' '}
					{selectedPatient.records.map((d, index) => (
						<span key={index}>
							{index > 0 && ' | '}
							{d.diagnosis?.name}
						</span>
					))}
				</p>
			)}
		</div>
	);
};

export default PatientInfoHeader;
