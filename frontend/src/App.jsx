import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HospitalManagerDashboard from './pages/HospitalManagerDashboard';
import PatientForm from './components/PatientForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Hospital Management System</h1>
        <Routes>
          <Route path="/add-patient" element={<PatientForm />} />
          <Route path="/dashboard" element={<HospitalManagerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
