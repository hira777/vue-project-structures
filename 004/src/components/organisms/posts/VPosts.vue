<template>
  <div class="post-list">
    <VPostsPost
      v-for="(post, index) in posts"
      :id="post.id"
      :key="index"
      :title="post.title"
      :body="post.body"
      class="post"
      @clickPost="onClickPost"
    />
  </div>
</template>

<script>
import VPostsPost from "@/components/molecules/postList/post/VPostsPost.vue";

export default {
  name: "VPosts",
  components: {
    VPostsPost
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
.post-list {
  margin-top: 20px;

  .post {
    & + .post {
      margin-top: 30px;
    }
  }
}
</style>
