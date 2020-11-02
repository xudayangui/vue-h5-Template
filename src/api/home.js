import api from './index'
// axios
import request from '@/utils/request'

// 轮播图
export function login(data) {
  return request({
    url: api.Login,
    method: 'post',
    data
  })
}
