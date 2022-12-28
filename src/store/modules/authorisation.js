import * as api from "../../api";
import { GET_TOKEN } from "../types/mutation-types";

export default {
  namespaced: true,
  state: {
    token: null,
  },
  getters: {},
  mutations: {
    [GET_TOKEN](state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async getToken({ commit }, { code }) {
      try {
        // const { data } = await api.auth.getToket({ code });
        const { data } = await api.auth.getRepositories();
        console.log(data);
        commit(GET_TOKEN, data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
