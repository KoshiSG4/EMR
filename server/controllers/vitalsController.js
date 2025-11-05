import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const addVitalsRecord = async (req, res) => {
	try {
		const {
			height,
			weight,
			bloodPressure,
			heartRate,
			respiratoryRate,
			temperature,
			spo2,
			painScore,
			recordedBy,
			createdDate,
			updatedDate,
			patientId,
			medicalRecordId,
			clinicalDetailsId,
		} = req.body;

		const newVitalsRecord = await prisma.vitalsRecord.create({
			data: {
				height,
				weight,
				bloodPressure,
				heartRate,
				respiratoryRate,
				temperature,
				spo2,
				painScore,
				recordedBy,
				createdDate: new Date(createdDate),
				updatedDate: new Date(updatedDate),
				patientId,
				medicalRecordId,
				clinicalDetailsId,
			},
		});

		res.status(201).json({
			message: 'New vitals record added successfully',
			newVitalsRecord,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getAllVitalsRecords = async (req, res) => {
	try {
		const allVitalsRecords = await prisma.vitalsRecord.findMany({
			orderBy: { fullName: 'asc' },
			include: {
				medicalRecords: true,
				clinicalDetails: true,
			},
		});
		res.status(200).json(allVitalsRecords);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getSelectedVitalsRecords = async (req, res) => {
	const { id } = req.params;

	try {
		const vitalsRecords = await prisma.vitalsRecord.findMany({
			where: { patientId: id },
			// include: {
			// 	medicalRecords: true,
			// 	clinicalDetails: true,
			// },
		});

		if (vitalsRecords.length === 0) {
			return res
				.status(404)
				.json({ message: 'No matching records found' });
		}

		res.json(vitalsRecords);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateSelectedVitalRecord = async (req, res) => {
	const { id } = req.params;
	const {
		height,
		weight,
		bloodPressure,
		heartRate,
		respiratoryRate,
		temperature,
		spo2,
		painScore,
		updatedDate,
	} = req.body;
	try {
		const vitalsRecord = await prisma.vitalsRecord.update({
			where: { id: id },
			select: {
				height,
				weight,
				bloodPressure,
				heartRate,
				respiratoryRate,
				temperature,
				spo2,
				painScore,
				updatedDate: new Date(updatedDate),
			},
		});
		res.status(200).json({
			message: 'Vitals Record updated successfully',
			vitalsRecord,
		});
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

export const searchVitalsRecord = async (req, res) => {
	const { query } = req.query;

	try {
		const vitalsRecord = await prisma.vitalsRecord.findMany({
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

		if (vitalsRecord.length === 0) {
			return res
				.status(404)
				.json({ message: 'No matching records found' });
		}

		res.json(vitalsRecord);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};
