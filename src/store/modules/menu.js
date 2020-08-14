/*
 * @Author: your name
 * @Date: 2020-08-13 10:01:02
 * @LastEditTime: 2020-08-13 16:03:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue-iview-admin/src/store/modules/menu.js
 */
const state = {
  activeName: "/",
};

const SetActiveName = "SetActiveName";

const mutations = {
  [SetActiveName]: (state, activeName) => {
    state.activeName = activeName;
  },
};

const actions = {
  setActiveName({ commit }, activeName) {
    return new Promise((resolve) => {
        commit(SetActiveName, activeName)
        resolve(activeName)
    });
  },
};

export default {
    namespace: true,
    state, 
    mutations,
    actions
}
