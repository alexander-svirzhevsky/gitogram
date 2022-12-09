<template>
  <div :class="{ active: active }" class="timeline">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
  props: {
    active: Boolean,
  },
  emits: ["onFinish"],
  methods: {
    emitOnFinish() {
      this.$emit("onFinish");
      console.log("onFinish");
    },
  },
  mounted() {
    this.$refs.indicator.addEventListener("transitionend", this.emitOnFinish);
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener(
      "transitionend",
      this.emitOnFinish
    );
  },
};
</script>

<style lang="scss" scoped src="./TimeLine.scss">

</style>
