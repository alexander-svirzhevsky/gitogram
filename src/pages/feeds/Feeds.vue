<template>
  <div class="content">
    <div class="x-container">
      <TopPanel>
        <template #header>
          <Icon name="Logo"></Icon>
          <MenuList />
        </template>
        <template #contacts>
          <ContactItem imgSrc="https://picsum.photos/200/300" name="Alex"></ContactItem>
        </template>
      </TopPanel>
    </div>
  </div>
</template>

<script>
import TopPanel from "../../components/TopPanel/TopPanel.vue"
import MenuList from "../../components/MenuList/MenuList.vue"
import ContactItem from "../../components/ContactsList/ContactItem.vue"
import { Icon } from "../../icons"

export default {
  name: 'Feeds',
  components: {
    TopPanel,
    MenuList,
    Icon,
    ContactItem
  }
}
</script>

<style scoped lang="scss">
.content {
  padding-top: 43px;
  padding-bottom: 33px;
  background: #FAFAFA;
}
</style>
