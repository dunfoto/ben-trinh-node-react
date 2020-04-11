import axios from 'axios';

const services = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://ben-trinh-api.herokuapp.com'
})

services.interceptors.request.use(config => {
    config.headers = {
        "Access-Control-Allow-Origin": "https://ben-trinh-api.herokuapp.com"
    }
    return config;
}, error => {
    return Promise.reject(error);
})

export default services;