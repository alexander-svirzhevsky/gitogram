<template>
  <div class="profile">
    <img :src="profileImg" :alt="name" class="profile__img" :style="setStyles">
    <div class="profile__name">{{ name }}</div>
  </div>
</template>

<script>

export default {
  name: "Profile",
  props: {
    profileImg: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    width: String, height: String
  },
  computed: {
    setStyles() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
      }
    }
  },
}

</script>

<style scoped lang="scss" src="./Profile.scss">

</style>