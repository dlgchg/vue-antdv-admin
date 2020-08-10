/*
 * @Author: your name
 * @Date: 2020-08-07 12:34:42
 * @LastEditTime: 2020-08-10 10:14:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/router/index.js
 */
/*
 * @Author: 李伟
 * @Date: 2020-08-07 12:34:42
 * @LastEditTime: 2020-08-07 15:14:25
 * @LastEditors: Please set LastEditors
 * @Description: 路由设置
 * @FilePath: /vue-antdv-admin/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/main/index"

Vue.use(VueRouter);

export const defaultRoutes = [
  {
    path: "/login",
    component: () => import("../views/login/index"),
    hidden: true
  },
  {
    path: "/",
    component: MainView
  }
]

export const asyncRoutes = [
  {
    path: "/test",
    component: () => import("../views/test/index"),
    meta: {title: 'test', roles: ['admin, roles']}
  }
]

const createRouter = () => new VueRouter({
  routes: defaultRoutes
})

const router = createRouter()

export function resetRouter() {
  const resetRouter = createRouter()
  router.matcher = resetRouter.matcher
}

export default router
