import Feeds from "../pages/feeds/Feeds.vue";
import Stories from "../pages/stories/Stories.vue";
import NotFound from "../pages/404/NotFound.vue";
import Auth from "../pages/auth/Auth.vue";

export default [
  {
    path: "/",
    component: Feeds,
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
  },
];
