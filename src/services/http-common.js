import axios from 'axios'
//import store from '../store'
//import router from '../router'


const Url = "https://newsapi.org/v2/";
 

const instance = axios.create({
    baseURL: Url,
    headers: {
        'Content-type': 'application/json',
    },
})

// instance.interceptors.request.use(function (config) {
//     config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
//     return config
// }, function (error) {
//     return Promise.reject(error)
// })

// instance.interceptors.response.use(function (response) {
//     return response
// }, function (error) {
//     if (error.response.status === 401) {
//         if (error.response.data.message === 'Invalid token') {
//             store.dispatch('authUser/logout')
//                 .then(() => router.push('/login'))
//         } else {
//             store.dispatch('authUser/logout').then(() => {
//                 store.dispatch('authUser/getAccessToken').then(() => {
//                     error.config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
//                     return instance.request(error.config)
//                 })
//             })
//         }
//     }

//     return Promise.reject(error)
// })

export default instance
