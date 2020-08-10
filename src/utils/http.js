/*
 * @Author: your name
 * @Date: 2020-08-10 10:48:57
 * @LastEditTime: 2020-08-10 11:03:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/utils/http.js
 */
import axios from "axios";
import store from "../store";
import { getToken } from "./auth";

const instace = axios.create({
  baseURL: "../serverjson/",
});

instace.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers["Vue-Antd-Token"] = getToken();
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instace
