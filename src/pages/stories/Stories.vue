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
      const sliderElement = this.$refs["slider"]

      const style = getComputedStyle(sliderElement)
      const matrix = style.transform
      const matrixType = matrix.includes('3d') ? '3d' : '2d'
      // console.log(matrix);
      const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
      let x, y
      if (matrixType === '2d') {
        x = matrixValues[4]
        y = matrixValues[5]
      }
      console.log(x);

      if (this.slideIndex < index) {
        sliderElement.style.transform = `translateX(-${375 * index}px)`
      } else {
        console.log("here");
        sliderElement.style.transform = `translateX(-${parseInt(x)}px)`
      }
      this.slideIndex = index
    }
  },
  created() {
    this.getRepositories()
  }
};
</script>



































































































































<style scoped lang="scss" src="./Stories.scss" />
