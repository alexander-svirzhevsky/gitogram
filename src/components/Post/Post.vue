<template>
  <div class="post">
    <Profile :profileImg=profileImg :name=name></Profile>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <Toggler></Toggler>
  </div>
</template>

<script>
import Profile from "./Profile.vue"
import Toggler from "./Toggler.vue"

export default {
  name: "Post",
  components: {
    Profile,
    Toggler
  },
  props: {
    profileImg: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
}

</script>

<style scoped lang="scss">
.post {
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 24px 20px;
  background: #FFFFFF;
  border: 1px solid #F1F1F1;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  margin-top: 16px;
}
</style>