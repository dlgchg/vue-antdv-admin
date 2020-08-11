/*
 * @Author: 李伟
 * @Date: 2020-08-07 13:02:35
 * @LastEditTime: 2020-08-11 11:26:26
 * @LastEditors: Please set LastEditors
 * @Description: 路由权限设置
 * @FilePath: /vue-antdv-admin/src/permissons.js
 */
import rouer from "./router";
import { getToken } from "./utils/auth";
import store from "./store";
import router from "./router";
import iView from 'iview';

const whiteRouteList = ["/login"];

rouer.beforeEach(async(to, form, next) => {
  iView.LoadingBar.start();
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
      iView.LoadingBar.finish();
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        const roles = await store.dispatch('getUserInfo')
        const accessRoutes = await store.dispatch('generateRoutes', roles)
        router.addRoutes(accessRoutes)
        next({...to, replace: true})
        iView.LoadingBar.finish();
      }
    }
  } else {
    if (whiteRouteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      iView.LoadingBar.finish();
    }
  }
});

rouer.afterEach(() => {
  iView.LoadingBar.finish();
})
