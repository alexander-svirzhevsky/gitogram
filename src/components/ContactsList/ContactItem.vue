<template>
  <div class="contact">
    <img :src="imgSrc" :alt="name" class="contact__img">
    <span>{{ name }}</span>
  </div>
</template>

<script>

export default {
  name: "ContactItem",
  props: ["imgSrc", "name"]
}

</script>

<style scoped lang="scss">
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 92px;
  cursor: pointer;
}

.contact__img {
  width: 80px;
  height: 80px;
  border: 2px solid #A6328D;
  border-radius: 50px;
}
</style>