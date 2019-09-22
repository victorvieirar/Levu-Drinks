import Vue from "vue";
import Vuex from "vuex";

import router from "./routes";
import "es6-promise/auto";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLongArrowAltRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLongArrowAltRight, faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  router
}).$mount("#app");
