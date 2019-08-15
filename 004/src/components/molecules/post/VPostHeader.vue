<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "VPostHeader",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  margin-top: 20px;
  .title {
    color: #41b883;
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.2;
    word-break: break-word;
  }
}
</style>
