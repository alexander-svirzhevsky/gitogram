<template>
  <button :disabled="loading" @click="onClick" :style="setStyles" :class="[color, { loading: loading }, 'button']">
    <Loader v-if="loading"></Loader>
    <slot v-else></slot>
  </button>
</template>

<script>
import Loader from "../Loader/Loader.vue"

const buttonColors = {
  grey: "#9E9E9E",
  green: "#31AE54"
}

export default {
  name: "Button",
  components: {
    Loader
  },
  props: {
    loading: Boolean,
    minWidth: String,
    color: {
      type: String,
      required: true,
      validator(value) {
        return Object.keys(buttonColors).includes(value)
      }
    }
  },
  methods: {
    onClick() {
      this.$emit("onBtnClick");
    },
  },
};
</script>

<style lang="scss" scoped src="./Button.scss">

</style>
