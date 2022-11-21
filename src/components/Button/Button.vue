<template>
  <button>{{ text }}</button>
</template>

<script>

export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    },
    colorSchema: {
      type: String,
      required: true
    }
  }
}

</script>

<style lang="scss" scoped>

</style>