import * as api from "../../api";
import {
  UPDATE_REPOSITORIES,
  SET_LOADING,
  SET_ERROR,
  SET_README,
  SET_STARRED_REPOS,
} from "../types/mutation-types";

export default {
  namespaced: true,
  state: {
    data: [],
    error: "",
    loading: false,
    starred: [],
  },
  getters: {
    getRepositorieById: (state) => (id) => {
      return state.data.find((item) => item.id === id);
    },
  },
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
    [SET_README](state, payload) {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content;
        }
        return repo;
      });
    },
    [SET_STARRED_REPOS](state, payload) {
      state.starred = payload;
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
    async getReadme({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepositorieById(id);

      if (curRepo.readme !== undefined) return;

      try {
        commit(SET_LOADING, true);
        const { data } = await api.readme.getReadme({ owner, repo });
        commit(SET_README, { id, content: data });
      } catch (error) {
      } finally {
        commit(SET_LOADING, false);
      }
    },
    async getStarredRepos({ commit }) {
      commit(SET_LOADING, true);

      try {
        const { data } = await api.repositories.getStarredRepo();
        commit(SET_STARRED_REPOS, data);
      } catch (error) {
        console.log(error);
      } finally {
        commit(SET_LOADING, false);
      }
    },
  },
};
