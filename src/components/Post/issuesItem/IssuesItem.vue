<template>
  <div class="issue">
    <span class="issue__name">{{ name }}</span>
    <span calss="issue__desc">{{ desc }}</span>
  </div>
</template>

<script>
export default {
  name: "IssuesItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss" src="./IssuesItem.scss"></style>
