<template>
  <div class="x-container">
    <div class="content">
      <div class="controls">
        <Icon class="logo" name="Logo"></Icon>
        <span class="desc">
          More than just one repository.<br />
          This is our digital world.
        </span>
        <Button minWidth="252">
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

export default {
  name: "Auth",
  components: {
    Icon,
    Button,
  },
};
</script>

<style lang="scss" scoped src="./Auth.scss" />
