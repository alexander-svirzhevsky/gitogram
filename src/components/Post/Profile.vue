<template>
  <div class="profile">
    <img :src="profileImg" :alt="name" class="profile__img">
    <div class="profile__name">{{ name }}</div>
  </div>
</template>

<script>

export default {
  name: "Profile",
  props: {
    profileImg: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped lang="scss">
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile__img {
  width: 44px;
  height: 44px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  margin-right: 14px;
}

.profile__name {
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
}
</style>