/*
 * @Author: 李伟
 * @Date: 2020-08-07 13:02:35
 * @LastEditTime: 2020-08-10 10:29:23
 * @LastEditors: Please set LastEditors
 * @Description: 路由权限设置
 * @FilePath: /vue-antdv-admin/src/permissons.js
 */
import rouer from "./router";
import { getToken } from "./utils/auth";
import store from "./store";
import router from "./router";

const whiteRouteList = ["/login"];

rouer.beforeEach(async(to, form, next) => {
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        const roles = await store.dispatch('getUserInfo')
        console.log(roles)
        const accessRoutes = await store.dispatch('generateRoutes', roles)
        router.addRoutes(accessRoutes)

        next({...to, replace: true})
      }
    }
  } else {
    if (whiteRouteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
