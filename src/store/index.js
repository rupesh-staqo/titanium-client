import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import address from "./modules/address";
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    auth,
    address,
  },
  strict: debug,
});
