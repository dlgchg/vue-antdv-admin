/*
 * @Author: your name
 * @Date: 2020-08-10 13:23:30
 * @LastEditTime: 2020-08-10 13:29:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue-antdv-admin/src/store/modules/app.js
 */
import Cookies from "js-cookie";

const state = {
  siderOpened: Cookies.get("siderStatus")
    ? !!+Cookies.get("siderStatus")
    : true,
};

const ToggleSider = "ToggleSider";
const CloseSider = "CloseSider";

const mutations = {
  [ToggleSider]: (state) => {
    state.siderOpened = !state.siderOpened;
    if (state.siderOpened) {
      Cookies.set("siderStatus", 1);
    } else {
      Cookies.set("siderStatus", 0);
    }
  },
  [CloseSider]: (state) => {
    state.siderOpened = false;

    Cookies.set("siderStatus", 0);
  },
};

const actions = {
  toggleSider({ commit }) {
    commit(ToggleSider);
  },
  closeSider({ commit }) {
    commit(CloseSider);
  },
};

export default {
    namespace: true,
    state,
    mutations,
    actions
}
