import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faPlaneDeparture,
  faUserAlt,
  faHammer,
  faGlobeEurope
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFontAwesome
} from "@fortawesome/free-brands-svg-icons";
import {
  FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";

library.add(faPlaneDeparture);
library.add(faUserAlt);
library.add(faHammer);
library.add(faGithub);
library.add(faFontAwesome);
library.add(faGlobeEurope)

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");