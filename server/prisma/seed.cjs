const { PrismaClient } = require('../generated/prisma');
// import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

async function main() {
	console.log('Seeding....');
	const keycloakAdmins = [
		{
			id: '11111111-1111-1111-1111-111111111111',
			name: 'Admin One',
			email: 'admin1@example.com',
		},
		{
			id: '11111111-1111-1111-1111-111111111112',
			name: 'Admin Two',
			email: 'admin2@example.com',
		},
		{
			id: '11111111-1111-1111-1111-111111111113',
			name: 'Admin Three',
			email: 'admin3@example.com',
		},
		{
			id: '11111111-1111-1111-1111-111111111114',
			name: 'Admin Four',
			email: 'admin4@example.com',
		},
		{
			id: '11111111-1111-1111-1111-111111111115',
			name: 'Admin Five',
			email: 'admin5@example.com',
		},
	];
	const keycloakDoctors = [
		{
			id: '22222222-2222-2222-2222-222222222221',
			name: 'Dr. Alice Brown',
			email: 'doc1@example.com',
			specialization: 'Cardiology',
		},
		{
			id: '22222222-2222-2222-2222-222222222222',
			name: 'Dr. Bob White',
			email: 'doc2@example.com',
			specialization: 'Neurology',
		},
		{
			id: '22222222-2222-2222-2222-222222222223',
			name: 'Dr. Carol Green',
			email: 'doc3@example.com',
			specialization: 'Dermatology',
		},
		{
			id: '22222222-2222-2222-2222-222222222224',
			name: 'Dr. David Black',
			email: 'doc4@example.com',
			specialization: 'Orthopedics',
		},
		{
			id: '22222222-2222-2222-2222-222222222225',
			name: 'Dr. Emma Gray',
			email: 'doc5@example.com',
			specialization: 'Pediatrics',
		},
	];

	const keycloakNurses = [
		{
			id: '33333333-3333-3333-3333-333333333331',
			name: 'Nurse Amy',
			email: 'nurse1@example.com',
			department: 'ER',
			shift: 'Day',
		},
		{
			id: '33333333-3333-3333-3333-333333333332',
			name: 'Nurse Ben',
			email: 'nurse2@example.com',
			department: 'ICU',
			shift: 'Night',
		},
		{
			id: '33333333-3333-3333-3333-333333333333',
			name: 'Nurse Chloe',
			email: 'nurse3@example.com',
			department: 'Pediatrics',
			shift: 'Day',
		},
		{
			id: '33333333-3333-3333-3333-333333333334',
			name: 'Nurse Dan',
			email: 'nurse4@example.com',
			department: 'Oncology',
			shift: 'Evening',
		},
		{
			id: '33333333-3333-3333-3333-333333333335',
			name: 'Nurse Eve',
			email: 'nurse5@example.com',
			department: 'General Surgery',
			shift: 'Morning',
		},
	];

	const keycloakPatients = [
		{
			id: '44444444-4444-4444-4444-444444444441',
			name: 'John Doe',
			email: 'patient1@example.com',
			dob: '1990-05-10',
			gender: 'Male',
			phone: '+94781234568',
			emergencyContact: '+94771234567',
			condition: 'Hypertension',
		},
		{
			id: '44444444-4444-4444-4444-444444444442',
			name: 'Jane Smith',
			email: 'patient2@example.com',
			dob: '1985-08-22',
			gender: 'Female',
			phone: '+94791234568',
			emergencyContact: '+94781234567',
			condition: 'Diabetes',
		},
		{
			id: '44444444-4444-4444-4444-444444444443',
			name: 'Mike Johnson',
			email: 'patient3@example.com',
			dob: '1978-12-15',
			gender: 'Male',
			phone: '+94771234569',
			emergencyContact: '+94791234567',
			condition: 'Asthma',
		},
		{
			id: '44444444-4444-4444-4444-444444444444',
			name: 'Sarah Lee',
			email: 'patient4@example.com',
			dob: '2000-03-05',
			gender: 'Female',
			phone: '+94781234569',
			emergencyContact: '+94771234568',
			condition: 'Anemia',
		},
		{
			id: '44444444-4444-4444-4444-444444444445',
			name: 'Tom Brown',
			email: 'patient5@example.com',
			dob: '1995-07-19',
			gender: 'Male',
			phone: '+94781234567',
			emergencyContact: '+94771234567',
			condition: 'Migraine',
		},
	];

	const LabStatus = [
		'PENDING',
		'ACCEPTED',
		'IN_PROGRESS',
		'RESULT_ENTERED',
		'VALIDATED',
		'RELEASED',
	];

	const patientHistoryData = [
		{
			chronicConditions: 'Hypertension, Type 2 Diabetes',
			pastIllnesses: 'Chickenpox (childhood)',
			surgeries: 'Appendectomy (2015)',
			hospitalizations: 'Admitted for pneumonia (2020)',
			familyHistory: 'Father - heart disease, Mother - diabetes',
			lifestyle: 'SEDENTARY',
			smokingStatus: 'FORMER',
			smokingNotes: 'Quit 10 years ago, smoked for 5 years',
			alcoholUse: 'OCCASIONAL',
			alcoholNotes: 'Social drinking, weekends only',
			drugUse: 'NEVER',
			drugNotes: null,
			diet: 'OMNIVORE',
			dietNotes: 'High carb intake',
			occupation: 'Office worker',
			allergies: 'Penicillin',
			obstetricHistory: null,
			menstrualHistroy: null,
			immunizations: 'COVID-19 (Pfizer, 2021), Tetanus booster (2018)',
			createdAt: new Date('2023-05-12'),
			updatedAt: new Date('2023-05-12'),
		},
		{
			chronicConditions: 'Asthma',
			pastIllnesses: 'Measles (childhood)',
			surgeries: null,
			hospitalizations: null,
			familyHistory: 'No significant history',
			lifestyle: 'MODERATELY_ACTIVE',
			smokingStatus: 'NEVER',
			smokingNotes: null,
			alcoholUse: 'NEVER',
			alcoholNotes: null,
			drugUse: 'NEVER',
			drugNotes: null,
			diet: 'VEGETARIAN',
			dietNotes: 'Occasional dairy',
			occupation: 'Teacher',
			allergies: 'Peanuts',
			obstetricHistory: 'G2P2 (2 pregnancies, 2 live births)',
			menstrualHistroy: 'Regular cycles, 28 days',
			immunizations: 'Up to date (childhood + annual flu shot)',
			createdAt: new Date('2023-08-21'),
			updatedAt: new Date('2023-08-21'),
			recordedBy: 'Dr. Lee',
		},
		{
			chronicConditions: 'None',
			pastIllnesses: 'Tonsillitis (2019)',
			surgeries: 'Tonsillectomy (2020)',
			hospitalizations: null,
			familyHistory: 'Mother - breast cancer',
			lifestyle: 'LIGHTLY_ACTIVE',
			smokingStatus: 'CURRENT_OCCASIONAL',
			smokingNotes: 'Smokes socially, ~2 cigarettes/week',
			alcoholUse: 'DAILY',
			alcoholNotes: '1–2 drinks/day',
			drugUse: 'NEVER',
			drugNotes: null,
			diet: 'PESCATARIAN',
			dietNotes: null,
			occupation: 'Software Engineer',
			allergies: 'None',
			obstetricHistory: null,
			menstrualHistroy: null,
			immunizations: 'COVID-19 (Moderna, 2021)',
			createdAt: new Date('2024-01-15'),
			updatedAt: new Date('2024-01-15'),
		},
		{
			chronicConditions: 'Chronic Kidney Disease (Stage 2)',
			pastIllnesses: 'Tuberculosis (treated 2010)',
			surgeries: null,
			hospitalizations: 'Renal check-up admission (2022)',
			familyHistory: 'Father - stroke',
			lifestyle: 'VERY_ACTIVE',
			smokingStatus: 'NEVER',
			smokingNotes: null,
			alcoholUse: 'HEAVY',
			alcoholNotes: 'High consumption, advised to reduce',
			drugUse: 'FORMER',
			drugNotes: 'Used cannabis in early 20s',
			diet: 'KETO',
			dietNotes: 'Low carb, high fat',
			occupation: 'Construction worker',
			allergies: 'Shellfish',
			obstetricHistory: null,
			menstrualHistroy: null,
			immunizations: 'Hepatitis B (2018)',
			createdAt: new Date('2024-06-02'),
			updatedAt: new Date('2024-06-02'),
		},
		{
			chronicConditions: 'Rheumatoid Arthritis',
			pastIllnesses: 'Scarlet fever (childhood)',
			surgeries: 'Knee replacement (2021)',
			hospitalizations: 'Multiple flare-ups (2019, 2021)',
			familyHistory: 'Mother - osteoporosis',
			lifestyle: 'SEDENTARY',
			smokingStatus: 'CURRENT_DAILY',
			smokingNotes: '1 pack/day for 15 years',
			alcoholUse: 'MODERATE',
			alcoholNotes: '2–3 drinks/week',
			drugUse: 'OCCASIONAL',
			drugNotes: 'Cannabis for pain management',
			diet: 'VEGAN',
			dietNotes: 'Strict plant-based, avoids processed foods',
			occupation: 'Freelance writer',
			allergies: 'Latex',
			obstetricHistory:
				'G3P2 (3 pregnancies, 2 live births, 1 miscarriage)',
			menstrualHistroy: 'Irregular cycles, menopause at 50',
			immunizations: 'Shingles vaccine (2022)',
			createdAt: new Date('2024-09-10'),
			updatedAt: new Date('2024-09-10'),
		},
	];

	const diagnoses = [
		'Hypertension',
		'Diabetes',
		'Asthma',
		'Anemia',
		'Migraine',
	];
	const diagnoseStatus = ['ACTIVE', 'RESOLVED', 'CHRONIC'];
	const diagnoseType = ['MEDICAL', 'SURGICAL', 'ALLERGY', 'FAMILY', 'SOCIAL'];

	const clinicalDetailsData = [
		{
			chiefComplaint: 'Headache',
			hpi: 'Patient reports a 3-day history of throbbing headaches, worse in the evenings.',
			allergies: 'None',
			notes: 'Patient appears anxious.',
			assessment: 'Tension headache',
			plan: 'Recommend hydration, rest, OTC pain relievers; follow-up in 1 week.',
		},
		{
			chiefComplaint: 'Abdominal pain',
			hpi: 'Sudden onset of lower abdominal cramping for 24 hours.',
			allergies: 'Penicillin',
			notes: 'Mild tenderness on palpation.',
			assessment: 'Gastroenteritis',
			plan: 'Encourage fluids, bland diet, antispasmodics PRN; monitor for worsening symptoms.',
		},
		{
			chiefComplaint: 'Shortness of breath',
			hpi: 'Difficulty breathing on exertion for 2 days.',
			allergies: 'Dust mites',
			notes: 'No fever, mild cough.',
			assessment: 'Mild asthma exacerbation',
			plan: 'Prescribe inhaler, avoid triggers, follow-up in 3 days.',
		},
		{
			chiefComplaint: 'Back pain',
			hpi: 'Dull lower back pain after lifting heavy boxes yesterday.',
			allergies: 'NSAIDs',
			notes: 'Limited range of motion.',
			assessment: 'Muscle strain',
			plan: 'Recommend rest, stretching exercises, NSAIDs PRN, physiotherapy referral if no improvement.',
		},
		{
			chiefComplaint: 'Rash',
			hpi: 'Red, itchy rash on forearms for 2 days, spreading.',
			allergies: 'Latex',
			notes: 'No systemic symptoms.',
			assessment: 'Contact dermatitis',
			plan: 'Apply topical corticosteroid cream, avoid irritants, monitor for infection.',
		},
	];

	const vitalsData = [
		{
			height: '170 cm',
			weight: '68 kg',
			bloodPressure: '120/80 mmHg',
			heartRate: '72 bpm',
			respiratoryRate: '16 breaths/min',
			temperature: '36.8 °C',
			spo2: '98%',
			painScore: '2/10',
			createdDate: new Date('2025-09-01T09:00:00Z'),
			updatedDate: new Date('2025-09-01T09:00:00Z'),
		},
		{
			height: '160 cm',
			weight: '55 kg',
			bloodPressure: '110/70 mmHg',
			heartRate: '78 bpm',
			respiratoryRate: '18 breaths/min',
			temperature: '37.0 °C',
			spo2: '97%',
			painScore: '1/10',
			createdDate: new Date('2025-09-02T10:30:00Z'),
			updatedDate: new Date('2025-09-02T10:30:00Z'),
		},
		{
			height: '175 cm',
			weight: '80 kg',
			bloodPressure: '130/85 mmHg',
			heartRate: '80 bpm',
			respiratoryRate: '17 breaths/min',
			temperature: '36.9 °C',
			spo2: '96%',
			painScore: '3/10',
			createdDate: new Date('2025-09-03T14:15:00Z'),
			updatedDate: new Date('2025-09-03T14:15:00Z'),
		},
		{
			height: '165 cm',
			weight: '60 kg',
			bloodPressure: '115/75 mmHg',
			heartRate: '70 bpm',
			respiratoryRate: '16 breaths/min',
			temperature: '36.7 °C',
			spo2: '99%',
			painScore: '0/10',
			createdDate: new Date('2025-09-04T08:45:00Z'),
			updatedDate: new Date('2025-09-04T08:45:00Z'),
		},
		{
			height: '180 cm',
			weight: '85 kg',
			bloodPressure: '125/82 mmHg',
			heartRate: '76 bpm',
			respiratoryRate: '18 breaths/min',
			temperature: '37.1 °C',
			spo2: '97%',
			painScore: '4/10',
			createdDate: new Date('2025-09-05T11:20:00Z'),
			updatedDate: new Date('2025-09-05T11:20:00Z'),
		},
	];

	const referralsData = [
		{
			date: new Date('2025-09-01T09:30:00Z'),
			referralType: 'Internal',
			referredTo: 'Dr. Smith',
			department: 'Cardiology',
			reason: 'Chest pain evaluation',
			notes: 'Patient experiences mild chest discomfort during exercise.',
			status: 'Pending',
		},
		{
			date: new Date('2025-09-02T11:15:00Z'),
			referralType: 'External',
			referredTo: 'Dr. Johnson',
			department: 'Dermatology',
			reason: 'Skin rash assessment',
			notes: 'Red, itchy rash on forearms for 2 days.',
			status: 'Completed',
		},
		{
			date: new Date('2025-09-03T14:00:00Z'),
			referralType: 'Internal',
			referredTo: 'Dr. Lee',
			department: 'Orthopedics',
			reason: 'Back pain evaluation',
			notes: 'Lower back pain after lifting heavy boxes yesterday.',
			status: 'In Progress',
		},
		{
			date: new Date('2025-09-04T10:45:00Z'),
			referralType: 'Internal',
			referredTo: 'Dr. Patel',
			department: 'Pulmonology',
			reason: 'Shortness of breath',
			notes: 'Difficulty breathing on exertion for 2 days.',
			status: 'Pending',
		},
		{
			date: new Date('2025-09-05T13:30:00Z'),
			referralType: 'External',
			referredTo: 'Dr. Nguyen',
			department: 'Gastroenterology',
			reason: 'Abdominal pain',
			notes: 'Sudden onset of lower abdominal cramping for 24 hours.',
			status: 'Completed',
		},
	];

	const medicationTemplates = [
		{
			name: 'Aspirin',
			dosage: '75mg',
			frequency: 'Once daily',
			route: 'Oral',
		},
		{
			name: 'Metformin',
			dosage: '500mg',
			frequency: 'Twice daily',
			route: 'Oral',
		},
		{
			name: 'Salbutamol',
			dosage: '2 puffs',
			frequency: 'As needed',
			route: 'Inhalation',
		},
		{
			name: 'Iron Supplement',
			dosage: '65mg',
			frequency: 'Once daily',
			route: 'Oral',
		},
		{
			name: 'Ibuprofen',
			dosage: '200mg',
			frequency: 'Every 8 hours',
			route: 'Oral',
		},
	];

	const medicationStatuses = [
		'Active',
		'Discontinued',
		'Active',
		'Active',
		'Discontinued',
	];

	const medicationInventoryTemplates = [
		{
			name: 'Aspirin',
			form: 'Tablet',
			strength: '75mg',
			batchNumber: 'BATCH-001',
			quantity: 100,
			reorderLevel: 20,
			status: 'IN_STOCK',
			supplier: 'Pharma Inc',
			orderDate: new Date('2024-12-15'),
			arrivalDate: new Date('2025-01-05'),
			expiryDate: new Date('2026-01-01'),
			reservedFor: null,
		},
		{
			name: 'Metformin',
			form: 'Tablet',
			strength: '500mg',
			batchNumber: 'BATCH-002',
			quantity: 50,
			reorderLevel: 10,
			status: 'IN_STOCK',
			supplier: 'HealthCorp',
			orderDate: new Date('2025-01-20'),
			arrivalDate: new Date('2025-02-01'),
			expiryDate: new Date('2025-12-01'),
			reservedFor: null,
		},
		{
			name: 'Atorvastatin',
			form: 'Tablet',
			strength: '20mg',
			batchNumber: 'BATCH-003',
			quantity: 15,
			reorderLevel: 20,
			status: 'LOW_STOCK',
			supplier: 'Wellness Pharma',
			orderDate: new Date('2025-07-10'),
			arrivalDate: new Date('2025-07-25'),
			expiryDate: new Date('2025-08-01'),
			reservedFor: null,
		},
		{
			name: 'Amoxicillin',
			form: 'Capsule',
			strength: '500mg',
			batchNumber: 'BATCH-004',
			quantity: 0,
			reorderLevel: 30,
			status: 'OUT_OF_STOCK',
			supplier: 'MediCare Ltd',
			orderDate: new Date('2025-02-01'),
			arrivalDate: null,
			expiryDate: new Date('2024-12-31'),
			reservedFor: null,
		},
		{
			name: 'Insulin Glargine',
			form: 'Injection',
			strength: '100 IU/mL',
			batchNumber: 'BATCH-005',
			quantity: 80,
			reorderLevel: 25,
			status: 'ON_ORDER',
			supplier: 'NovoPharma',
			orderDate: new Date('2025-03-01'),
			arrivalDate: new Date('2025-03-15'),
			expiryDate: new Date('2026-05-15'),
			reservedFor: null,
		},
		{
			name: 'Omeprazole',
			form: 'Capsule',
			strength: '20mg',
			batchNumber: 'BATCH-006',
			quantity: 200,
			reorderLevel: 50,
			status: 'ARRIVED',
			supplier: 'GastroCare Inc',
			orderDate: new Date('2025-01-10'),
			arrivalDate: new Date('2025-01-25'),
			expiryDate: new Date('2027-03-01'),
			reservedFor: null,
		},
		{
			name: 'Paracetamol',
			form: 'Syrup',
			strength: '120mg/5ml',
			batchNumber: 'BATCH-007',
			quantity: 5,
			reorderLevel: 10,
			status: 'EXPIRED',
			supplier: 'MediLife',
			orderDate: new Date('2022-05-01'),
			arrivalDate: new Date('2022-05-15'),
			expiryDate: new Date('2023-11-15'),
			reservedFor: null,
		},
		{
			name: 'Losartan',
			form: 'Tablet',
			strength: '50mg',
			batchNumber: 'BATCH-008',
			quantity: 40,
			reorderLevel: 15,
			status: 'RESERVED',
			supplier: 'CardioHealth',
			orderDate: new Date('2025-05-01'),
			arrivalDate: new Date('2025-05-20'),
			expiryDate: new Date('2025-10-20'),
			reservedFor: 'Patient John Doe',
		},
		{
			name: 'Ceftriaxone',
			form: 'Injection',
			strength: '1g',
			batchNumber: 'BATCH-009',
			quantity: 120,
			reorderLevel: 30,
			status: 'IN_STOCK',
			supplier: 'GlobalMeds',
			orderDate: new Date('2025-04-01'),
			arrivalDate: new Date('2025-04-10'),
			expiryDate: new Date('2026-02-28'),
			reservedFor: null,
		},
		{
			name: 'Levothyroxine',
			form: 'Tablet',
			strength: '100mcg',
			batchNumber: 'BATCH-010',
			quantity: 70,
			reorderLevel: 15,
			status: 'IN_STOCK',
			supplier: 'EndoPharma',
			orderDate: new Date('2025-06-01'),
			arrivalDate: new Date('2025-06-15'),
			expiryDate: new Date('2026-07-10'),
			reservedFor: null,
		},
	];

	const labTestsData = [
		{
			testType: 'Complete Blood Count (CBC)',
			testCode: 'CBC001',
			department: 'Hematology',
			priority: 'ROUTINE',
			status: 'COMPLETED',
			requestedAt: new Date('2025-09-20T08:30:00Z'),
			acceptedAt: new Date('2025-09-20T09:00:00Z'),
			specimenType: 'Blood',
			specimenId: 'SMP001',
			specimenCollectedAt: new Date('2025-09-20T09:15:00Z'),
			results: {
				parameter: 'Hemoglobin',
				value: '13.5',
				unit: 'g/dL',
				referenceRange: '12.0 - 15.5',
				interpretation: 'Normal',
			},
			validatedAt: new Date('2025-09-20T12:00:00Z'),
			validatedBy: 'labtech1',
			releasedAt: new Date('2025-09-20T12:30:00Z'),
			billingCode: 'LAB1001',
			cost: 1500,
			coveredByInsurance: true,
			orderNotes: 'Routine annual check-up',
		},
		{
			testType: 'Lipid Profile',
			testCode: 'LIP002',
			department: 'Biochemistry',
			priority: 'ROUTINE',
			status: 'VALIDATED',
			requestedAt: new Date('2025-09-19T10:00:00Z'),
			specimenType: 'Blood',
			specimenId: 'SMP002',
			specimenCollectedAt: new Date('2025-09-19T10:20:00Z'),
			results: {
				parameter: 'Total Cholesterol',
				value: '210',
				unit: 'mg/dL',
				referenceRange: '< 200',
				interpretation: 'Slightly High',
			},
			validatedAt: new Date('2025-09-19T14:00:00Z'),
			validatedBy: 'labtech2',
			billingCode: 'LAB2002',
			cost: 2500,
			coveredByInsurance: false,
		},
		{
			testType: 'Urinalysis',
			testCode: 'URIN003',
			department: 'Pathology',
			priority: 'ROUTINE',
			status: 'IN_PROGRESS',
			requestedAt: new Date('2025-09-22T08:00:00Z'),
			acceptedAt: new Date('2025-09-22T08:15:00Z'),
			specimenType: 'Urine',
			specimenId: 'SMP003',
			specimenCollectedAt: new Date('2025-09-22T08:30:00Z'),
			orderNotes: 'Suspected UTI',
			billingCode: 'LAB3003',
			cost: 1000,
			coveredByInsurance: true,
		},
		{
			testType: 'COVID-19 PCR Test',
			testCode: 'COV004',
			department: 'Microbiology',
			priority: 'STAT',
			status: 'COMPLETED',
			requestedAt: new Date('2025-09-23T06:00:00Z'),
			acceptedAt: new Date('2025-09-23T06:15:00Z'),
			specimenType: 'Nasal Swab',
			specimenId: 'SMP004',
			specimenCollectedAt: new Date('2025-09-23T06:20:00Z'),
			results: {
				parameter: 'SARS-CoV-2 RNA',
				value: 'Not Detected',
				interpretation: 'Negative',
			},
			validatedAt: new Date('2025-09-23T08:00:00Z'),
			validatedBy: 'labtech3',
			releasedAt: new Date('2025-09-23T08:10:00Z'),
			billingCode: 'LAB4004',
			cost: 5000,
			coveredByInsurance: false,
		},
		{
			testType: 'Liver Function Test',
			testCode: 'LFT005',
			department: 'Biochemistry',
			priority: 'URGENT',
			status: 'PENDING',
			requestedAt: new Date('2025-09-25T11:30:00Z'),
			specimenType: 'Blood',
			specimenId: 'SMP005',
			orderNotes: 'Patient with jaundice',
			billingCode: 'LAB5005',
			cost: 3200,
			coveredByInsurance: true,
		},
	];

	// create admins
	for (const admin of keycloakAdmins) {
		await prisma.user.create({
			data: {
				id: admin.id,
				name: admin.name,
				email: admin.email,
				role: 'ADMIN',
				admin: { create: { permissions: 'ALL' } },
			},
		});
	}
	console.log('Admins created');

	// create doctors
	for (const doctor of keycloakDoctors) {
		await prisma.user.create({
			data: {
				id: doctor.id,
				name: doctor.name,
				email: doctor.email,
				role: 'DOCTOR',

				doctor: {
					create: {
						specialization: doctor.specialization,
					},
				},
			},
		});
	}
	console.log('Doctors created');

	// create nurses
	for (const nurse of keycloakNurses) {
		await prisma.user.create({
			data: {
				id: nurse.id,
				name: nurse.name,
				email: nurse.email,
				role: 'NURSE',
				nurse: {
					create: {
						department: nurse.department,
						shift: nurse.shift,
					},
				},
			},
		});
	}
	console.log('Nurses created');

	//create diagnosis
	for (const diagnose of diagnoses) {
		await prisma.diagnosis.create({
			data: { name: diagnose },
		});
	}

	//create inventory records
	const inventoryRecords = [];
	for (const med of medicationInventoryTemplates) {
		const inventory = await prisma.medicationInventory.create({
			data: {
				...med,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		});
		inventoryRecords.push(inventory);
	}
	console.log('Medication Inventory Created');

	// Patients + Medical Records + Medications
	for (let i = 0; i < keycloakPatients.length; i++) {
		const patient = keycloakPatients[i];
		const assignedDoctor = keycloakDoctors[i % keycloakDoctors.length];

		//Create User
		const patientUser = await prisma.user.create({
			data: {
				id: patient.id,
				name: patient.name,
				email: patient.email,
				role: 'PATIENT',
			},
		});
		console.log('patient', patientUser.name, 'created');

		//Create Patient profile
		const patientProfile = await prisma.patient.create({
			data: {
				fullName: patient.name,
				dateOfBirth: new Date(patient.dob),
				gender: patient.gender,
				phone: patient.phone,
				address: '123 Main Street',
				emergencyContact: patient.emergencyContact,
				insuranceDetails: 'ABC Insurance, Plan X',
				doctors: {
					connect: keycloakDoctors.map((d) => ({ userId: d.id })),
				},
				user: {
					connect: { id: patientUser.id },
				},
			},
		});

		for (let j = 0; j < 5; j++) {
			const d = diagnoses[j % diagnoses.length];
			const dt = diagnoseType[j % diagnoseType.length];
			const ds = diagnoseStatus[j % diagnoseStatus.length];

			//create patient history
			const patientHistory = await prisma.history.create({
				data: {
					patientId: patientProfile.userId,
					chronicConditions: patientHistoryData[j].chronicConditions,
					pastIllnesses: patientHistoryData[j].pastIllnesses,
					surgeries: patientHistoryData[j].surgeries,
					hospitalizations: patientHistoryData[j].hospitalizations,
					familyHistory: patientHistoryData[j].familyHistory,
					smokingStatus: patientHistoryData[j].smokingStatus,
					smokingNotes: patientHistoryData[j].smokingNotes,
					alcoholUse: patientHistoryData[j].alcoholUse,
					alcoholNotes: patientHistoryData[j].alcoholNotes,
					drugUse: patientHistoryData[j].drugUse,
					drugNotes: patientHistoryData[j].drugNotes,
					diet: patientHistoryData[j].diet,
					dietNotes: patientHistoryData[j].dietNotes,
					occupation: patientHistoryData[j].occupation,
					lifestyle: patientHistoryData[j].lifestyle,
					allergies: patientHistoryData[j].allergies,
					obstetricHistory: patientHistoryData[j].obstetricHistory,
					menstrualHistroy: patientHistoryData[j].menstrualHistroy,
					immunizations: patientHistoryData[j].immunizations,
					createdAt: new Date(),
					updatedAt: new Date(),
					recordedBy: keycloakDoctors[j].name,
				},
			});

			//create clinical details
			const clinicalDetails = await prisma.clinicalDetails.create({
				data: {
					date: new Date(),
					chiefComplaint: clinicalDetailsData[j].chiefComplaint,
					hpi: clinicalDetailsData[j].hpi,
					allergies: clinicalDetailsData[j].allergies,
					notes: clinicalDetailsData[j].notes,
					assessment: clinicalDetailsData[j].assessment,
					plan: clinicalDetailsData[j].plan,
					recordedBy: keycloakDoctors[j].name,
					patientId: patientProfile.userId,
				},
			});

			//create diagnose
			const createdDiagnoseId = await prisma.diagnosis.findUnique({
				where: { name: d },
				select: {
					id: true,
				},
			});

			await prisma.diagnosis.update({
				where: { id: createdDiagnoseId.id },
				data: {
					status: ds,
					type: dt,
				},
			});

			//create medical records
			const medicalRecord = await prisma.medicalRecord.create({
				data: {
					patientId: patientProfile.userId,
					doctorId: assignedDoctor.id,
					status: ds,
					type: dt,
					notes: `Notes for ${d}`,
					diagnosisId: createdDiagnoseId.id,
					clinicalDetailsId: clinicalDetails.id,
				},
			});

			//create vitals
			const vitals = await prisma.vitalsRecord.create({
				data: {
					height: vitalsData[j].height,
					weight: vitalsData[j].weight,
					bloodPressure: vitalsData[j].bloodPressure,
					heartRate: vitalsData[j].heartRate,
					respiratoryRate: vitalsData[j].respiratoryRate,
					temperature: vitalsData[j].temperature,
					spo2: vitalsData[j].spo2,
					painScore: vitalsData[j].painScore,
					recordedBy: keycloakNurses[j].name,
					createdDate: vitalsData[j].createdDate,
					updatedDate: vitalsData[j].updatedDate,
					patientId: patientProfile.userId,
					medicalRecordId: medicalRecord.id,
					clinicalDetailsId: clinicalDetails.id,
				},
			});

			// Create Medications for the patient
			const patientMedication = await prisma.patientMedication.create({
				data: {
					patientId: patientProfile.userId,
					prescribedById: assignedDoctor.id,
					name: medicationTemplates[j].name,
					dosage: j === 0 ? '75mg' : '500mg',
					frequency: j === 0 ? 'Once daily' : 'Twice daily',
					route: medicationTemplates[j].route,
					startDate: new Date(),
					endDate: new Date(),
					status: medicationStatuses[j],
					instructions: 'Take as prescirbed',
					prescribedByName: assignedDoctor.name,
					clinicalDetailsId: clinicalDetails.id,
				},
			});

			//update medication inventory
			const medInventory = inventoryRecords[j % inventoryRecords.length];

			await prisma.medicationInventory.update({
				where: { id: medInventory.id },
				data: {
					quantity: medInventory.quantity - 1,
					updatedAt: new Date(),
				},
			});

			await prisma.prescription.create({
				data: {
					createdAt: new Date(),
					patientMedicationId: patientMedication.id,
					medicalRecordId: medicalRecord.id,
					medicationInventoryId: medInventory.id,
					clinicalDetailsId: clinicalDetails.id,
				},
			});

			//create referrals record
			const referrals = await prisma.referralRecord.create({
				data: {
					date: referralsData[j].date,
					referralType: referralsData[j].referralType,
					referredTo: referralsData[j].referredTo,
					department: referralsData[j].department,
					reason: referralsData[j].reason,
					notes: referralsData[j].notes,
					status: referralsData[j].status,
					patientId: patientProfile.userId,
					doctorId: keycloakDoctors[j].id,
				},
			});

			//create lab reports
			const ls = LabStatus[j % LabStatus.length];
			const labTests = await prisma.labTest.create({
				data: {
					testType: labTestsData[j].testType,
					testCode: labTestsData[j].testCode,
					department: labTestsData[j].department,
					priority: labTestsData[j].priority,
					priority: labTestsData[j].priority,
					doctorId: keycloakDoctors[j].id,
					patientId: patientProfile.userId,
					medicalRecordId: medicalRecord.id,
					clinicalDetailsId: clinicalDetails.id,
					specimenType: labTestsData[j].specimenType || '-',
					specimenId: labTestsData[j].specimenId || null,
					specimenCollectedAt:
						labTestsData[j].specimenCollectedAt || null,
					status: ls,
					requestedAt: labTestsData[j].requestedAt,
					acceptedAt: labTestsData[j].acceptedAt || null,
					cancelledAt: labTestsData[j].cancelledAt || null,
					cancelledBy: labTestsData[j].cancelledBy || null,
					reasonForCancellation:
						labTestsData[j].reasonForCancellation || null,
					results: labTestsData[j].results || null,
					validatedAt: labTestsData[j].validatedAt || null,
					validatedBy: labTestsData[j].validatedBy || null,
					releasedAt: labTestsData[j].releasedAt || null,
					billingCode: labTestsData[j].billingCode || null,
					cost: labTestsData[j].cost || null,
					coveredByInsurance:
						labTestsData[j].coveredByInsurance || null,
					orderNotes: labTestsData[j].orderNotes || null,
					createdAt: labTestsData[j].createdAt,
					updatedAt: labTestsData[j].updatedAt,
				},
			});
		}
	}

	console.log('Patients with medical records & medications created');

	console.log('Seed complete!');
}

main()
	.then(async () => await prisma.$disconnect())
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
