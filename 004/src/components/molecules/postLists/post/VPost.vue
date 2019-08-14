<template>
  <div class="v-post" @click="onClickPost">
    <p class="v-post__title">{{ title }}</p>
    <p class="v-post__text">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "VPost",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  methods: {
    onClickPost() {
      this.$emit("clickPost", { id: this.id });
    }
  }
};
</script>

<style lang="scss" scoped>
.v-post {
  cursor: pointer;

  .v-post__title {
    color: #41b883;
    font-size: 1.6rem;
    font-weight: bold;
  }
  .v-post__text {
    margin-top: 15px;
  }
}
</style>
