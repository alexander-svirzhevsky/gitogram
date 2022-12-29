import { makeRequest } from "../request";

export const getUser = () => {
  return makeRequest({
    url: "user",
  });
};
