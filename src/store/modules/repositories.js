import * as api from "../../api";
import {
  UPDATE_REPOSITORIES,
  SET_LOADING,
  SET_ERROR,
} from "../types/mutation-types";

export default {
  namespaced: true,
  state: {
    data: [],
    error: "",
    loading: false,
  },
  getters: {},
  mutations: {
    [UPDATE_REPOSITORIES](state, payload) {
      state.data = payload;
    },
    [SET_LOADING](state, payload) {
      state.loading = payload;
    },
    [SET_ERROR](state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async getRepositories({ commit }) {
      commit(SET_LOADING, true);
      try {
        const { data } = await api.repositories.getRepositories();
        commit(UPDATE_REPOSITORIES, data.items);
      } catch (error) {
        commit(SET_ERROR, error.message);
      } finally {
        commit(SET_LOADING, false);
      }
    },
  },
};
