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
      isActive: false
    }
  },
  emits: ["onFinish"],
  methods: {
    emitOnFinish() {
      this.$emit("onFinish")
      console.log("onFinish");
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isActive = true
      }, 0)
    })

    this.$refs.indicator.addEventListener("transitionend", this.emitOnFinish)
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener("transitionend", this.emitOnFinish)
  }
}

</script>

<style lang="scss" scoped>
.timeline {
  height: 2px;
  position: relative;
  background: rgba(49, 174, 84, 0.3);

  &.active {
    .indicator {
      width: 100%;
    }
  }
}

.indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  background: #31AE54;
  transition: 5s;
}
</style>