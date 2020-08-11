/*
 * @Author: liwei
 * @Date: 2020-08-07 12:34:42
 * @LastEditTime: 2020-08-11 11:39:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/main.js
 */
import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'

Vue.config.productionTip = false
Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
