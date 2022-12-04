<template>
  <div :class="{ active: isActive }" class="timeline">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
  data() {
    return {
      isActive: false,
    };
  },
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
    this.$nextTick(() => {
      if (this.active) {
        setTimeout(() => {
          this.isActive = true;
        }, 0);
      }
    });

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

<style lang="scss" scoped src="./TimeLine.scss"></style>
