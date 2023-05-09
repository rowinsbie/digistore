import http from "./http";

const Interceptor = () => {
    // interceptor for all HTTP Request
    http.interceptors.request.use((config) => {
        return config;
    },(error) => {
        return Promise.reject(error);
    });

    // interceptor for all HTTP Response
    http.interceptors.response.use((response) => {
        return response;
    },(error) => {
        console.log(error);
        return Promise.reject(error);
    });

    
}

export default Interceptor;