import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const addNewDiagnose = async (req, res) => {
	try {
		const { name } = req.body;

		const newDiagnose = await prisma.diagnosis.create({
			data: {
				name,
			},
		});

		res.status(201).json({
			message: 'New diagnose added successfully',
			diagnose: newDiagnose,
		});
	} catch (error) {
		res.status(500).json({
			message: 'Failed to add the new diagnose',
			error: error.message,
		});
	}
};

export const getAllDiagnosis = async (req, res) => {
	try {
		const allDiagnosis = await prisma.diagnosis.findMany({
			orderBy: {
				name: 'asc',
			},
		});
		res.status(200).json(allDiagnosis);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const searchDiagnose = async (req, res) => {
	const { query } = req.query;
	try {
		const diagnose = await prisma.diagnosis.findMany({
			where: {
				name: {
					contains: query,
					mode: 'insensitive',
				},
			},
		});
		res.status(200).json(diagnose);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateDiagnose = async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	try {
		const diagnose = await prisma.diagnosis.update({
			where: { id },
			data: {
				name,
			},
		});
		res.status(200).json(diagnose);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

export const deleteDiagnose = async (req, res) => {
	const { id } = req.params;

	try {
		await prisma.diagnosis.delete({
			where: { id },
		});
		res.json({ message: 'Diagnose deleted successfully' });
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};
