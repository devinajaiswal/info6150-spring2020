import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  json: []
};

const mutations = {
  setJson(state, db) {
    state.json = db;
  }
};

const actions = {
  getJson(context) {
    Vue.axios
      .get("api/getJson")
      .then(function(response) {
        console.log(response.data);
        if (response.status === 200) {
          return response.data;
        }
      })
      .then(function(json) {
        context.commit("setJson", Array.from(json));
      });
  }
};

export const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
});
