/*
 * @Author: 李伟
 * @Date: 2020-08-07 14:31:27
 * @LastEditTime: 2020-08-10 11:10:21
 * @LastEditors: Please set LastEditors
 * @Description: Vuex用户信息以及用户权限路由
 * @FilePath: /vue-antdv-admin/src/store/modules/user.js
 */
import { getToken, setToken, clearToken } from "../../utils/auth";
import { resetRouter } from "../../router";
import {login, loginOut, getUserInfo} from "../../api/user"

const state = {
  token: getToken(),
  name: "",
  avatar: "",
  roles: [],
};

// 设置token
const SetToken = "SetToken";
// 设置用户名
const SetName = "SetName";
// 设置头像
const SetAvatar = "SetAvatar";
// 设置路由
const SetRoles = "SetRoles";

const mutations = {
  [SetToken]: (state, token) => {
    state.token = token;
  },
  [SetName]: (state, name) => {
    state.name = name;
  },
  [SetAvatar]: (state, avatar) => {
    state.avatar = avatar;
  },
  [SetRoles]: (state, roles) => {
    state.roles = roles;
  },
};

const actions = {

  /**
   * @description: 用户登录
   * @param {user: , pass: } 
   * @return Promise 
   */
  login({ commit }, userInfo) {
    const { user, pass } = userInfo;
    return new Promise((resolve) => {
      login({user, pass}).then(response => {
        const {data} = response
        setToken(data.token);
        commit(SetToken, data.token);
        setTimeout(() => {
          resolve();
        }, 3000);
      })
    });
  },

  /**
   * @description: 注销账户信息
   */
  loginOut({ commit }) {
    return new Promise((resolve) => {
      loginOut().then(()=>{
        clearToken();
        commit(SetToken, "");
        commit(SetRoles, []);
        resetRouter();
        resolve();
      })
    });
  },
  /**
   * @description: 获取用户信息
   * @param {type} 
   * @return Promise
   */
  getUserInfo({commit}, state) {
    return new Promise(resolve => {
      getUserInfo(state.token).then(response => {
        const { data } = response
        const { name, roles } = data
        commit(SetName, name)
        commit(SetRoles, roles)
        resolve(data.roles)
      })

    })
  }
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
};
