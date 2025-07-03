import express from 'express';
import { keycloak } from '../keycloak/keycloak.js';
import * as adminController from '../controllers/adminController.js';
import { createUser } from '../controllers/userController.js';

export const adminRouter = express.Router();

adminRouter.post('/create', keycloak.protect('realm:ADMIN'), createUser);
adminRouter.get(
	'/get',
	keycloak.protect('realm:ADMIN'),
	adminController.getAllAdmins
);
adminRouter.get(
	'/me',
	keycloak.protect('realm:ADMIN'),
	adminController.getOwnAdminProfile
);
adminRouter.get(
	'/:id',
	keycloak.protect('realm:ADMIN'),
	adminController.getAdminById
);
