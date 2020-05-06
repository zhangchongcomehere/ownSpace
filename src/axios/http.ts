import Axios from 'axios';


const axiosIntance = Axios.create({
    baseURL: 'http://mockjs.com/api'
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