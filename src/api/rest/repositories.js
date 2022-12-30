import { makeRequest } from "../request";

const addStartingZero = (value) => (value < 10 ? `0${value}` : value);

export const getRepositories = (lang = "javascript") => {
  const params = new URLSearchParams();
  const weekMS = 7 * 24 * 60 * 60 * 1000;
  const weekAgo = new Date(Date.now() - weekMS);

  const formattedDate = [
    weekAgo.getFullYear(),
    addStartingZero(weekAgo.getMonth() + 1),
    addStartingZero(weekAgo.getDate()),
  ].join("-");

  params.append("order", "desc");
  params.append("sort", "star");
  params.append("per_page", 10);
  params.append("q", `language:${lang} created:>${formattedDate}`);

  return makeRequest({
    url: `/search/repositories?${params}`,
  });
};

export const getStarredRepo = () => {
  return makeRequest({
    url: "/user/starred",
  });
};

export const starRepo = ({ owner, repo }) => {
  return makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: "put",
  });
};

export const unStarRepo = ({ owner, repo }) => {
  return makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: "delete",
  });
};
