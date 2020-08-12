/*
 * @Author: liwei
 * @Date: 2020-08-07 12:34:42
 * @LastEditTime: 2020-08-12 15:38:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/main.js
 */
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import iView from 'view-design'
import 'view-design/dist/styles/iview.css'
import echarts from "echarts";
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.use(iView)
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
