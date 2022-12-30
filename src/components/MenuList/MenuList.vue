<template>
  <ul class="menu">
    <li @click="emitOnHomeClick" class="menu__item">
      <Icon name="Home"></Icon>
    </li>
    <li @click="emitOnProfileClick" class="menu__item">
      <img class="avatar" alt="" :src="avatar" />
    </li>
    <li @click="emitOnSignOutClick" class="menu__item">
      <Icon name="Signout"></Icon>
    </li>
  </ul>
</template>

<script>
import { Icon } from "../../icons"

export default {
  name: 'MenuList',
  components: {
    Icon
  },
  props: {
    avatar: {
      type: String,
      required: true,
    },
  },
  emits: ["onHomeClick", "onProfileClick", "onSignOutClick"],
  methods: {
    emitOnHomeClick() {
      this.$emit("onHomeClick", "home link")
    },
    emitOnProfileClick() {
      this.$emit("onProfileClick", "profile link")
    },
    emitOnSignOutClick() {
      this.$emit("onSignOutClick", "sign out link")
    }
  }
}
</script>
  
<style scoped lang="scss" src="./MenuList.scss">

</style>