<template>
  <div class="body">
    <p class="text">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "VPostBody",
  props: {
    body: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.post-body {
  .text {
    margin-top: 15px;
  }
}
</style>
