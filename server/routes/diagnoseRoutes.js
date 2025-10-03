import express from 'express';
import * as diagnoseController from '../controllers/diagnoseController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';

export const diagnoseRouter = express.Router();

diagnoseRouter.post(
	'/add',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	diagnoseController.addNewDiagnose
);

diagnoseRouter.get(
	'/getAll',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	diagnoseController.getAllDiagnosis
);

diagnoseRouter.get(
	'/search',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	diagnoseController.searchDiagnose
);

diagnoseRouter.put(
	'/:id/update',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	diagnoseController.updateDiagnose
);

diagnoseRouter.delete(
	'/:id/delete',
	authenticateToken,
	withRole(['ADMIN']),
	diagnoseController.deleteDiagnose
);
