/*
 * @Author: 李伟
 * @Date: 2020-08-07 14:45:18
 * @LastEditTime: 2020-08-13 10:04:32
 * @LastEditors: Please set LastEditors
 * @Description: gettter
 * @FilePath: /vue-antdv-admin/src/store/getters.js
 */
const getters = {
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.name,
  roles: (state) => state.user.roles,
  siderOpened: (state) => state.app.siderOpened,
  permission_routes: (state) => state.permission.routes,
  addRoutes: (state) => state.app.addRoutes,
  activeName: (state) => state.app.activeName
};

export default getters;
