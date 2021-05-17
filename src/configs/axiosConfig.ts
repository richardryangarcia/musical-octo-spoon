import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASEURL
});

instance.defaults.headers.common['Authorization'] = process.env.REACT_APP_TOKEN_ID ? localStorage.getItem(process.env.REACT_APP_TOKEN_ID) : "";

export default instance;