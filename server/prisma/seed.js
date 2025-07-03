const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function main() {
	// Create Admin User
	const adminUser = await prisma.user.create({
		data: {
			name: 'Admin One',
			email: 'admin@example.com',
			password: 'hashedpassword', // Replace with actual hashed password
			role: 'ADMIN',
			admin: {
				create: {
					permissions: 'ALL',
				},
			},
		},
	});
	console.log('admin created');

	// Create Doctor User
	const doctorUser = await prisma.user.create({
		data: {
			name: 'Dr. Jane Smith',
			email: 'doctor@example.com',
			password: 'hashedpassword',
			role: 'DOCTOR',
			doctor: {
				create: {
					specialization: 'Cardiology',
				},
			},
		},
	});
	console.log('doctor created');

	// Create Patient User
	const patientUser = await prisma.user.create({
		data: {
			name: 'John Doe',
			email: 'patient@example.com',
			password: 'hashedpassword',
			role: 'PATIENT',
			patientProfile: {
				create: {
					fullName: 'John Doe',
					dateOfBirth: new Date('1990-05-10'),
					gender: 'Male',
					phone: '123-456-7890',
					address: '123 Main Street',
					emergencyContact: 'Jane Doe - 321-654-0987',
					insuranceDetails: 'ABC Insurance, Plan X',
					doctor: {
						connect: { id: doctorUser.id },
					},
				},
			},
		},
	});
	console.log('patient created');

	//Getting patient id
	const patientProfile = await prisma.patient.findUnique({
		where: { userId: patientUser.id },
	});

	//Getting doctor id
	const doctorProfile = await prisma.doctor.findUnique({
		where: { userId: doctorUser.id },
	});

	// Create Medical Record + Prescription
	const medicalRecord = await prisma.medicalRecord.create({
		data: {
			diagnosis: 'Hypertension',
			notes: 'Blood pressure slightly elevated.',
			doctorId: doctorProfile.id,
			patientId: patientProfile.id,
			prescriptions: {
				create: [
					{
						name: 'Lisinopril',
						dosage: '10mg',
						frequency: 'Once daily',
					},
				],
			},
		},
	});
	console.log('medical records created');

	console.log('Seed complete!');
}

main()
	.then(async () => await prisma.$disconnect())
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
