<template>
  <div class="shimmer-wrapper">
    <div :class="className">

    </div>
  </div>
</template>

<script>
export default {
  name: "Shimmer",
  props: {
    className: {
      type: String,
      requered: true
    }
  }
}
</script>

<style scoped lang="scss" src="./Shimmer.scss">

</style>