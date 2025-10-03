import express from 'express';
import * as patientController from '../controllers/patientController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';
import { getSelectedPatientsLabTests } from '../controllers/labController.js';

export const patientRouter = express.Router();

patientRouter.post(
	'/create',
	authenticateToken,
	withRole(['ADMIN']),
	patientController.createPatient
);
patientRouter.get(
	'/me',
	authenticateToken,
	withRole(['ADMIN']),
	patientController.getOwnPatientProfile
);
patientRouter.get(
	'/search',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR']),
	patientController.searchPatients
);
patientRouter.get(
	'/getAll',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	patientController.getAllPatients
);
patientRouter.put(
	'/:id/update',
	authenticateToken,
	withRole(['ADMIN']),
	patientController.updatePatient
);
patientRouter.get(
	'/:id/medications',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR']),
	patientController.getPatientMedications
);
patientRouter.delete(
	'/:id/delete',
	authenticateToken,
	withRole(['ADMIN']),
	patientController.deactivatePatient
);
patientRouter.get(
	'/:id',
	authenticateToken,
	withRole(['ADMIN']),
	patientController.getPatientById
);

patientRouter.get(
	'/:id/medical-records/clinical/lab/getAll',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	getSelectedPatientsLabTests
);
