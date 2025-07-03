import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const createMedicalRecord = async (req, res) => {
	const { patientId, diagnosis, notes, prescriptions } = res.body;
	const doctorId = req.user.userId;

	try {
		const medicalRecord = await prisma.medicalRecord.create({
			data: {
				patientId,
				doctorId,
				diagnosis,
				notes,
				prescriptions: {
					create: prescriptions,
				},
			},
			include: {
				prescriptions: true,
			},
		});
		res.status(200).json(medicalRecord);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
