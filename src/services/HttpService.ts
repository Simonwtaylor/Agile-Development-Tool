import axios, { AxiosResponse } from 'axios';

axios.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: any) => {
        const expectedError = (error.response && error.response >=  400 && error.response.status < 500);
        console.log(error);
        if(!expectedError) console.log(error);

        return Promise.reject(error);
    }
);

function setToken(token: string) {
    axios.defaults.headers.common['authorization'] = token;
}

export default {
    get: axios.get, 
    post: axios.post, 
    put: axios.put, 
    delete: axios.delete, 
    setToken
}