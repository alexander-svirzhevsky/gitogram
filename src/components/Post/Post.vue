<template>
  <div class="post">
    <Profile :profileImg="profileImg" :name="name"></Profile>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <Toggler @onTogglClick="onTogglClick"></Toggler>
    <ul class="issues" v-if="shown">
      <li v-for="_ in 3">
        <IssuesItem name="joshua_l" desc="Enable performance measuring in production, at the user's request">
        </IssuesItem>
      </li>
    </ul>
  </div>
</template>

<script>
import Profile from "../Profile/Profile.vue";
import Toggler from "../Toggler/Toggler.vue";
import IssuesItem from "./issuesItem/IssuesItem.vue";

export default {
  name: "Post",
  data() {
    return { shown: false };
  },
  components: {
    Profile,
    Toggler,
    IssuesItem,
  },
  props: {
    profileImg: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    onTogglClick(value) {
      this.shown = value;
    },
  },
};
</script>

<style scoped lang="scss" src="./Post.scss">

</style>
