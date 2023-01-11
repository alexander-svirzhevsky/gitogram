<template>
  <div class="topPanel">
    <div class="x-container">
      <TopPanel>
        <template #header>
          <Icon name="Logo"></Icon>
          <MenuList :avatar="user.avatar_url" @on-home-click="onHomeClick" @on-profile-click="onProfileClick"
            @on-sign-out-click="logout" />
        </template>
        <template #contacts>
          <ul class="contacts__list">
            <li class="contacts__item" v-for="contact in repositories" :key="contact.id">
              <ContactItem :imgSrc="contact.owner.avatar_url" :name="contact.name"
                @on-contact-click="onContactClick(contact.id)">
              </ContactItem>
            </li>
          </ul>
        </template>
      </TopPanel>
    </div>
  </div>
  <div class="x-container">
    <section class="section">
      <Spinner v-if="loading"></Spinner>
      <div v-else-if="error.length !== 0">{{ error }}</div>
      <ul v-else-if="starredRepos.length !== 0">
        <li v-for="item in starredRepos" :key="item.id">
          <Post :id="item.id" :repo="item.name" :name="item.owner.login" :profileImg="item.owner.avatar_url"
            :issues="item.issues">
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
      <div v-else>Currently we don't have any repositories for you</div>
    </section>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { mapActions, mapState, useStore } from "vuex";
import { useRouter, useRoute } from 'vue-router'

import TopPanel from "../../components/TopPanel/TopPanel.vue";
import MenuList from "../../components/MenuList/MenuList.vue";
import ContactItem from "../../components/ContactItem/ContactItem.vue";
import Post from "../../components/Post/Post.vue";
import Socials from "../../components/Post/socials/Socials.vue";
import Shimmer from "../../components/Shimmer/Shimmer.vue";
import Spinner from "../../components/Spinner/Spinner.vue";
import { Icon } from "../../icons";
import Button from "../../components/Button/Button.vue";

export default {
  name: "Feeds",
  components: {
    TopPanel,
    MenuList,
    Icon,
    ContactItem,
    Post,
    Socials,
    Shimmer,
    Spinner,
    Button,
  },
  setup() {
    const { dispatch, state } = useStore()
    const router = useRouter()

    const logout = () => {
      dispatch("user/logout")
    }

    const onContactClick = (value) => {
      router.push({ name: "stories", params: { initialSlide: value } })
    }

    const onHomeClick = () => {
      dispatch("repositories/getStarredRepos");
    }

    const onProfileClick = (value) => {
      console.log(value);
    }

    onMounted(() => {
      dispatch("repositories/getRepositories");
      dispatch("repositories/getStarredRepos");
    })

    return {
      repositories: computed(() => state.repositories.data),
      loading: computed(() => state.repositories.loading),
      error: computed(() => state.repositories.error),
      user: computed(() => state.user.user),
      starredRepos: computed(() => state.repositories.starred),
      logout,
      onContactClick,
      onHomeClick,
      onProfileClick
    }
  },
};
</script>













<style scoped lang="scss" src="./Feeds.scss" />
