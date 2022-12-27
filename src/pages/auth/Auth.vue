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
import { Icon } from "../../icons";
import Button from "../../components/Button/Button.vue";
import env from "../../../env";

export default {
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
        const response = await fetch(
          "https://webdev-api.loftschool.com/github",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              clientId: env.CLIENT_ID,
              code,
              clientSecret: env.CLIENT_SECRET,
            }),
          }
        );

        const { token } = await response.json();

        localStorage.setItem("token", token);
        this.$router.replace({ name: "feeds" });
        console.log(token);
      } catch (error) {}
    }
  },
};
</script>

<style lang="scss" scoped src="./Auth.scss" />
