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
      <StoriesItem :isActive="isActive" />
    </div>
  </section>
</template>

<script>
import { Icon } from "../../icons"
import StoriesItem from "../../components/StoriesItem/StoriesItem.vue"

export default {
  name: "Stories",
  data() {
    return { isActive: true }
  },
  components: {
    Icon,
    StoriesItem
  },
  methods: {
    onCloseClick() {
      this.$router.push('/')
    }
  }
}

</script>



































<style scoped lang="scss" src="./Stories.scss" />