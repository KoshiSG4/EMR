const express = require('express');
const router = express.Router();
const {
	authenticateToken,
	authorizedRoles,
} = require('../middleware/authMiddleware');
const doctorController = require('../controllers/doctorController');

router.post(
	'/',
	authenticateToken,
	authorizedRoles('DOCTOR', 'ADMIN'),
	doctorController.createDoctor
);
router.get(
	'/',
	authenticateToken,
	authorizedRoles('ADMIN'),
	doctorController.getAllDoctors
);
router.get(
	'/:id',
	authenticateToken,
	authorizedRoles('ADMIN'),
	doctorController.getDoctorById
);

router.get(
	'/me',
	authenticateToken,
	authorizedRoles('DOCTOR'),
	doctorController.getOwnDoctorProfile
);

module.exports = router;
