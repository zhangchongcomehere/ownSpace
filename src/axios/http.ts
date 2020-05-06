import Axios from 'axios';


const axiosIntance = Axios.create({
    baseURL: 'http://192.168.2.121:8080',
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    }
})

axiosIntance.interceptors.request.use(config => {
    return config
},error => {
    return Promise.reject(error)
})

axiosIntance.interceptors.response.use(response => {
    return response
},error => {    
    return Promise.reject(error)
})

export default axiosIntance