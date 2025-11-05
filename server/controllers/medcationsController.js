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

export const addNewMedications = async (req, res) => {
	try {
		const { name, form, strength } = req.body;

		if (!name || !form || !strength) {
			return res.status(400).json({
				message:
					'Please provide all required fields: name, dosageForm, strength, quantity',
			});
		}

		// Create a new medication
		const newMedication = await prisma.medicationInventory.create({
			data: {
				name,
				form,
				strength,
			},
		});

		res.status(201).json({
			message: 'New medication added successfully',
			medication: newMedication,
		});
	} catch (error) {
		res.status(500).json({
			message: 'Failed to add the new medication',
			error: error.message,
		});
	}
};

export const getAllMedications = async (req, res) => {
	try {
		const allMeds = await prisma.medicationInventory.findMany({
			orderBy: {
				name: 'asc',
			},
		});

		res.status(200).json(allMeds);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const searchMedications = async (req, res) => {
	const { query } = req.query;
	try {
		const medications = await prisma.medicationInventory.findMany({
			where: {
				name: {
					contains: query,
					mode: 'insensitive',
				},
			},
		});
		res.status(200).json(medications);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateMedicationDetails = async (req, res) => {
	const { id } = req.params;
	const {
		name,
		strength,
		quantity,
		form,
		status,
		orderDate,
		expiryDate,
		batchNumber,
		reorderLevel,
		supplier,
		arrivalDate,
		reservedFor,
	} = req.body;

	try {
		const medication = await prisma.medicationInventory.update({
			where: { id },
			data: {
				name,
				strength,
				quantity,
				status,
				supplier,
				expiryDate: expiryDate ? new Date(expiryDate) : null,
				orderDate: orderDate ? new Date(orderDate) : null,
				form,
				arrivalDate: arrivalDate ? new Date(arrivalDate) : null,
				reorderLevel,
				reservedFor,
				batchNumber,
			},
		});
		res.status(200).json(medication);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

export const deleteMedication = async (req, res) => {
	const { id } = req.params;

	try {
		await prisma.medicationInventory.delete({
			where: { id },
		});
		res.json({ message: 'Medication deleted successfully' });
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};
