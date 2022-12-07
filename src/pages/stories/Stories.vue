<template>
  <section class="section">
    <div class="header">
      <div class="x-container">
        <div class="header__content">
          <Icon name="Logo" @click="onCloseClick" />
          <Icon name="Cross" @click="onCloseClick" />
        </div>
      </div>
    </div>
    <div class="content">
      <div class="stories-container">
        <ul class="stories">
          <li class="stories__item" v-for="(repository, index) in repositories" :key="repository.id">
            <StoriesItem :data="getStoryData(repository)" :active="(slideIndex === index)"
              @on-prev-click="hadleSlide(index - 1)" @on-next-click="hadleSlide(index + 1)" :loading="false" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

import { Icon } from "../../icons";
import StoriesItem from "../../components/StoriesItem/StoriesItem.vue";

export default {
  name: "Stories",
  data() {
    return {
      slideIndex: 0
    };
  },
  computed: {
    ...mapState({
      repositories: state => state.repositories.data,
      loading: state => state.repositories.loading,
      error: state => state.repositories.error
    }),
  },
  components: {
    Icon,
    StoriesItem,
  },
  methods: {
    ...mapActions({
      getRepositories: "repositories/getRepositories"
    }),
    onCloseClick() {
      this.$router.push("/");
    },
    getStoryData(obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        userName: obj.owner?.login,
        content: obj.readme
      }
    },
    hadleSlide(index) {
      console.log(index);
    }
  },
  created() {
    this.getRepositories()
  }
};
</script>























































<style scoped lang="scss" src="./Stories.scss" />
