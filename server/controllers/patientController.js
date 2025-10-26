import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const createPatient = async (req, res) => {
	try {
		const {
			fullName,
			dateOfBirth,
			gender,
			email,
			phone,
			address,
			emergencyContact,
			insuranceDetails,
			userId,
		} = req.body;
		await authenticateKcAdmin();
		const newUser = await kcAdminClient.users.create({
			realm: process.env.KEYCLOAK_REALM,
			userName: email,
			email: email,
			enabled: true,
			credentials: [
				{
					type: 'password',
					value: 'TempPassword123',
					temporary: true,
				},
			],
		});

		const patientRole = await kcAdminClient.roles.findOneByName({
			realm: process.env.KEYCLOAK_REALM,
			name: 'patient',
		});
		await kcAdminClient.users.addRealmRoleMappings({
			id: newUser.id,
			realm: process.env.KEYCLOAK_REALM,
			roles: [{ id: patientRole.id, name: 'patient' }],
		});

		const patient = await prisma.patient.create({
			data: {
				fullName,
				dateOfBirth: new Date(dateOfBirth),
				gender,
				email,
				phone,
				address,
				emergencyContact,
				insuranceDetails,
				userId,
			},
		});

		res.status(201).json({
			message: 'Patient created successfully',
			patient,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getAllPatients = async (req, res) => {
	try {
		const allPatients = await prisma.patient.findMany({
			orderBy: { fullName: 'asc' },
			include: {
				records: {
					include: {
						diagnosis: true,
						labTests: true,
						prescriptions: true,
						patient: true,
						doctor: true,
					},
				},
				patientMedication: true,
				doctors: {
					include: {
						user: true,
					},
				},
				user: true,
			},
		});
		const formattedPatients = allPatients.map((patient) => ({
			...patient,
			dateOfBirth: patient.dateOfBirth
				? patient.dateOfBirth.toISOString().split('T')[0]
				: null,
			records: patient.records.map((record) => ({
				...record,
				createdAt: record.createdAt
					? record.createdAt.toISOString().split('T')[0]
					: null,
			})),
		}));
		res.status(200).json(formattedPatients);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getPatientById = async (req, res) => {
	const { id } = req.params;

	try {
		const patient = await prisma.findUnique({
			where: { id },
			include: {
				user: true,
				doctor: true,
			},
		});

		if (!patient)
			return res.status(404).json({ message: 'Patient not found' });

		res.json(patient);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getOwnPatientProfile = async (req, res) => {
	try {
		const patient = await prisma.patient.findUnique({
			where: {
				userId: req.user.userId,
			},
			include: {
				user: {
					select: {
						name: true,
						email: true,
						createdAt: true,
					},
				},
				doctor: {
					select: {
						name: true,
						email: true,
					},
				},
			},
		});

		if (!patient) {
			return res
				.status(404)
				.json({ message: 'Patient profile not found' });
		}

		res.json(patient);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

export const updatePatient = async (req, res) => {
	const { id } = req.params;
	const {
		fullName,
		dateOfBirth,
		gender,
		phone,
		address,
		emergencyContact,
		insuranceDetails,
		doctors,
		user,
		records,
		patientMedication,
	} = req.body;
	try {
		const data = {};
		if (fullName !== undefined) data.fullName = fullName;
		if (dateOfBirth !== undefined && dateOfBirth !== '')
			data.dateOfBirth = new Date(dateOfBirth);
		if (gender !== undefined) data.gender = gender;
		if (phone !== undefined) data.phone = phone;
		if (address !== undefined) data.address = address;
		if (emergencyContact !== undefined)
			data.emergencyContact = emergencyContact;
		if (insuranceDetails !== undefined)
			data.insuranceDetails = insuranceDetails;

		// doctor update
		if (Array.isArray(doctors)) {
			const doctorConnects = doctors.map((d) =>
				typeof d === 'string' ? { userId: d } : { userId: d.userId }
			);
			data.doctors = { set: doctorConnects };
		}

		// user update
		if (user && (user.name !== undefined || user.email !== undefined)) {
			data.user = {
				update: {},
			};
			if (user.name !== undefined) data.user.update.name = user.name;
			if (user.email !== undefined) data.user.update.email = user.email;
		}

		// records update
		if (Array.isArray(records)) {
			data.records = {
				connect: records.map((r) =>
					typeof r === 'string' ? { id: r } : { id: r.id }
				),
			};
		}

		// patient medication update
		if (Array.isArray(patientMedication)) {
			data.patientMedication = {
				connect: patientMedication.map((pm) =>
					typeof pm === 'string' ? { id: pm } : { id: pm.id }
				),
			};
		}

		const patient = await prisma.patient.update({
			where: { userId: id },
			data,
			include: {
				user: true,
				doctors: true,
				patientMedication: true,
				records: true,
			},
		});
		res.status(200).json({
			message: 'Patient updated successfully',
			patient,
		});
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

export const deactivatePatient = async (req, res) => {
	const { id } = req.params;

	try {
		await prisma.patient.delete({
			where: { userId: id },
		});
		res.json({ message: 'Patient deleted successfully' });
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

export const getPatientMedications = async (req, res) => {
	const { id } = req.params;
	try {
		const patient = await prisma.patient.findUnique({
			where: { userId: id },
			include: {
				medications: true,
				records: true,
			},
		});

		if (!patient)
			return res.status(404).json({ message: 'Patient not found' });
		res.json({ patient });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const searchPatients = async (req, res) => {
	const { query } = req.query;

	try {
		const patients = await prisma.patient.findMany({
			where: {
				user: {
					OR: [
						{
							name: {
								contains: query,
								mode: 'insensitive',
							},
						},
						{
							email: {
								contains: query,
								mode: 'insensitive',
							},
						},
					],
				},
			},
			select: {
				userId: true,
				user: {
					select: {
						name: true,
						email: true,
					},
				},
				dateOfBirth: true,
				gender: true,
				medications: true,
				records: true,
			},
		});

		if (patients.length === 0) {
			return res
				.status(404)
				.json({ message: 'No matching patients found' });
		}

		res.json(patients);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};
