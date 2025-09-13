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
			condition: 'Hypertension',
		},
		{
			id: '44444444-4444-4444-4444-444444444442',
			name: 'Jane Smith',
			email: 'patient2@example.com',
			dob: '1985-08-22',
			gender: 'Female',
			condition: 'Diabetes',
		},
		{
			id: '44444444-4444-4444-4444-444444444443',
			name: 'Mike Johnson',
			email: 'patient3@example.com',
			dob: '1978-12-15',
			gender: 'Male',
			condition: 'Asthma',
		},
		{
			id: '44444444-4444-4444-4444-444444444444',
			name: 'Sarah Lee',
			email: 'patient4@example.com',
			dob: '2000-03-05',
			gender: 'Female',
			condition: 'Anemia',
		},
		{
			id: '44444444-4444-4444-4444-444444444445',
			name: 'Tom Brown',
			email: 'patient5@example.com',
			dob: '1995-07-19',
			gender: 'Male',
			condition: 'Migraine',
		},
	];

	const diagnoses = [
		'Hypertension',
		'Diabetes',
		'Asthma',
		'Anemia',
		'Migraine',
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

	const labTestsTemplates = [
		{
			testType: 'Blood Test',
			status: 'PENDING',
			result: null,
		},
		{
			testType: 'Urine Test',
			status: 'PENDING',
			result: null,
		},
		{
			testType: 'X-Ray',
			status: 'PENDING',
			result: null,
		},
		{
			testType: 'MRI',
			status: 'PENDING',
			result: null,
		},
		{
			testType: 'ECG',
			status: 'PENDING',
			result: null,
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
				phone: '123-456-7890',
				address: '123 Main Street',
				emergencyContact: 'Emergency Contact - 321-654-0987',
				insuranceDetails: 'ABC Insurance, Plan X',
				doctor: { connect: { id: assignedDoctor.id } },
				user: {
					connect: { id: patientUser.id },
				},
			},
		});

		// Create Medical Records and medications
		for (let j = 0; j < 5; j++) {
			const diagnosis = diagnoses[j % diagnoses.length];
			const medicalRecord = await prisma.medicalRecord.create({
				data: {
					patientId: patientProfile.userId,
					doctorId: assignedDoctor.id,
					diagnosis,
					notes: `Notes for ${diagnosis}`,
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
				},
			});

			//create lab reports
			for (let k = 0; k < labTestsTemplates.length; k++) {
				const testTemplate = labTestsTemplates[k];

				await prisma.labTest.create({
					data: {
						patientId: patientProfile.userId,
						doctorId: assignedDoctor.id,
						testType: testTemplate.testType,
						status: testTemplate.status,
						requestedAt: new Date(),
						result: testTemplate.result,
						medicalRecord: {
							connect: { id: medicalRecord.id },
						},
					},
				});
			}
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
