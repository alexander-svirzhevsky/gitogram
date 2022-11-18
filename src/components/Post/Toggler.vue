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

<style scoped lang="scss">
.toggler {
  font-weight: 500;
  color: #292929;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toggler__text {
  margin-right: 5px;
}

.active {
  transform: rotate(180deg);
  transition: 0.3 ease-out;
}
</style>