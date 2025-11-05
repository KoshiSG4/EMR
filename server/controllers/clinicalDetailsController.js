import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

export const addClinicalRecord = async (req, res) => {
	try {
		const {
			date,
			chiefComplaint,
			hpi,
			allergies,
			notes,
			assessment,
			plan,
			recordedBy,
			patientId,
		} = req.body;

		const newClinicalRecord = await prisma.clinicalDetails.create({
			data: {
				date: new Date(date),
				chiefComplaint,
				hpi,
				allergies,
				notes,
				assessment,
				plan,
				recordedBy,
				patientId,
			},
		});

		res.status(201).json({
			message: 'New clinical record added successfully',
			newClinicalRecord,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getAllClinicalRecords = async (req, res) => {
	try {
		const allClinicalRecords = await prisma.clinicalDetails.findMany({
			orderBy: { fullName: 'asc' },
			include: {
				vitals: true,
				medications: true,
				diagnose: true,
				prescriptions: true,
				labTests: true,
			},
		});
		res.status(200).json(allClinicalRecords);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getSelectedPatientsClinicalRecords = async (req, res) => {
	const { id } = req.params;

	try {
		const clinicalRecords = await prisma.clinicalDetails.findMany({
			where: { patientId: id },
			// include: {
			// 	vitals: true,
			// 	medications: true,
			// 	diagnose: true,
			// 	prescriptions: true,
			// 	labTests: true,
			// },
		});

		if (clinicalRecords.length === 0) {
			return res
				.status(404)
				.json({ message: 'No matching records found' });
		}

		res.status(200).json(clinicalRecords);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateSelectedClinicalRecord = async (req, res) => {
	const { id } = req.params;
	const {
		date,
		chiefComplaint,
		hpi,
		allergies,
		notes,
		assessment,
		plan,
		recordedBy,
		patientId,
	} = req.body;
	try {
		const clinicalRecord = await prisma.clinicalDetails.update({
			where: { id: id },
			select: {
				date: new Date(date),
				chiefComplaint,
				hpi,
				allergies,
				notes,
				assessment,
				plan,
				recordedBy,
				patientId,
			},
		});
		res.status(200).json({
			message: 'Clinical Record updated successfully',
			clinicalRecord,
		});
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

export const searchClinicalRecord = async (req, res) => {
	const { query } = req.query;

	try {
		const clinicalRecord = await prisma.clinicalDetails.findMany({
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
				vitals: true,
				medications: true,
				diagnose: true,
				prescriptions: true,
				labTests: true,
			},
		});

		if (clinicalRecord.length === 0) {
			return res
				.status(404)
				.json({ message: 'No matching records found' });
		}

		res.json(clinicalRecord);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
};
