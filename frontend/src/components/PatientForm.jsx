import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPatient } from '../redux/slices/patientSlice';

const PatientForm = () => {
    const [form, setForm] = useState({ name: '', age: '', disease: '' });
    const dispatch = useDispatch();
    
    // Access loading and error state safely using optional chaining
    const { loading, error } = useSelector((state) => state.patient || {});

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPatient(form));
        setForm({ name: '', age: '', disease: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Age"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Disease"
                value={form.disease}
                onChange={(e) => setForm({ ...form, disease: e.target.value })}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Adding Patient...' : 'Add Patient'}
            </button>

            {error && <p className="error-message">Error: {error}</p>}  {/* Show error message if any */}
        </form>
    );
};

export default PatientForm;
