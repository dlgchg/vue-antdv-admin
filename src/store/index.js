/*
 * @Author: your name
 * @Date: 2020-08-07 12:34:42
 * @LastEditTime: 2020-08-10 13:29:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/store/index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'
import app from './modules/app'
import menu from './modules/menu'
import getters from './getters'

Vue.use(Vuex)

const store =  new Vuex.Store({
  modules: {
    user,
    permission,
    app,
    menu
  },
  getters
})

export default store
