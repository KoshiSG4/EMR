import { PrismaClient } from '../generated/prisma/client.js';
import { getLoggedInUser } from '../utils/getLoggedInUser.js';

const prisma = new PrismaClient();

export const getAllDoctors = async (req, res) => {
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

export const getDoctorById = async (req, res) => {
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

export const getOwnDoctorProfile = async (req, res) => {
	try {
		const user = await getLoggedInUser(req);
		const doctor = await prisma.doctor.findUnique({
			where: {
				userId: user.id,
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

export const updateDoctor = async (req, res) => {
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

export const deleteDoctor = async (req, res) => {
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
