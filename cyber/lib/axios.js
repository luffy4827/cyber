import axios from "axios";

const axios= axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "X-Request-With": "XMLHttpRequest"
    },
    withCredentials:true
});
export default axios;