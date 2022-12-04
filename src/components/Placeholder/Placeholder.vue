<template>
  <div class="placeholder"></div>
  <ul class="paragraph" v-for="paragraph in paragraphs" :key="paragraph">
    <li class="paragraph__list">
      <span class="line line--medium"></span>
      <span class="line line--larg"></span>
      <span class="line line--small"></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Placeholder",
  props: {
    paragraphs: Number,
  },
};
</script>

<style scoped lang="scss" src="./Placeholder.scss" />
