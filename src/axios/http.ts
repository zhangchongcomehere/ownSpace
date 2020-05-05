import Axios from 'axios';

declare module 'axios' {
    export interface AxiosRequestConfig {
        baseUrl: string;
        header: string;
    }
  }

const axiosIntance = Axios.create({
    baseUrl: 'http://192.168.0.1',
    header:'application/json;charset=utf-8'
})

export default axiosIntance