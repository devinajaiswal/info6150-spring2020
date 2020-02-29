import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  username: ""
};

const mutations = {
  setUser(state, username) {
    state.username = username;
  }
};

const actions = {
  getUsername(context) {

  }
};

export const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
});
