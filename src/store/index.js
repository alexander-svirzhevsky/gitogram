import { createStore } from "vuex";
import repositories from "./modules/repositories";
import user from "./modules/user";

export default createStore({
  getters: {
    getUnStarredRepos(state) {
      return state.repositories.data.filter(
        (repo) =>
          !state.repositories.starred.some(
            (starredRepo) => repo.id === starredRepo.id
          )
      );
    },
  },
  modules: {
    repositories,
    user,
  },
});
