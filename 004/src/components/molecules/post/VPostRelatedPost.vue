<template>
  <div class="related-post" @click="onClickPost">
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "VPostRelatedPost",
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
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
.related-post {
  padding: 13px 0;
  cursor: pointer;
  border-top: 1px solid #cccccc;

  .title {
    color: #41b883;
    font-size: 1.2rem;
    font-weight: bold;
  }

  &:last-child {
    border-bottom: 1px solid #cccccc;
  }

  &:hover {
    .title {
      text-decoration: underline;
    }
  }
}
</style>
