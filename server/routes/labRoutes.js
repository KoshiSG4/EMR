import express from 'express';
import * as labController from '../controllers/labController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';

export const labRouter = express.Router();

labRouter.get(
	'/requests',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE', 'PATIENT']),
	labController.getTestRequests
);
labRouter.post(
	'/accept',
	authenticateToken,
	withRole(['DOCTOR', 'NURSE']),
	labController.acceptSample
);
labRouter.post(
	'/results',
	authenticateToken,
	withRole(['DOCTOR', 'NURSE']),
	labController.enterTestResults
);
labRouter.post(
	'/validate',
	authenticateToken,
	withRole(['DOCTOR']),
	labController.validateResult
);
labRouter.post(
	'/release',
	authenticateToken,
	withRole(['DOCTOR']),
	labController.releaseReport
);

export default labRouter;
