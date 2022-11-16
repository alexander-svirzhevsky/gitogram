<template>
  <div class="content">
    <div class="x-container">
      <TopPanel>
        <template #header>
          <Icon name="Logo"></Icon>
          <MenuList />
        </template>
        <template #contacts>
          <ul class="contacts__list">
            <li class="contacts__item" v-for="contact in contacts" :key="contact.id">
              <ContactItem :imgSrc="contact.imgSrc" :name="contact.name"></ContactItem>
            </li>
          </ul>
        </template>
      </TopPanel>
    </div>
  </div>
</template>

<script>
import TopPanel from "../../components/TopPanel/TopPanel.vue"
import MenuList from "../../components/MenuList/MenuList.vue"
import ContactItem from "../../components/ContactItem/ContactItem.vue"
import { Icon } from "../../icons"
import contacts from "../mock/contacts.JSON"


export default {
  name: 'Feeds',
  components: {
    TopPanel,
    MenuList,
    Icon,
    ContactItem
  },
  data() {
    return {
      contacts
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  padding-top: 43px;
  padding-bottom: 33px;
  background: #FAFAFA;
}

.contacts__list {
  display: flex;
  justify-content: space-between;
}
</style>
