import { PrismaClient } from '../generated/prisma/client.js';
import {
	kcAdminClient,
	authenticateKcAdmin,
} from '../keycloak/kcAdminClient.js';

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
				records: true,
				patientMedication: true,
				doctor: {
					select: {
						name: true,
					},
				},
				user: {
					select: {
						email: true,
					},
				},
			},
		});
		console.log('all Patients: ', allPatients);
		res.status(200).json(allPatients);
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
	const { name, age, gender, contact, diagnosis } = req.body;
	try {
		const patient = await prisma.patient.update({
			where: { id: parseInt(id) },
			data: { name, age, gender, contact, diagnosis },
			include: { user: true, doctor: true },
		});
		res.status(200).json([patient]);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

export const deletePatient = async (req, res) => {
	const { id } = req.params;

	try {
		await prisma.patient.delete({
			where: { id: parseInt(id) },
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

		console.log(patient);
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
