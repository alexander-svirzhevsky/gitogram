import { makeRequest } from "../request";
import env from "../../../env";
import axios from "axios";

export const getToken = ({ code }) => {
  return makeRequest({
    url: "https://webdev-api.loftschool.com/github",
    method: "POST",
    data: {
      clientId: env.CLIENT_ID,
      code,
      clientSecret: env.CLIENT_SECRET,
    },
  });
};

export const setToken = (token, setTokenToLocalStorage) => {
  axios.defaults.headers.common["Authorization"] = `token ${token}`;

  if (setTokenToLocalStorage) {
    localStorage.setItem("token", token);
  }
};
