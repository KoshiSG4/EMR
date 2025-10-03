import express from 'express';
import * as medicationsController from '../controllers/medcationsController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';

export const medicationsRouter = express.Router();

medicationsRouter.post(
	'/add',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	medicationsController.addNewMedications
);

medicationsRouter.get(
	'/getAll',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	medicationsController.getAllMedications
);

medicationsRouter.get(
	'/search',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	medicationsController.searchMedications
);

medicationsRouter.put(
	'/:id',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	medicationsController.updateMedicationDetails
);

medicationsRouter.delete(
	'/:id/delete',
	authenticateToken,
	withRole(['ADMIN']),
	medicationsController.deleteMedication
);
