import express from 'express';
import * as medicalRecordsController from '../controllers/medicalRecordsController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';

export const medicalRecordsRouter = express.Router();

medicalRecordsRouter.get(
	'/search',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	medicalRecordsController.searchMedicalRecord
);
medicalRecordsRouter.get(
	'/getAll',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	medicalRecordsController.getAllMedicalRecords
);
medicalRecordsRouter.post(
	'/:id/add',
	authenticateToken,
	withRole(['NURSE', 'DOCTOR']),
	medicalRecordsController.addMedicalRecord
);
medicalRecordsRouter.put(
	'/:id/update',
	authenticateToken,
	withRole(['DOCTOR', 'NURSE']),
	medicalRecordsController.updateSelectedMedicalRecord
);
medicalRecordsRouter.get(
	'/:id/getRecords',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE', 'PATIENT']),
	medicalRecordsController.getSelectedMedicalRecords
);
