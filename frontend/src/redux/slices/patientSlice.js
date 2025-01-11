// src/redux/slices/patientSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchPatients = createAsyncThunk('patient/fetchPatients', async () => {
    const response = await api.get('/patients');
    return response.data;
});

export const addPatient = createAsyncThunk('patient/addPatient', async (patient) => {
    const response = await api.post('/patients', patient);
    return response.data;
});

const patientSlice = createSlice({
    name: 'patient',
    initialState: {
        patients: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPatients.fulfilled, (state, action) => {
                state.patients = action.payload;
                state.loading = false;
            })
            .addCase(fetchPatients.pending, (state) => {
                state.loading = true;
            })
            .addCase(addPatient.fulfilled, (state, action) => {
                state.patients.push(action.payload);
                state.loading = false;
            });
    },
});

export default patientSlice.reducer;
