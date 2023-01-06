<template>
  <div class="post">
    <Profile :profileImg="profileImg" :name="name"></Profile>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <Toggler @onTogglClick="onTogglClick"></Toggler>
    <ul class="issues" v-if="shown">
      <div v-if="!issues.length">Don't have any issues</div>
      <li v-else v-for="issue in issues">
        <IssuesItem :name="issue.user.login" :desc="issue.title"> </IssuesItem>
      </li>
    </ul>
    <Placeholder :paragraphs="1" v-if="loading" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Profile from "../Profile/Profile.vue";
import Toggler from "../Toggler/Toggler.vue";
import IssuesItem from "./issuesItem/IssuesItem.vue";
import Placeholder from "../Placeholder/Placeholder.vue";

export default {
  name: "Post",
  data() {
    return {
      shown: false,
      loading: false,
    };
  },
  components: {
    Profile,
    Toggler,
    IssuesItem,
    Placeholder,
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
    repo: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    issues: {
      required: true,
    },
  },
  methods: {
    async onTogglClick(value) {
      if (value) {
        if (this.issues === null) {
          try {
            this.loading = true;
            await this.getIssues({
              owner: this.name,
              repo: this.repo,
              id: this.id,
            });
          } catch (error) {
            console.log(error);
          } finally {
            this.loading = false;
          }
        }
      }
      this.shown = value;
    },
    ...mapActions({
      getIssues: "repositories/getIssues",
    }),
  },
};
</script>

<style scoped lang="scss" src="./Post.scss"></style>
