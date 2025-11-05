import { PrismaClient } from '../generated/prisma/client.js';

const prisma = new PrismaClient();

export const addLabRequest = async (req, res) => {
	try {
		const {
			testType,
			testCode,
			department,
			priority,
			doctorId,
			patientId,
			medicalRecordId,
			clinicalDetailsId,
			specimenType,
			specimenId,
			specimenCollectedAt,
			status,
			requestedAt,
			acceptedAt,
			cancelledAt,
			cancelledBy,
			reasonForCancellation,
			results: { parameter, value, unit, referenceRange, interpretation },
			validatedAt,
			validatedBy,
			releasedAt,
			billingCode,
			cost,
			coveredByInsurance,
			orderNotes,
		} = req.body;

		const newLabRequest = await prisma.labTest.create({
			data: {
				testType,
				testCode,
				department,
				priority,
				doctorId,
				patientId,
				medicalRecordId,
				clinicalDetailsId,
				specimenType,
				specimenId,
				specimenCollectedAt: specimenCollectedAt
					? new Date(specimenCollectedAt)
					: null,
				status,
				requestedAt: requestedAt ? new Date(requestedAt) : undefined,
				acceptedAt: acceptedAt ? new Date(acceptedAt) : null,
				cancelledAt: cancelledAt ? new Date(cancelledAt) : null,
				cancelledBy,
				reasonForCancellation,
				results: results ?? null,
				validatedAt: validatedAt ? new Date(validatedAt) : null,
				validatedBy,
				releasedAt: releasedAt ? new Date(releasedAt) : null,
				billingCode,
				cost: cost !== undefined ? parseFloat(cost) : null,
				coveredByInsurance: coveredByInsurance ?? false,
				orderNotes,
			},
		});

		res.status(201).json({
			message: 'New lab test request added successfully',
			LabTestRequest: newLabRequest,
		});
	} catch (error) {
		res.status(500).json({
			message: 'Failed to request the lab test',
			error: error.message,
		});
	}
};

export const getAllLabRequests = async (req, res) => {
	try {
		const allLabRequests = await prisma.labTest.findMany({
			orderBy: {
				createdAt: 'asc',
			},
			include: {
				doctor: {
					select: {
						user: {
							select: {
								name: true,
							},
						},
					},
				},
				patient: {
					select: {
						fullName: true,
					},
				},
			},
		});

		res.status(200).json(allLabRequests);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
export const getSelectedPatientsLabTests = async (req, res) => {
	try {
		const { id } = req.params;
		const allLabRequests = await prisma.labTest.findMany({
			where: { patientId: id },
			orderBy: {
				createdAt: 'asc',
			},
			include: {
				doctor: {
					select: {
						user: {
							select: {
								name: true,
							},
						},
					},
				},
				patient: {
					select: {
						fullName: true,
					},
				},
			},
		});

		res.status(200).json(allLabRequests);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const searchLabRequest = async (req, res) => {
	const { query } = req.query;
	try {
		const labRequest = await prisma.labTest.findMany({
			where: {
				testType: {
					contains: query,
					mode: 'insensitive',
				},
			},
		});
		res.status(200).json(labRequest);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateLabRequest = async (req, res) => {
	const { id } = req.params;
	const {
		testType,
		testCode,
		department,
		priority,
		doctorId,
		patientId,
		medicalRecordId,
		clinicalDetailsId,
		specimenType,
		specimenId,
		specimenCollectedAt,
		status,
		requestedAt,
		acceptedAt,
		cancelledAt,
		cancelledBy,
		reasonForCancellation,
		results: { parameter, value, unit, referenceRange, interpretation },
		validatedAt,
		validatedBy,
		releasedAt,
		billingCode,
		cost,
		coveredByInsurance,
		orderNotes,
	} = req.body;

	try {
		const labRequest = await prisma.labTest.update({
			where: { id },
			data: {
				testType,
				testCode,
				department,
				priority,
				doctorId,
				patientId,
				medicalRecordId,
				clinicalDetailsId,
				specimenType,
				specimenId,
				specimenCollectedAt: specimenCollectedAt
					? new Date(specimenCollectedAt)
					: null,
				status,
				requestedAt: requestedAt ? new Date(requestedAt) : undefined,
				acceptedAt: acceptedAt ? new Date(acceptedAt) : null,
				cancelledAt: cancelledAt ? new Date(cancelledAt) : null,
				cancelledBy,
				reasonForCancellation,
				results: results ?? null,
				validatedAt: validatedAt ? new Date(validatedAt) : null,
				validatedBy,
				releasedAt: releasedAt ? new Date(releasedAt) : null,
				billingCode,
				cost: cost !== undefined ? parseFloat(cost) : null,
				coveredByInsurance: coveredByInsurance ?? false,
				orderNotes,
			},
		});
		res.status(200).json(labRequest);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};
