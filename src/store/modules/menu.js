const state = {
  activeName: "/dashboard",
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
