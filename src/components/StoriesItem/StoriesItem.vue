<template>
  <div class="slide" :class="[{ active }]">
    <div class="slide__header">
      <TimeLine :active="active" @onFinish="$emit('onTimeLineFinish')" />
      <Profile
        width="32"
        height="32"
        :profileImg="data.userAvatar"
        :name="data.userName"
      ></Profile>
    </div>
    <div class="slide__content">
      <div v-if="loading" class="slide__spinner">
        <Spinner />
      </div>
      <div
        v-if="data.content?.length"
        v-html="data.content"
        class="content"
      ></div>
      <div v-else class="content">
        <Placeholder :paragraphs="2" />
      </div>
    </div>
    <div class="slide__footer">
      <Button @on-btn-click="onBtnClick" minWidth="270">
        <template #default>
          <span>Follow</span>
        </template>
      </Button>
    </div>
    <template v-if="active && displayBtns">
      <button
        v-if="btnsShown.includes('prev')"
        class="btn btn-prev"
        @click="onPrevClick"
      >
        <span class="icon">
          <Icon name="ArrowBtn" />
        </span>
      </button>
      <button
        v-if="btnsShown.includes('next')"
        class="btn btn-next"
        @click="onNextClick"
      >
        <span class="icon">
          <Icon name="ArrowBtn" />
        </span>
      </button>
    </template>
  </div>
</template>

<script>
import TimeLine from "../TimeLine/TimeLine.vue";
import Profile from "../Profile/Profile.vue";
import Button from "../Button/Button.vue";
import Placeholder from "../Placeholder/Placeholder.vue";
import Spinner from "../Spinner/Spinner.vue";
import { Icon } from "@/icons";

export default {
  name: "StoriesItem",
  props: {
    active: Boolean,
    loading: Boolean,
    displayBtns: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    btnsShown: {
      type: Array,
      default: () => ["prev", "next"],
      validator(value) {
        return value.every((val) => val === "prev" || val === "next");
      },
    },
    initialSlide: Number,
  },
  emits: ["onPrevClick", "onNextClick", "onTimeLineFinish"],
  components: {
    TimeLine,
    Profile,
    Button,
    Icon,
    Placeholder,
    Spinner,
  },
  methods: {
    onBtnClick(value) {
      console.log("value: ", value);
    },
    onPrevClick() {
      this.$emit("onPrevClick");
    },
    onNextClick() {
      this.$emit("onNextClick");
    },
  },
};
</script>

<style lang="scss" scoped src="./StoriesItem.scss"></style>
