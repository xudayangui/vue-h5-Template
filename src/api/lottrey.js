import api from './index'
// axios
import request from '@/utils/request'

// 彩种
export function getGameTypeAll(data) {
    return request({
        url: api.getGameTypeAll,
        method: 'get',
        data
    })
}
// 开奖信息
export function getGameLatestOpenNos(data) {
    return request({
        url: api.getGameLatestOpenNos,
        method: 'get',
        data
    })
}

// 活动公告
export function getNotice(data) {
    return request({
        url: api.getNotice,
        method: 'get',
        data,
        hideloading: true // 隐藏 loading 组件
    })
}
// banner logo
export function getBannerConfig(data) {
    return request({
        url: api.getBannerConfig,
        method: 'get',
        data,
        hideloading: true // 隐藏 loading 组件
    })
}
// 活动
// ?f=1
export function getWebActivity(data) {
    return request({
        url: api.getWebActivity,
        method: 'get',
        data,
        hideloading: true // 隐藏 loading 组件
    })
}
