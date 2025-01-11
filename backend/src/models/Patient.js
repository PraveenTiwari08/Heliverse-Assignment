const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
    },
    disease: {
        type: String,
        required: [true, 'Disease is required'],
    },
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
