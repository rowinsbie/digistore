import axios from 'axios';
const http = axios.create({
    baseURL:import.meta.env.VITE_baseURL,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('sanctum-token')
    }
});

export default http;