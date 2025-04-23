const { PrismaClient } = require('../generated/prisma');
const { use } = require('../routes/auth');
const prisma = new PrismaClient();

exports.createPatient = async (req, res) => {
	const { name, age, gender, contact, diagnosis, userId } = req.body;
	const doctorId = req.user.userId;

	try {
		const patient = await prisma.patient.create({
			data: {
				name,
				age,
				gender,
				contact,
				diagnosis,
				doctorId,
				userId,
			},
		});

		res.status(201).json(patient);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getAllPatients = async (req, res) => {
	const { role, userId } = req.user;

	try {
		let patients;

		if (role === 'DOCTOR') {
			patients = await prisma.patient.findMany({
				where: { doctorId: userId },
				include: {
					user: true,
					doctor: {
						select: {
							id: true,
							name: true,
							email: true,
						},
					},
				},
			});
		} else if (role === 'ADMIN') {
			patients = await prisma.patient.findMany({
				include: {
					user: true,
					doctor: {
						select: {
							id: true,
							name: true,
							email: true,
						},
					},
				},
			});
		} else {
			return res.status(403).json({ message: 'Access denied' });
		}

		res.json(patients);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getPatientById = async (req, res) => {
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

exports.getOwnPatientProfile = async (req, res) => {
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

exports.updatePatient = async (req, res) => {
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

exports.deletePatient = async (req, res) => {
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
