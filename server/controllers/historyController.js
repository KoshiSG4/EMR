import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const addNewHistoryRecord = async (req, res) => {
	try {
		const {
			patientId,
			chronicConditions,
			pastIllnesses,
			surgeries,
			hospitalizations,
			familyHistory,
			smokingStatus,
			alcoholUse,
			drugUse,
			occupation,
			lifestyle,
			allergies,
			obstetricHistory,
			menstrualHistroy,
			immunizations,
			createdAt,
			updatedAt,
		} = req.body;

		const newHistoryRecord = await prisma.history.create({
			data: {
				patientId,
				chronicConditions,
				pastIllnesses,
				surgeries,
				hospitalizations,
				familyHistory,
				smokingStatus,
				alcoholUse,
				drugUse,
				occupation,
				lifestyle,
				allergies,
				obstetricHistory,
				menstrualHistroy,
				immunizations,
				createdAt: new Date(createdAt),
				updatedAt: new Date(updatedAt),
			},
		});

		res.status(201).json({
			message: 'New history record added successfully',
			HistoryRecord: newHistoryRecord,
		});
	} catch (error) {
		res.status(500).json({
			message: 'Failed to add the new history record',
			error: error.message,
		});
	}
};

export const getAllHistoryRecords = async (req, res) => {
	try {
		const { patientId } = req.params;
		const allHistoryRecords = await prisma.history.findMany({
			where: { patientId },
			orderBy: {
				createdAt: 'asc',
			},
		});
		res.status(200).json(allHistoryRecords);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const searchHistoryRecord = async (req, res) => {
	const { query } = req.query;
	try {
		const HistoryRecord = await prisma.history.findMany({
			where: {
				chronicConditions: {
					contains: query,
					mode: 'insensitive',
				},
			},
		});
		res.status(200).json(HistoryRecord);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateHistoryRecord = async (req, res) => {
	const { id } = req.params;
	const {
		chronicConditions,
		pastIllnesses,
		surgeries,
		hospitalizations,
		familyHistory,
		smokingStatus,
		alcoholUse,
		drugUse,
		occupation,
		lifestyle,
		allergies,
		obstetricHistory,
		menstrualHistroy,
		immunizations,
		updatedAt,
	} = req.body;

	try {
		const HistoryRecord = await prisma.history.update({
			where: { id },
			data: {
				chronicConditions,
				pastIllnesses,
				surgeries,
				hospitalizations,
				familyHistory,
				smokingStatus,
				alcoholUse,
				drugUse,
				occupation,
				lifestyle,
				allergies,
				obstetricHistory,
				menstrualHistroy,
				immunizations,
				updatedAt: new Date(updatedAt),
			},
		});
		res.status(200).json(HistoryRecord);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};
