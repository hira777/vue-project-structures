<template>
  <div class="v-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VContainer"
};
</script>

<style lang="scss" scoped>
.v-container {
  width: 100%;
  max-width: $max-width;
  margin: 0 auto;
  box-sizing: border-box;
}

@media screen and (max-width: $max-width) {
  .v-container {
    padding: 0 20px;
  }
}
</style>
