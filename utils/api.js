import axios from "axios";

//'http://api-node-js-0782.herokuapp.com'
const api = axios.create({
    baseURL:'http://localhost:8080'
})


export default api;