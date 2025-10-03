import express from 'express';
import * as doctorController from '../controllers/doctorController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';

export const doctorRouter = express.Router();

doctorRouter.post(
	'/create',
	authenticateToken,
	withRole(['ADMIN']),
	doctorController.createDoctor
);
doctorRouter.get(
	'/me',
	authenticateToken,
	withRole(['ADMIN']),
	doctorController.getOwnDoctorProfile
);
doctorRouter.get(
	'/search',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR']),
	doctorController.searchDoctors
);
doctorRouter.get(
	'/getAll',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR']),
	doctorController.getAllDoctors
);
doctorRouter.put(
	'/:id/update',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR']),
	doctorController.updateDoctor
);
doctorRouter.delete(
	'/:id/delete',
	authenticateToken,
	withRole(['ADMIN']),
	doctorController.deleteDoctor
);
doctorRouter.get(
	'/:id',
	authenticateToken,
	withRole(['ADMIN']),
	doctorController.getDoctorById
);
