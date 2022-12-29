import { SET_USER } from "../types/mutation-types";
import * as api from "../../api";

export default {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    isLogged(state) {
      return state.user !== null && !Object.keys(state.user).length;
    },
  },
  mutations: {
    [SET_USER](state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async getUserData({ commit }) {
      const { data } = await api.user.getUser();
      commit(SET_USER, data);
    },
  },
};
