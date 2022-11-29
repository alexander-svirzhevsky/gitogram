<template>
  <button @click="onClick" class="toggler">
    <span class="toggler__text">{{ isOpened ? "Hide issues" : "View issues" }}</span>
    <Icon :class="[{ active: isOpened }, 'arrow-svg']" name="Arrow"></Icon>
  </button>
</template>

<script>
import { Icon } from "../../icons"

export default {
  name: "Toggler",
  data() {
    return {
      isOpened: false
    }
  },
  methods: {
    onClick() {
      this.isOpened = !this.isOpened
      this.$emit("onTogglClick", this.isOpened)
    }
  },
  components: {
    Icon
  }
}

</script>

<style scoped lang="scss" src="./Toggler.scss">

</style>