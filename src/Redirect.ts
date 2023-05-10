import router from "./router";

const Redirect = (http_code:number) => {
    switch(http_code) {
        case 401:
            const token = localStorage.getItem('sanctum-token');
            if(token != null) {
                localStorage.removeItem('sanctum-token')
                router.push({name:"Login"});
            }
            break
    }

}

export default Redirect;