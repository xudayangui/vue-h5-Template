
import api from './index'
// axios
import request from '@/utils/request'
// 活动
export function getWebActivity(data) {
    return request({
        url: api.GetWebActivity,
        method: 'get',
        data
    })
}
// 活动
export function getWebActivityById(data) {
    return request({
        url: api.GetWebActivityById,
        method: 'post',
        data
    })
}
