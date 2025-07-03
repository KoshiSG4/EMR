import express from 'express';
import { keycloak } from '../keycloak/keycloak.js';
import * as patientController from '../controllers/patientController.js';

export const patientRouter = express.Router();

patientRouter.post(
	'/',
	keycloak.protect('realm:PATIENT,ADMIN'),
	patientController.createPatient
);
patientRouter.get(
	'/',
	keycloak.protect('realm:ADMIN,DOCTOR'),
	patientController.getAllPatients
);
patientRouter.get(
	'/me',
	keycloak.protect('realm:PATIENT'),
	patientController.getOwnPatientProfile
);
patientRouter.get(
	'/:id',
	keycloak.protect('realm:ADMIN,DOCTOR'),
	patientController.getPatientById
);
