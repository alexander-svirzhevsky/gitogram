<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: "Button",
}

</script>

<style lang="scss" scoped>
.button {
  min-width: 250px;
  background: #31AE54;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  padding: 10px 20px;
}
</style>