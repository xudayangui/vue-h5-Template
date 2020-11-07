import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
// 根据环境不同引入不同api地址
import { baseApi } from '@/config'
// create an axios instance
const service = axios.create({
    baseURL: baseApi, // url = base api url + request url
    headers: {
        'Content-Type': 'application/json; charset=utf8',
        'service': 1
    },
    withCredentials: true, // 跨域请求时发送Cookie
    timeout: 5000 // request timeout
})

// request拦截器 request interceptor
service.interceptors.request.use(
    config => {
        // 不传递默认开启loading
        if (!config.hideloading) {
            // loading
            Toast.loading({
                message: '加载中...',
                forbidClick: true
            })
        }
        if (store.getters.token) {
            config.headers['X-Token'] = ''
        }
        return config
    },
    error => {
        // 请求错误
        console.log(error) // for debug
        return Promise.reject(error)
    }
)
// respone拦截器
service.interceptors.response.use(
    response => {
        Toast.clear()
        const res = response.data
        if (res.status && res.status !== 200) {
            // 登录超时,重新登录
            if (res.status === 401) {
                store.dispatch('FedLogOut').then(() => {
                    location.reload()
                })
            }
            return Promise.reject(res || 'error')
        } else {
            return Promise.resolve(res)
        }
    },
    error => {
        Toast.clear()
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service
