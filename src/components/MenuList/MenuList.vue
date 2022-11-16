<template>
  <ul class="menu">
    <li class="menu__item">
      <Icon name="Home"></Icon>
    </li>
    <li class="menu__item">
      <img class="avatar" alt="" src="../../assets/mockImg.png" />
    </li>
    <li class="menu__item">
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
  }
}
</script>
  
<style scoped lang="scss">
.menu {
  display: flex;
  align-items: center;

  :last-child {
    margin-right: 0;
  }
}

.menu__item {
  margin-right: 25px;
  cursor: pointer;
}

.avatar {
  width: 37px;
  height: 37px;
}
</style>