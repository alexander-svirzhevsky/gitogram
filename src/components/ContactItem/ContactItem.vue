<template>
  <div class="contact">
    <div class="contact__img" @click="onContactClick">
      <img :src="imgSrc" :alt="name" class="contact__avatar" />
    </div>
    <span class="contact__name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    onContactClick() {
      this.$emit("onContactClick");
    },
  },
};
</script>

<style scoped lang="scss" src="./ContactItem.scss"></style>
