<template>
  <button
    @click="onClick"
    :style="setStyles"
    :class="colorSchema"
    class="button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    colorSchema: String,
    minWidth: String,
  },
  computed: {
    setStyles() {
      return {
        minWidth: `${this.minWidth}px`,
        background: `${this.colorSchema === "grey" ? "#9E9E9E" : "#31AE54"}`,
      };
    },
  },
  methods: {
    onClick() {
      this.$emit("onBtnClick", "on follow click");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  background: #31ae54;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  padding: 10px 20px;
}
</style>
