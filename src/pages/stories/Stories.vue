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
        <ul class="stories" ref="slider">
          <li
            ref="slider-item"
            class="stories__item"
            v-for="(repository, index) in repositories"
            :key="repository.id"
          >
            <StoriesItem
              :data="getStoryData(repository)"
              :active="slideIndex === index"
              :btnsShown="activeBtns"
              :loading="loading && slideIndex === index"
              :displayBtns="displayBtns"
              @on-prev-click="hadleSlide(index - 1)"
              @on-next-click="hadleSlide(index + 1)"
              @onTimeLineFinish=""
              @onFollowClick="starRepo"
              @onUnFollowClick="unStarRepo"
            />
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
  props: ["initialSlide"],
  data() {
    return {
      slideIndex: null,
      displayBtns: true,
    };
  },
  computed: {
    ...mapState({
      repositories: (state) => state.repositories.data,
      loading: (state) => state.repositories.loading,
      error: (state) => state.repositories.error,
    }),
    activeBtns() {
      if (this.slideIndex === 0) return ["next"];
      if (this.slideIndex === this.repositories.length - 1) return ["prev"];
      return ["prev", "next"];
    },
  },
  components: {
    Icon,
    StoriesItem,
  },
  methods: {
    ...mapActions({
      getRepositories: "repositories/getRepositories",
      getReadme: "repositories/getReadme",
      starRepo: "repositories/starRepo",
      unStarRepo: "repositories/unStarRepo",
    }),
    onCloseClick() {
      this.$router.push("/");
    },
    async fetchReadmeForActive() {
      const { id, owner, name } = this.repositories[this.slideIndex];
      await this.getReadme({ id, owner: owner.login, repo: name });
    },
    getStoryData(obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        userName: obj.owner?.login,
        content: obj.readme,
        following: obj.following,
      };
    },
    moveSlide(index) {
      const sliderElement = this.$refs["slider"];
      const sliderItem = this.$refs["slider-item"];

      const slideWidth = parseInt(
        getComputedStyle(sliderItem[0]).width.replace(/[\D]+/g, "")
      );
      sliderElement.style.transform = `translateX(-${slideWidth * index}px)`;
      this.slideIndex = index;
    },
    async hadleSlide(index) {
      if (index >= this.repositories.length) {
        this.moveSlide(0);
        await this.fetchReadmeForActive();
      } else {
        this.moveSlide(index);
        await this.fetchReadmeForActive();
      }
    },
  },
  async mounted() {
    await this.getRepositories();
    if (this.initialSlide) {
      const ndx = this.repositories.findIndex(
        (repo) => repo.id === Number(this.initialSlide)
      );
      this.moveSlide(ndx);
    }
    await this.fetchReadmeForActive();
  },
};
</script>

<style scoped lang="scss" src="./Stories.scss" />
