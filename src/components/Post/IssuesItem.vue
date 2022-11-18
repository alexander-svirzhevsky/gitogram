<template>
  <div class="issue">
    <span class="issue__name">{{ name }}</span>
    <span calss="issue__desc">{{ desc }}</span>
  </div>
</template>

<script>

export default {
  name: "IssuesItem",
  props: {
    name: {
      type: String,
      requered: true
    },
    desc: {
      type: String,
      requered: true
    }
  }
}

</script>

<style scoped lang="scss">
.issue {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 22px;
  margin-bottom: 3px;
}

.issue__name {
  font-weight: 700;
}
</style>