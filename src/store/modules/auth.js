import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
} from "../actions/auth";
// import { USER_REQUEST } from "../actions/user";
import router from "../../router";
import LoginService from "@/services/LoginService"
const state = {
  user_id: localStorage.getItem("user_id") || "",
  status: "",
  hasLoadedOnce: false
};

const mutations = {
  [AUTH_REQUEST]: state => {
    state.status = "loading";
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = "success";
    state.user_id = resp.user_id;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: state => {
    state.status = "error";
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: state => {
    state.user_id = "";
  }
};

const actions = {
  [AUTH_REQUEST]: async ({ commit }, data) => {
    let response = await LoginService.login(data);
    if (response) {
      console.log(response);
      localStorage.setItem("user_id", response.user_id);
      commit(AUTH_SUCCESS, response);
      router.push('/');
    }
  }, 
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise(resolve => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem("user_id");
      router.push('/login');
      resolve();
    });
  }
};

const getters = {
  isAuthenticated: state => !!state.user_id,
  user_id: state => state.user_id,
  authStatus: state => state.status
};


export default {
  state,
  getters,
  actions,
  mutations
};
