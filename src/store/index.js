import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  id: "",
  username: ""
};

const mutations = {
  setUser(state, params) {
    state.id = params.id;
    state.username = params.username;
    console.log("MUT");
    console.log(params.id);
    console.log(params.username);
  }
};

const actions = {
  SignIn(context) {
    return new Promise(resolve => {
      context.commit("setUser", { id: 1, username: "DIO" });
      console.log("SETTED");
      resolve();
    });
  },
  SignOut(context) {
    return new Promise(resolve => {
      // axios
      //   .get("Logout")
      //   .then(response => {
      //     removeIsLogin();
      //     localStorage.removeItem("loginUsername");
      //     // 移除之前在axios头部设置的token,现在将无法执行需要token的事务
      //     delete axios.defaults.headers.common["Authorization"];
      //     resolve(response);
      //   })
      //   .catch(error => {
      //     reject(error);
      //   });
      context.commit("setUser", " ");
      resolve();
    });
  }
};
const getters = {
  isLoggedIn: state => !!state.username,
  getUsername: state => state.username
};
export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});
