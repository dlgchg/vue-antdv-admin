/*
 * @Author: your name
 * @Date: 2020-08-07 12:34:42
 * @LastEditTime: 2020-08-12 15:17:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index"

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export const defaultRoutes = [
  {
    path: "/login",
    component: () => import("../views/login/index"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    meta: {title: 'Dashboard', icon: "ios-apps"},
    children: [
      {
        path: 'dashboard',
        component: () => import("../views/dashboard/index"),
        name: 'Dashboard',
        meta: {title: 'Dashboard', roles: ['admin, roles'], icon: "ios-apps"},
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: "/icon",
    component: Layout,
    redirect: "/icon/index",
    meta: {title: 'Icons', icon: "ios-appstore"},
    children: [
      {
        path: "index",
        component: () => import("../views/icon/index"),
        name: 'Icons',
        meta: {title: 'Icons', icon: "ios-appstore"}
      }
    ]
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
