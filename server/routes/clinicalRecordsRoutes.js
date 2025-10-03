import express from 'express';
import * as clinicalDetailsController from '../controllers/clinicalDetailsController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';

export const clinicalDetailRouter = express.Router();

clinicalDetailRouter.post(
	'/add',
	authenticateToken,
	withRole(['ADMIN', 'NURSE', 'DOCTOR']),
	clinicalDetailsController.addClinicalRecord
);
clinicalDetailRouter.get(
	'/search',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	clinicalDetailsController.searchClinicalRecord
);
clinicalDetailRouter.get(
	'/getAll',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	clinicalDetailsController.getAllClinicalRecords
);
clinicalDetailRouter.put(
	'/:id/update',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	clinicalDetailsController.updateSelectedClinicalRecord
);
clinicalDetailRouter.get(
	'/:id/getRecord',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE', 'PATIENT']),
	clinicalDetailsController.getSelectedPatientsClinicalRecords
);
