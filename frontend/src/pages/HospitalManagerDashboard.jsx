import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from '../redux/slices/patientSlice';
import PatientForm from '../components/PatientForm';

const HospitalManagerDashboard = () => {
    const dispatch = useDispatch();
    const { patients, loading } = useSelector((state) => state.patient);

    useEffect(() => {
        dispatch(fetchPatients());
    }, [dispatch]);

    return (
        <div>
            <h1>Hospital Manager Dashboard</h1>
            <PatientForm />
            {loading && <p>Loading...</p>}
            <ul>
                {patients.map((patient) => (
                    <li key={patient._id}>
                        {patient.name} - {patient.age} years old - {patient.disease}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HospitalManagerDashboard;
