<template>
  <div class="slide" :class="[{ active: isActive }]">
    <div class="slide__header">
      <TimeLine />
      <Profile profileImg="https://picsum.photos/200/300" name="React.reposit"></Profile>
    </div>
    <div class="slide__content">
      <slot name="content"></slot>
    </div>
    <div class="slide__footer">
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
import Profile from "../Profile/Profile.vue";
import Button from "../Button/Button.vue";

export default {
  name: "StoriesItem",
  props: {
    isActive: {
      type: Boolean,
      requered: true
    }
  },
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

<style lang="scss" scoped src="./StoriesItem.scss">

</style>
