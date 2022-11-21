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
    <Slider></Slider>
    <section class="section">
      <ul>
        <li v-for="item in items" :key="item.id">
          <Post :name="item.owner.login" :profileImg="item.owner.avatar_url">
            <template #content>
              <div class="title">{{ item.name }}</div>
              <div class="sub-title">
                {{ item.description }}
              </div>
              <Socials :star="item.stargazers_count.toString()" :fork="item.forks_count.toString()"></Socials>
            </template>
          </Post>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import TopPanel from "../../components/TopPanel/TopPanel.vue";
import MenuList from "../../components/MenuList/MenuList.vue";
import ContactItem from "../../components/ContactItem/ContactItem.vue";
import Post from "../../components/Post/Post.vue";
import Socials from "../../components/Post/Socials.vue";
import Slider from "../../components/Slider/Slider.vue"
import { Icon } from "../../icons";
import contacts from "../mock/contacts.JSON";
import * as api from "../../api";

export default {
  name: "Feeds",
  components: {
    TopPanel,
    MenuList,
    Icon,
    ContactItem,
    Post,
    Socials,
    Slider
  },
  data() {
    return {
      contacts,
      items: [],
    };
  },
  methods: {
    onContactClick(value) {
      console.log("click on contact", value);
    },
  },
  async created() {
    try {
      const { data } = await api.repositories.getRepositories();
      this.items = data.items;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped lang="scss">
.topPanel {
  padding-top: 43px;
  padding-bottom: 33px;
  background: #fafafa;
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
