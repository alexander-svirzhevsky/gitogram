<template>
  <div class="contact">
    <div class="contact__img">
      <img :src="imgSrc" :alt="name" class="contact__avatar">
    </div>
    <span>{{ name }}</span>
  </div>
</template>

<script>

export default {
  name: "ContactItem",
  props: {
    imgSrc: {
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
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 92px;
}

.contact__img {
  width: 92px;
  height: 92px;
  border: 2px solid #A6328D;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: none;
  }
}

.contact__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50px;
}
</style>