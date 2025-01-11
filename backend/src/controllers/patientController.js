const Patient = require('../models/Patient');

// Get All Patients
const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a New Patient
const addPatient = async (req, res) => {
    const { name, age, disease } = req.body;

    if (!name || !age || !disease) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const patient = new Patient({ name, age, disease });
        await patient.save();
        res.status(201).json(patient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getPatients, addPatient };
