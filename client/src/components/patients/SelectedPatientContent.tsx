import { AppDispatch, RootState } from '@/store/store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import PatientTabs from './PatientTabs';
import {
	addPanel,
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
import LabPage from '../../Pages/LabPage';
import PrescriptionPage from '../medicalRecords/clinical/prescription/PrescriptionPage';
import PatientMedications from '../medicalRecords/clinical/patientMedication/PatientMedications';
import PatientProfileCard from './PatientProfileCard ';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '../ui/resizable';

interface SelectedPatientContentProps {
	patient: Patient;
}

const SelectedPatientContent = ({ patient }: SelectedPatientContentProps) => {
	const { subTab, innerTab, innerSubTab } = useParams();
	const dispatch = useDispatch<AppDispatch>();
	const { selectedPatient, openPanelsByPatient } = useSelector(
		(state: RootState) => state.patients
	);
	const [tabContent, setTabContent] = useState<React.ReactNode>(null);
	const [isForbidden, setIsForbidden] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setIsForbidden(false);

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
	}, [selectedPatient, subTab, patient]);

	const panelRegistry: Record<string, React.ComponentType<any>> = {
		vitals: VitalsPage,
		diagnoses: DiagnosePage,
		history: HistoryPage,

		'clinical-enter': ClinicalRecordsPage,
		'clinical-visits': PastVisitsPage,
		'clinical-lab': LabPage,
		'clinical-referrals': ReferralsPage,
		'clinical-prescriptions': PrescriptionPage,
		'clinical-medications': PatientMedications,
	};

	const getPanelDefinition = ({
		subTab,
		innerTab,
		innerSubTab,
	}: {
		subTab: string;
		innerTab: string;
		innerSubTab?: string;
	}) => {
		if (subTab !== 'medical-records') return null;

		if (innerTab === 'vitals') return { panelId: 'vitals' };

		if (innerTab === 'diagnoses') return { panelId: 'diagnoses' };

		if (innerTab === 'history') return { panelId: 'history' };

		if (innerTab === 'clinical') {
			switch (innerSubTab) {
				case 'enter':
					return { panelId: 'clinical-enter' };
				case 'visits':
					return { panelId: 'clinical-visits' };
				case 'lab':
					return { panelId: 'clinical-lab' };
				case 'referrals':
					return { panelId: 'clinical-referrals' };
				case 'prescriptions':
					return { panelId: 'clinical-prescriptions' };
				case 'medications':
					return {
						panelId: 'clinical-medications',
					};
			}
		}

		return null;
	};

	useEffect(() => {
		if (!selectedPatient) return;
		if (subTab !== 'medical-records' || !innerTab) return;

		const result = getPanelDefinition({
			subTab,
			innerTab,
			innerSubTab,
		});

		if (!result) return;

		const { panelId } = result;

		dispatch(
			addPanel({
				panelId,
				patientId: selectedPatient.userId,
			})
		);
	}, [subTab, innerTab, innerSubTab, patient.userId]);

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

			{subTab === 'medical-records' && selectedPatient && (
				<div className="w-full h-full min-w-0 overflow-x-auto">
					<ResizablePanelGroup
						direction="horizontal"
						className="min-w-0">
						{openPanelsByPatient[selectedPatient.userId]?.map(
							(panel, index) => {
								const PanelComponent =
									panelRegistry[panel.panelId];
								return (
									<React.Fragment key={panel.panelId}>
										<ResizablePanel>
											<PanelComponent />
										</ResizablePanel>
										<ResizableHandle withHandle />
									</React.Fragment>
								);
							}
						)}
					</ResizablePanelGroup>
				</div>
			)}
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
