/*
 * @Author: your name
 * @Date: 2020-08-10 10:59:03
 * @LastEditTime: 2020-08-12 17:20:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/api/user.js
 */
import http from "../utils/http";

export function login(data) {
  return http({
    url: "login.json",
    method: 'get',
    data,
  });
}

export function getUserInfo(token) {
  return http({
    url: "userinfo.json",
    method: 'get',
    params: { token },
  });
}

export function loginOut(token) {
  return http({
    url: "loginout.json",
    method: "get",
    params: { token },
  });
}
