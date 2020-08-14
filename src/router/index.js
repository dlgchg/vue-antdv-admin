/*
 * @Author: your name
 * @Date: 2020-08-07 12:34:42
 * @LastEditTime: 2020-08-14 14:39:21
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
  },
  {
    path: "/component",
    component: Layout,
    redirect: "/component/button",
    meta: {title: 'Component', icon: "ios-grid"},
    children: [
      {
        path: "button",
        component: () => import("../views/component/Button"),
        name: 'Button',
        meta: {title: 'Button', icon: "ios-finger-print"}
      },
      {
        path: "tab",
        component: () => import("../views/component/Tab"),
        name: 'Tab',
        meta: {title: 'Tab', icon: "ios-more"}
      }
      ,
      {
        path: "steps",
        component: () => import("../views/component/Step"),
        name: 'Steps',
        meta: {title: 'Steps', icon: "ios-fastforward"}
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
