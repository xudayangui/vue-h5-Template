import qs from 'qs'
// axios
import request from '@/utils/request'
// user api

// 用户信息
export function getUserInfo(params) {
    return request({
        url: '/user/userinfo',
        method: 'post',
        data: qs.stringify(params),
        hideloading: true // 隐藏 loading 组件
    })
}

