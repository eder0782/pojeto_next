import axios from "axios";


const api = axios.create({
    baseURL:'http://api-node-js-0782.herokuapp.com'
})


export default api;