import axios from "axios";

const axioss = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    baseURL:'http://localhost:8000',
    headers: {
        "X-Request-With": "XMLHttpRequest"
    },
    withCredentials:true
});
export default axioss;