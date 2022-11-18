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
import { Icon } from "../../icons"

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

<style lang="scss" scoped>
.panel {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 18px;
  box-shadow: 0px 1px 0px rgba(27, 31, 35, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.02);
  // border: 1px solid rgba(27, 31, 35, 0.15);
}

.panel__item {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover .icon-svg {
    fill: #31AE54
  }
}

.panel__section {
  padding: 5px 12px;
  border: 1px solid rgba(27, 31, 35, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
}

.star {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.star,
.fork {
  background: #FAFBFC;
}

.quantity {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.icon-svg {
  fill: #586069;
  margin-right: 5px;
}
</style>