<template>
  <div class="x-container">
    <div class="content">
      <div class="controls">
        <Icon class="logo" name="Logo"></Icon>
        <div class="desc">
          <span class="desc__text">More than just one repository.</span>
          <span class="desc__text">This is our digital world.</span>
        </div>
        <Button minWidth="252" @onBtnClick="getCode">
          <template #default>
            <div class="button-content">
              <span class="btn-text"> Authorize with github </span>
              <Icon name="GitHub"></Icon>
            </div>
          </template>
        </Button>
      </div>
      <div class="img">
        <Icon name="LapTop"></Icon>
      </div>
    </div>
  </div>
</template>

<script>

import * as api from "../../api"
import { Icon } from "../../icons";
import Button from "../../components/Button/Button.vue";
import env from "../../../env";
import axios from "axios";

export default {
  namespaced: true,
  name: "Auth",
  components: {
    Icon,
    Button,
  },
  data() {
    return {};
  },
  methods: {
    getCode() {
      const githubAuthApi = "https://github.com/login/oauth/authorize";

      const params = new URLSearchParams();

      params.append("client_id", env.CLIENT_ID);
      params.append("scope", "repo:status read:user");

      window.location.href = `${githubAuthApi}?${params}`;
    },
  },
  async created() {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      try {
        const { data: { token } } = await api.auth.getToken({ code })

        api.auth.setToken(token, true)

        this.$router.replace({ name: "feeds" });
      } catch (error) {
        console.log(error);
      }
    }

  },
};
</script>























































<style lang="scss" scoped src="./Auth.scss" />
