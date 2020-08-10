/*
 * @Author: 李伟
 * @Date: 2020-08-07 12:38:34
 * @LastEditTime: 2020-08-07 12:46:35
 * @LastEditors: Please set LastEditors
 * @Description: 用户token操作
 * @FilePath: /vue-antdv-admin/src/utils/auth.js
 */
import Cookies from 'js-cookie'

const UserToken = "UserToken"
/**
 * @description: 获取token
 */
export function getToken() {
    return Cookies.get(UserToken)
}
/**
 * @description: 设置token
 * @param {token} 
 */
export function setToken(token) {
    return Cookies.set(UserToken, token)
}
/**
 * @description: 清除token
 */
export function clearToken() {
    return Cookies.remove(UserToken)
}