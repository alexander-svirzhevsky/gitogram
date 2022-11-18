<template>
  <div class="topPanel">
    <div class="x-container">
      <TopPanel>
        <template #header>
          <Icon name="Logo"></Icon>
          <MenuList />
        </template>
        <template #contacts>
          <ul class="contacts__list">
            <li class="contacts__item" v-for="contact in contacts" :key="contact.id">
              <ContactItem :imgSrc="contact.imgSrc" :name="contact.name" @on-contact-click="onContactClick">
              </ContactItem>
            </li>
          </ul>
        </template>
      </TopPanel>
    </div>
  </div>
  <div class="x-container">
    <section class="section">
      <Post name="Boris" profileImg="https://picsum.photos/200/300">
        <template #content>
          <div class="title">Vue.js</div>
          <div class="sub-title">JavaScript framework for building interactive web applications ⚡</div>
          <Socials star="156k" fork="4"></Socials>
        </template>
      </Post>
    </section>
  </div>
</template>

<script>
import TopPanel from "../../components/TopPanel/TopPanel.vue"
import MenuList from "../../components/MenuList/MenuList.vue"
import ContactItem from "../../components/ContactItem/ContactItem.vue"
import Post from "../../components/Post/Post.vue"
import Socials from "../../components/Post/Socials.vue"
import { Icon } from "../../icons"
import contacts from "../mock/contacts.JSON"


export default {
  name: 'Feeds',
  components: {
    TopPanel,
    MenuList,
    Icon,
    ContactItem,
    Post,
    Socials
  },
  data() {
    return {
      contacts
    }
  },
  methods: {
    onContactClick(value) {
      console.log("click on contact", value);
    }
  }
}
</script>

<style scoped lang="scss">
.topPanel {
  padding-top: 43px;
  padding-bottom: 33px;
  background: #FAFAFA;
  box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);
}

.contacts__list {
  display: flex;
  justify-content: space-between;
}

.title {
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  margin-bottom: 15px;
}

.sub-title {
  margin-bottom: 37px;
}

.section {
  margin-top: 32px;
}
</style>
