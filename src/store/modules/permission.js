/*
 * @Author: your name
 * @Date: 2020-08-10 09:43:44
 * @LastEditTime: 2020-08-10 10:28:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/store/modules/permission.js
 */
import { asyncRoutes, defaultRoutes } from "../../router";

const state = {
  routes: [],
  addRoutes: [],
};

const SetRoutes = "SetRoutes";

const mutations = {
  [SetRoutes]: (state, routes) => {
    state.addRoutes = routes;
    state.routes = defaultRoutes.concat(routes);
  },
};

const actions = {
  /**
   * @description: 生成用户对应路由
   * @param: roles
   * @return Promise(accessedRoutes)
   */
  generateRoutes({ commit }, roles) {
    return new Promise((resolve) => {
        let accessedRoutes
        if(roles.includes('admin')) {
            accessedRoutes = asyncRoutes || []
        } else {
            accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
        }
        commit(SetRoutes, accessedRoutes)
        resolve(accessedRoutes)
    });
  },
};


/**
 * @description: 判断权限
 * @param {type} 
 * @return {type} 
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

/**
 * @description: 筛选路由
 * @param: routes, roles 
 * @return [route] 
 */
export function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach((route) => {
    const tmp = { ...route };
    if (hasPermission(routes, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });
  return res;
}

export default {
    namespace: true,
    state, 
    mutations,
    actions
}
