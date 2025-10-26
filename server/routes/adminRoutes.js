import express from 'express';
import { withRole } from '../middleware/roleMiddleware.js';
import * as adminController from '../controllers/adminController.js';
import { createUser } from '../controllers/userController.js';

export const adminRouter = express.Router();

adminRouter.post('/create', withRole(['ADMIN']), createUser);

adminRouter.get('/get', withRole(['ADMIN']), adminController.getAllAdmins);
adminRouter.get('/getAll', withRole(['ADMIN']), adminController.getAllUsers);
adminRouter.get('/me', withRole(['ADMIN']), adminController.getOwnAdminProfile);
adminRouter.get('/:id', withRole(['ADMIN']), adminController.getAdminById);
