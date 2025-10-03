import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const addMedicalRecord = async (req, res) => {
	try {
		const {
			notes,
			createdAt,
			status,
			type,
			patientId,
			diagnosisId,
			doctorId,
			clinicalDetailsId,
		} = req.body;

		const newMedicalRecord = await prisma.medicalRecord.create({
			data: {
				notes,
				status,
				type,
				diagnosisId,
				doctorId,
				createdAt: new Date(createdAt),
				updatedDate: new Date(updatedDate),
				patientId,
				clinicalDetailsId,
			},
		});

		res.status(201).json({
			message: 'New medical record added successfully',
			newMedicalRecord,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getAllMedicalRecords = async (req, res) => {
	try {
		const allMedicalRecords = await prisma.medicalRecord.findMany({
			orderBy: {
				diagnosis: {
					name: 'asc',
				},
			},
			include: {
				diagnosis: true,
				prescriptions: true,
				labTests: true,
				vitalsRecords: true,
				clinicalDetails: true,
			},
		});
		res.status(200).json(allMedicalRecords);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getSelectedMedicalRecords = async (req, res) => {
	const { id } = req.params;

	try {
		const MedicalRecords = await prisma.medicalRecord.findMany({
			where: { patientId: id },
			include: {
				doctor: {
					select: {
						user: true,
					},
				},
				diagnosis: true,
				prescriptions: true,
				labTests: true,
				vitalsRecords: true,
				clinicalDetails: true,
			},
		});

		if (MedicalRecords.length === 0) {
			return res
				.status(404)
				.json({ message: 'No matching records found' });
		}

		res.json(MedicalRecords);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateSelectedMedicalRecord = async (req, res) => {
	const { id } = req.params;
	const { notes, status, type } = req.body;
	try {
		const MedicalRecord = await prisma.medicalRecord.update({
			where: { id: id },
			select: {
				notes,
				status,
				type,
			},
		});
		res.status(200).json({
			message: 'Medical Record updated successfully',
			MedicalRecord,
		});
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

export const searchMedicalRecord = async (req, res) => {
	const { query } = req.query;

	try {
		const MedicalRecord = await prisma.medicalRecord.findMany({
			where: {
				OR: [
					{
						date: {
							contains: query,
						},
					},
					{
						recordedBy: {
							contains: query,
							mode: 'insensitive',
						},
					},
				],
			},
			include: {
				medicalRecords: true,
				clinicalDetails: true,
			},
		});

		if (MedicalRecord.length === 0) {
			return res
				.status(404)
				.json({ message: 'No matching records found' });
		}

		res.json(MedicalRecord);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};
