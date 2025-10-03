import express from 'express';
import * as vitalsController from '../controllers/vitalsController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';

export const vitalsRecordsRouter = express.Router();

vitalsRecordsRouter.post(
	'/add',
	authenticateToken,
	withRole(['ADMIN', 'NURSE', 'DOCTOR']),
	vitalsController.addVitalsRecord
);
vitalsRecordsRouter.get(
	'/search',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	vitalsController.searchVitalsRecord
);
vitalsRecordsRouter.get(
	'/getAll',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	vitalsController.getAllVitalsRecords
);
vitalsRecordsRouter.put(
	'/:id/update',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	vitalsController.updateSelectedVitalRecord
);
vitalsRecordsRouter.get(
	'/:id/getRecords',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE', 'PATIENT']),
	vitalsController.getSelectedVitalsRecords
);
