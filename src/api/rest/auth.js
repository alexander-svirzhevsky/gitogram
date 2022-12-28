import { makeRequest } from "../request";
import env from "../../../env";

export const auth = ({ code }) => {
  return makeRequest({
    url: "https://webdev-api.loftschool.com/github",
    method: "POST",
    body: {
      clientId: env.CLIENT_ID,
      code,
      clientSecret: env.CLIENT_SECRET,
    },
  });
};
