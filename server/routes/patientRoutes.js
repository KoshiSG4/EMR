import express from 'express';
import { keycloak } from '../keycloak/keycloak.js';
import * as patientController from '../controllers/patientController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';

export const patientRouter = express.Router();

patientRouter.post(
	'/',
	authenticateToken,
	withRole(['ADMIN']),
	patientController.createPatient
);
patientRouter.get(
	'/',
	authenticateToken,
	withRole(['ADMIN']),
	patientController.getAllPatients
);
patientRouter.get(
	'/me',
	authenticateToken,
	withRole(['ADMIN']),
	patientController.getOwnPatientProfile
);
patientRouter.get(
	'/:id',
	authenticateToken,
	withRole(['ADMIN']),
	patientController.getPatientById
);
