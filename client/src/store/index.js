import { createStore } from 'vuex'


const types = {
  SET_AUTHENTICATED: "SET_AUTHENTICATED",
  SET_USER: "SET_USER"
};

const state = {
  isAuthenticated: false,
  user: {}
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  user: state => state.user,
};

const mutations = {
  [types.SET_AUTHENTICATED](state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  [types.SET_USER](state, user) {
    state.user = user;
  }
};

const actions = {
  setAuthenticated({ commit }, isAuthenticated) {
    commit(types.SET_AUTHENTICATED, isAuthenticated);
  },
  setUser({ commit }, user) {
    commit(types.SET_USER, user);
  },
  clearCurrentState: ({ commit }) => {
    commit(types.SET_AUTHENTICATED, false);
    commit(types.SET_USER, {});
  }
};

export default createStore({
  state,
  getters,
  mutations,
  actions
});

