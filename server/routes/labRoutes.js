import express from 'express';
import * as labController from '../controllers/labController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';

export const labRouter = express.Router();

labRouter.post(
	'/add',
	authenticateToken,
	withRole(['DOCTOR', 'NURSE']),
	labController.addLabRequest
);

labRouter.get(
	'/getAll',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	labController.getAllLabRequests
);

labRouter.get(
	'/search',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	labController.searchLabRequest
);

labRouter.put(
	'/:id/update',
	authenticateToken,
	withRole(['DOCTOR', 'NURSE']),
	labController.updateLabRequest
);
