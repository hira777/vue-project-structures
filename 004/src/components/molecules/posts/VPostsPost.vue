<template>
  <div class="post" @click="onClickPost">
    <p class="title">{{ title }}</p>
    <p class="text">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "VPosts",
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
.post {
  cursor: pointer;

  .title {
    color: #41b883;
    font-size: 1.6rem;
    font-weight: bold;
  }

  .text {
    margin-top: 15px;
  }

  &:hover {
    .title {
      text-decoration: underline;
    }
  }
}
</style>
