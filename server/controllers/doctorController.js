const { PrismaClient } = require('../generated/prisma');
const { use } = require('../routes/auth');
const prisma = new PrismaClient();

exports.createDoctor = async (req, res) => {
	const { userId, specialization } = req.body;

	try {
		const user = await prisma.user.findUnique({ where: { id: userId } });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		if (user.role !== 'DOCTOR') {
			return res
				.status(400)
				.json({ message: 'User is not assigned the DOCTOR role' });
		}

		const doctor = await prisma.doctor.create({
			data: {
				userId,
				specialization,
			},
		});

		res.status(201).json({ message: 'Doctor profile created', doctor });
	} catch (error) {
		res.status(500).json({
			message: 'Failed to create doctor profile',
			error: error.message,
		});
	}
};

exports.getAllDoctors = async (req, res) => {
	try {
		const doctors = await prisma.doctor.findMany({
			include: {
				user: true,
			},
		});

		res.status(200).json(doctors);
	} catch (error) {
		res.status(500).json({ message: 'Unauthorized', error: error.message });
	}
};

exports.getDoctorById = async (req, res) => {
	const { id } = req.params;

	try {
		const doctor = await prisma.findUnique({
			where: { id: parseInt(id) },
			include: {
				user: true,
			},
		});

		if (!doctor)
			return res.status(404).json({ message: 'Doctor not found' });

		res.status(200).json(doctor);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getOwnDoctorProfile = async (req, res) => {
	try {
		const doctor = await prisma.doctor.findUnique({
			where: {
				userId: req.user.userId,
			},
			include: {
				user: true,
				user: {
					name: true,
					email: true,
				},
			},
			user: {
				select: {
					patients: {
						select: {
							id: true,
							name: true,
							age: true,
							gender: true,
							contact: true,
							diagnosis: true,
							createdAt: true,
						},
					},
				},
			},
		});

		if (!doctor) {
			return res
				.status(404)
				.json({ message: 'Doctor profile not found' });
		}
		res.json(doctor);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

exports.updateDoctor = async (req, res) => {
	const { id } = req.params;
	const { specialization } = req.body;
	try {
		const doctor = await prisma.doctor.update({
			where: { id: parseInt(id) },
			data: { specialization },
			include: { user: true },
		});
		res.status(200).json(doctor);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

exports.deleteDoctor = async (req, res) => {
	const { id } = req.params;

	try {
		await prisma.doctor.delete({
			where: { id: parseInt(id) },
		});
		res.json({ message: 'Doctor deleted successfully' });
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};
