<template>
  <div class="post">
    <Profile :profileImg="profileImg" :name="name"></Profile>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <Toggler @onTogglClick="onTogglClick"></Toggler>
    <ul class="issues" v-if="shown">
      <li v-for="_ in 3">
        <IssuesItem
          name="joshua_l"
          desc="Enable performance measuring in production, at the user's request"
        >
        </IssuesItem>
      </li>
    </ul>
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import Toggler from "./Toggler.vue";
import IssuesItem from "./IssuesItem.vue";

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

<style scoped lang="scss">
.post {
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 24px;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px 20px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  margin-top: 16px;
  margin-bottom: 18px;
}

.issues {
  margin-top: 10px;
}
</style>
