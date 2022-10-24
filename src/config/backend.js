import axios from 'axios';

const axiosSet = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL, //node server url
    Headers: JSON.parse(process.env.REACT_APP_BACKEND_HEADERS),
    responseType    : "json",
    responseEncoding: "json"
})

export default axiosSet;