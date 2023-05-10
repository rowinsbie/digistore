import http from "./http";
import Redirect from "./Redirect";
const Interceptor = () => {
    // interceptor for all HTTP Request
    http.interceptors.request.use(request => {

        return request;
    },(error) => {
        if(error && error.request) {
            console.log(error.request);
        }
        return Promise.reject(error);
    });

    // interceptor for all HTTP Response
    http.interceptors.response.use((response) => {

        return response;
    },(error) => {
        if(error && error.request) {
            const err = error.request
            Redirect(err.status)
        }
        return Promise.reject(error);
    });

    
}

export default Interceptor;