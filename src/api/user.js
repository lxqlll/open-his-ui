import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/login/doLogin',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getInfo(token) {
  return request({
    url: '/login/getUserInfo',
    method: 'get',
    params: { token }
  })
}

// 注销
export function logout() {
  return request({
    url: '/login/outLogin',
    method: 'get'
  })
}

