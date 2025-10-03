import { AppDispatch, RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PatientTabs from './PatientTabs';
import {
	openPatientTabs,
	PatientTab,
	setSelectedPatient,
	updatePatient,
	updatePatientInfo,
} from '@/store/slices/patientSlice';
import Forbidden from '../common/Forbidden';
import { Patient } from '@/types/patientTypes';
import PatientInfoHeader from './PatientInfoHeader';
import { ChevronRight } from 'lucide-react';
import VitalsPage from '../medicalRecords/vitals/VitalsPage';
import DiagnosePage from '../medicalRecords/diagnoses/DiagnosePage';
import HistoryPage from '../medicalRecords/historyRecs/HistoryPage';
import ClinicalRecordsPage from '../medicalRecords/clinical/enterClinicalDetails/ClinicalRecordsPage';
import PastVisitsPage from '../medicalRecords/clinical/pastVisits/PastVisitsPage';
import ReferralsPage from '../medicalRecords/clinical/referrals/ReferralsPage';
import LabPage from '../laboratory/LabPage';
import PrescriptionPage from '../medicalRecords/clinical/prescription/PrescriptionPage';
import PatientMedications from '../medicalRecords/clinical/patientMedication/PatientMedications';
import PatientProfileCard from './PatientProfileCard ';

interface SelectedPatientContentProps {
	patient: Patient;
}

const SelectedPatientContent = ({ patient }: SelectedPatientContentProps) => {
	const { section, tab, subTab, innerTab, innerSubTab } = useParams();
	const dispatch = useDispatch<AppDispatch>();
	const selectedPatient = useSelector(
		(state: RootState) => state.patients.selectedPatient
	);
	const [tabContent, setTabContent] = useState<React.ReactNode>(null);
	const [isForbidden, setIsForbidden] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setIsForbidden(false);
		setTabContent(null);

		try {
			if (subTab === 'profile') {
				const handleOnSave = (updated: Patient) => {
					dispatch(
						updatePatientInfo({
							patientId: updated.userId,
							patient: updated,
						})
					);
					dispatch(
						updatePatient({
							patientId: updated.userId,
							patient: updated,
						})
					);
					dispatch(setSelectedPatient(updated));
				};
				setTabContent(
					<PatientProfileCard
						open={true}
						selectedPatient={patient}
						onSave={handleOnSave}
					/>
				);
			} else if (subTab === 'medical-records') {
				if (innerTab === 'vitals') {
					setTabContent(<VitalsPage />);
				} else if (innerTab === 'diagnoses') {
					setTabContent(<DiagnosePage />);
				} else if (innerTab === 'history') {
					setTabContent(<HistoryPage />);
				} else if (innerTab === 'clinical') {
					if (innerSubTab === 'enter') {
						setTabContent(<ClinicalRecordsPage />);
					} else if (innerSubTab === 'visits') {
						setTabContent(<PastVisitsPage />);
					} else if (innerSubTab === 'referrals') {
						setTabContent(<ReferralsPage />);
					} else if (innerSubTab === 'lab') {
						setTabContent(<LabPage />);
					} else if (innerSubTab === 'prescriptions') {
						setTabContent(<PrescriptionPage />);
					} else if (innerSubTab === 'medications') {
						setTabContent(
							<PatientMedications patientId={patient.userId} />
						);
					}
				}
			}
		} catch (err: any) {
			if (err.response?.status === 403) {
				setIsForbidden(true);
			} else {
				setTabContent('Error loading content');
			}
		} finally {
			setIsLoading(false);
		}
	}, [selectedPatient, subTab, innerTab, innerSubTab, patient]);

	return (
		<div>
			<PatientTabs patient={patient} />
			<div className="p-3 pt-0">
				<nav className="flex items-center text-sm pt-0 mt-0 pl-2 mb-6 text-gray-500 gap-1">
					{subTab && (
						<>
							<Link
								to={`/patients/${subTab.toLowerCase()}`}
								className="hover:text-sky-600 transition-colors">
								{subTab}
							</Link>
							<ChevronRight className="w-4 h-4 text-gray-400" />
						</>
					)}
					{innerTab && (
						<>
							<Link
								to={`/patients/${subTab?.toLowerCase()}/${innerTab.toLowerCase()}`}
								className="hover:text-sky-600 transition-colors">
								{innerTab}
							</Link>
							<ChevronRight className="w-4 h-4 text-gray-400" />
						</>
					)}
					{innerSubTab && (
						<span className="text-gray-700">{innerSubTab}</span>
					)}
				</nav>
				<PatientInfoHeader selectedPatient={patient} />
			</div>
			{isLoading ? (
				<p>Loading...</p>
			) : isForbidden ? (
				<Forbidden />
			) : (
				tabContent
			)}
		</div>
	);
};

export default SelectedPatientContent;
