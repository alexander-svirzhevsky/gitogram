import { createStore } from "vuex";
import repositories from "./modules/repositories";
import authorisation from "./modules/authorisation";

export default createStore({
  modules: {
    repositories,
    authorisation,
  },
});
