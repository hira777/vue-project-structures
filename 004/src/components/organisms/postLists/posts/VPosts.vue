<template>
  <div class="v-posts">
    <VPost
      v-for="(post, index) in posts"
      :id="post.id"
      :key="index"
      class="v-posts-post"
      :title="post.title"
      :body="post.body"
      @clickPost="onClickPost"
    />
  </div>
</template>

<script>
import VPost from "@/components/molecules/postLists/post/VPost.vue";

export default {
  name: "VPosts",
  components: {
    VPost
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
      this.$emit("clickPost", { id });
    }
  }
};
</script>

<style lang="scss" scoped>
.v-posts {
  margin-top: 20px;

  .v-posts-post {
    & + .v-posts-post {
      margin-top: 30px;
    }
  }
}
</style>
