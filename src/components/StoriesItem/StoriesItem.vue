<template>
  <div class="slide" :class="[{ active }]">
    <div class="slide__header">
      <TimeLine :active=active />
      <Profile width="32" height="32" :profileImg=data.userAvatar :name=data.userName></Profile>
    </div>
    <div class="slide__content">
      <div v-if="loading" class="slide__spinner">
        <Spinner />
      </div>
      <div v-if="data.content?.length" v-html="data.content" class="slide__data"></div>
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
    <template v-if="active">
      <button class="btn btn-prev" @click="onPrevClick">
        <span class="icon">
          <Icon name="ArrowBtn" />
        </span>
      </button>
      <button class="btn btn-next" @click="onNextClick">
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
    data: {
      type: Object,
      required: true,
      default: () => ({}),
    },

  },
  emits: ["onPrevClick", "onNextClick"],
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
      this.$emit("onPrevClick")
    },
    onNextClick() {
      this.$emit("onNextClick")
    }
  },
};

</script>

<style lang="scss" scoped src="./StoriesItem.scss">

</style>
