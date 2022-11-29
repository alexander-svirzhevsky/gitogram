<template>
  <ul class="panel">
    <li class="panel__item">
      <div class="star panel__section">
        <Icon class="icon-svg" name="Star"></Icon>
        <span>Star</span>
      </div>
      <div class="panel__section">{{ star }}</div>
    </li>
    <li class="panel__item">
      <div class="fork panel__section">
        <Icon class="icon-svg" name="Fork"></Icon>
        <span>Fork</span>
      </div>
      <div class="quantity panel__section">{{ fork }}</div>
    </li>
  </ul>
</template>

<script>
import { Icon } from "../../../icons"

export default {
  name: "Socials",
  components: {
    Icon
  },
  props: {
    star: {
      type: String,
      required: true,
    },
    fork: {
      type: String,
      required: true,
    },
  }
}

</script>

<style lang="scss" scoped src="./Socials.scss">

</style>