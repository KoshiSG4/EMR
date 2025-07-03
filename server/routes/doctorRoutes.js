import express from 'express';
import * as doctorController from '../controllers/doctorController.js';
import { keycloak } from '../keycloak/keycloak.js';

export const doctorRouter = express.Router();

doctorRouter.get(
	'/',
	keycloak.protect('realm:ADMIN'),
	doctorController.getAllDoctors
);
doctorRouter.get(
	'/me',
	keycloak.protect('realm:DOCTOR'),
	doctorController.getOwnDoctorProfile
);
doctorRouter.get(
	'/:id',
	keycloak.protect('realm:ADMIN'),
	doctorController.getDoctorById
);
