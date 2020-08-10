/*
 * @Author: 李伟
 * @Date: 2020-08-07 14:45:18
 * @LastEditTime: 2020-08-10 09:33:31
 * @LastEditors: Please set LastEditors
 * @Description: gettter
 * @FilePath: /vue-antdv-admin/src/store/getters.js
 */
const gettes = {
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.name,
  roles: (state) => state.user.roles,
};

export default gettes;
