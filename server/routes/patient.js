const express = require('express');
const router = express.Router();
const {
	authenticateToken,
	authorizedRoles,
} = require('../middleware/authMiddleware');
const patientController = require('../controllers/patientController');

router.post(
	'/',
	authenticateToken,
	authorizedRoles('PATIENT', 'ADMIN'),
	patientController.createPatient
);
router.get(
	'/',
	authenticateToken,
	authorizedRoles('ADMIN', 'DOCTOR'),
	patientController.getAllPatients
);
router.get(
	'/:id',
	authenticateToken,
	authorizedRoles('ADMIN', 'DOCTOR'),
	patientController.getPatientById
);
router.get(
	'/me',
	authenticateToken,
	authorizedRoles('PATIENT'),
	patientController.getOwnPatientProfile
);

module.exports = router;
