<template>
  <Profile profileImg="https://picsum.photos/id/237/200/300" name="joshua_l"></Profile>
  <slot name="content"></slot>
</template>

<script>
import Profile from "./Profile.vue"

export default {
  name: "Post",
  components: {
    Profile
  }
}

</script>

<style scoped lang="scss">

</style>