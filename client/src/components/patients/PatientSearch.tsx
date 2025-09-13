import { Patient } from '../../types/patientTypes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { clearResults, searchPatients } from '../../store/slices/patientSlice';

interface PatientSearchProps {
	onSelect: (patient: Patient) => void;
}

const PatientSearch = ({ onSelect }: PatientSearchProps) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [isLocked, setIsLocked] = useState(false);

	const dispatch = useDispatch<AppDispatch>();
	const { patients: patients, loading } = useSelector(
		(state: RootState) => state.patients
	);

	useEffect(() => {
		if (isLocked) return;
		if (searchTerm.length < 2) {
			dispatch(clearResults());
			return;
		}

		const debounce = setTimeout(() => {
			dispatch(searchPatients(searchTerm));
		}, 200);

		return () => clearTimeout(debounce);
	}, [searchTerm]);

	const handleSelect = (patient: Patient) => {
		// setSearchTerm(`${patient.user.name}(${patient.user.email})`);
		setSearchTerm('');
		setIsLocked(true);
		onSelect(patient);
	};

	return (
		<div className="w-full max-w-md relative">
			<input
				type="text"
				placeholder="Search patients by name or email..."
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value);
					setIsLocked(false);
				}}
				className="w-full px-4 py-2 border rounded"
			/>

			{/* Spinner */}
			{loading && !isLocked && (
				<div className="absolute left-2 top-2 text-gray-400 text-sm">
					Loading...
				</div>
			)}

			{/* Results */}
			{patients.length > 0 && !isLocked && (
				<ul className="absolute w-full mt-1 border rounded shadow bg-white z-10">
					{patients.map((patient) => (
						<li
							key={patient.userId}
							onClick={() => handleSelect(patient)}
							className="p-2 hover:bg-blue-100 cursor-pointer">
							<span className="font-medium">
								{patient.user.name}
							</span>
							<span className="text-gray-500">
								{' '}
								({patient.user.email})
							</span>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default PatientSearch;
