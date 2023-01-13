import Feeds from "../pages/feeds/Feeds.vue";
import Stories from "../pages/stories/Stories.vue";
import NotFound from "../pages/404/NotFound.vue";
import Auth from "../pages/auth/Auth.vue";
import User from "../pages/user/User.vue";

export default [
  {
    path: "/",
    component: Feeds,
    name: "feeds",
  },
  {
    path: "/stories/:initialSlide(\\d+)",
    component: Stories,
    name: "stories",
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
  {
    path: "/auth",
    component: Auth,
    name: "auth",
  },
  {
    path: "/user",
    component: User,
    name: "user",
    // children: [
    // { path: "", name: "repos", component: UserRepos },
    // { path: "/following", name: "following", component: Following },
    // ],
  },
];
