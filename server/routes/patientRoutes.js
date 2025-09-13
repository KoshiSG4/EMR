import express from 'express';
import { keycloak } from '../keycloak/keycloak.js';
import * as patientController from '../controllers/patientController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';

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

patientRouter.get(
	'/:id/medications',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR']),
	patientController.getPatientMedications
);
patientRouter.get(
	'/:id',
	authenticateToken,
	withRole(['ADMIN']),
	patientController.getPatientById
);
