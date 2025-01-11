import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:5000/api',
    // baseURL: 'http://localhost:5000/api',
    baseURL: process.env.React_App_Api || "http://localhost:5000/api"
});

export default api;
