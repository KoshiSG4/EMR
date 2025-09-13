import { PrismaClient } from '../generated/prisma/client.js';

//View Test Requests
export const getTestRequests = async (req, res) => {
	const tests = await prisma.labTest.findMany({
		where: { status: 'PENDING' },
		include: { patient: true, doctor: true },
	});
	res.json(tests);
};

//Accept Samples
export const acceptSample = async (req, res) => {
	const { testId } = req.body;
	const updated = await prisma.labTest.update({
		where: { id: testId },
		data: { status: 'ACCEPTED', acceptedAt: new Date() },
	});
	res.json(updated);
};

//Enter Test Results
export const enterTestResults = async (req, res) => {
	const { testId, result } = req.body;
	const updated = await prisma.labTest.update({
		where: { id: testId },
		data: { result, status: 'RESULT_ENTERED' },
	});
	res.json(updated);
};

//Validate + Authorize
export const validateResult = async (req, res) => {
	const { testId } = req.body;
	const updated = await prisma.labTest.update({
		where: { id: testId },
		data: { status: 'VALIDATED', validatedAt: new Date() },
	});
	res.json(updated);
};

// Release Reports
export const releaseReport = async (req, res) => {
	const { testId } = req.body;
	const updated = await prisma.labTest.update({
		where: { id: testId },
		data: { status: 'RELEASED', releasedAt: new Date() },
	});
	res.json(updated);
};
