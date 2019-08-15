<template>
  <div class="related-post-list">
    <h2 class="title">関連記事</h2>
    <VPostRelatedPost
      v-for="(post, index) in posts"
      :id="post.id"
      :key="index"
      :title="post.title"
      @clickPost="onClickPost"
    />
  </div>
</template>

<script>
import VPostRelatedPost from "@/components/molecules/post/VPostRelatedPost.vue";

export default {
  name: "VPostRelatedPosts",
  components: {
    VPostRelatedPost
  },
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    onClickPost({ id }) {
      this.$emit("navigate", { id });
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 15px;
  font-size: 1.3rem;
  color: #333333;
}
</style>
