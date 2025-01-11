const express = require('express');
const { getPatients, addPatient } = require('../controllers/patientController');
const router = express.Router();

router.route('/').get(getPatients).post(addPatient);

module.exports = router;
