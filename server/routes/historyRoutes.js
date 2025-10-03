import express from 'express';
import * as historyController from '../controllers/historyController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { withRole } from '../middleware/roleMiddleware.js';

export const historyRouter = express.Router();

historyRouter.post(
	'/add',
	authenticateToken,
	withRole(['DOCTOR', 'NURSE']),
	historyController.addNewHistoryRecord
);

historyRouter.get(
	'/search',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	historyController.searchHistoryRecord
);

historyRouter.put(
	'/:id/update',
	authenticateToken,
	withRole(['DOCTOR', 'NURSE']),
	historyController.updateHistoryRecord
);

historyRouter.get(
	'/:id/getAll',
	authenticateToken,
	withRole(['ADMIN', 'DOCTOR', 'NURSE']),
	historyController.getAllHistoryRecords
);
