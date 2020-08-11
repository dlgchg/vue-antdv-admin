/*
 * @Author: your name
 * @Date: 2020-08-10 11:49:10
 * @LastEditTime: 2020-08-11 15:56:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/vue.config.js
 */
"use strict";
const path = require("path");

module.exports = {
  // runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js", //加上这一句
        "@views": path.resolve(__dirname, "./src/views"),
      }
    }
  },
  devServer: {
    proxy: {
      "/serverapi": {
        target: "https://raw.githubusercontent.com",
        changeOrigin: true, //是否跨域
        secure: false,
        pathRewrite:{
            '^/serverapi': ''
        }
      },
    },
  },
};
