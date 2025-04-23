const express = require('express');
const router = express.Router();
const {
	authenticateToken,
	authorizedRoles,
} = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');

router.post(
	'/',
	authenticateToken,
	authorizedRoles('ADMIN'),
	adminController.createAdmin
);
router.get(
	'/',
	authenticateToken,
	authorizedRoles('ADMIN'),
	adminController.getAllAdmins
);
router.get(
	'/:id',
	authenticateToken,
	authorizedRoles('ADMIN'),
	adminController.getAdminById
);
router.get(
	'/me',
	authenticateToken,
	authorizedRoles('ADMIN'),
	adminController.getOwnAdminProfile
);

module.exports = router;
