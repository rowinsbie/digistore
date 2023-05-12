import router from "./router";

const Redirect = (http_code:number) => {
    switch(http_code) {
        case 0:
            router.push({name:"NetworkError"});
            break;
        case 500:
            router.push({name:"InternalServerError"});
            break;
        case 401:
            const token = localStorage.getItem('sanctum-token');
            if(token != null) {
                localStorage.removeItem('sanctum-token')
                location.href = "/Login";
            }
            break
    }

}

export default Redirect;