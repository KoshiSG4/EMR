import express from 'express';
import * as doctorController from '../controllers/doctorController.js';
import { keycloak } from '../keycloak/keycloak.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';

export const doctorRouter = express.Router();

doctorRouter.get(
	'/',
	authenticateToken,
	withRole(['ADMIN']),
	doctorController.getAllDoctors
);
doctorRouter.get(
	'/me',
	authenticateToken,
	withRole(['ADMIN']),
	doctorController.getOwnDoctorProfile
);
doctorRouter.get(
	'/:id',
	authenticateToken,
	withRole(['ADMIN']),
	doctorController.getDoctorById
);
