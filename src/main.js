import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import * as api from "./api";

const token = localStorage.getItem("token");

if (token) {
  api.auth.setToken(token);
}

const app = createApp(App);

app.use(router);

app.use(store);

app.mount("#app");
