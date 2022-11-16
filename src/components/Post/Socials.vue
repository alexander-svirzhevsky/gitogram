<template>
  <ul class="panel">
    <li class="panel__item">
      <div class="title">Star</div>
      <div class="quantity">{{ star }}</div>
    </li>
    <li class="panel__item">
      <div class="title">Fork</div>
      <div class="quantity">{{ fork }}</div>
    </li>
  </ul>
</template>

<script>

export default {
  name: "Socials",
  props: {
    star: {
      type: String,
      required: true,
    },
    fork: {
      type: String,
      required: true,
    },
  }
}

</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid rgba(27, 31, 35, 0.15);
}

.panel__item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
}
</style>