import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import store from "@/store";
import * as api from "../api";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (!store.getters["user/isLogged"]) {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        api.auth.setToken(token);
        await store.dispatch("user/getUserData");
      } catch (error) {
        console.log(error);
      }
    }
  }

  const isLogged = store.getters["user/isLogged"];

  console.log(isLogged);
  next();
  // if (isLogged && to.name !== "auth") {
  //   next();
  // } else if (isLogged && to.name === "auth") {
  //   next({ name: "feeds" });
  // } else if (!isLogged && to.name === "auth") {
  //   next();
  // } else {
  //   next({ name: "auth" });
  // }
});

export default router;
