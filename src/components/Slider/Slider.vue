<template>
  <div class="slider">
    <div class="slider__header">
      <TimeLine />
      <Profile
        profileImg="https://picsum.photos/200/300"
        name="React.reposit"
      ></Profile>
    </div>
    <div class="slider__content">
      <slot name="content"></slot>
    </div>
    <div class="slider__footer">
      <Button @on-btn-click="onBtnClick" minWidth="270">
        <template #default>
          <span>Follow</span>
        </template>
      </Button>
    </div>
  </div>
</template>

<script>
import TimeLine from "../TimeLine/TimeLine.vue";
import Profile from "../Post/Profile.vue";
import Button from "../Button/Button.vue";

export default {
  name: "Slider",
  components: {
    TimeLine,
    Profile,
    Button,
  },
  methods: {
    onBtnClick(value) {
      console.log("value: ", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  width: 375px;
}
</style>
