/*
 * @Author: your name
 * @Date: 2020-08-10 10:59:03
 * @LastEditTime: 2020-08-10 11:12:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/api/user.js
 */
import request from "../utils/http";

export function login(data) {
  return request({
    url: "login.json",
    method: 'get',
    data,
  });
}

export function getUserInfo(token) {
  return request({
    url: "userinfo.json",
    method: 'get',
    params: { token },
  });
}

export function loginOut() {
  return request({
    url: "loginout.json",
    method: "get",
  });
}
