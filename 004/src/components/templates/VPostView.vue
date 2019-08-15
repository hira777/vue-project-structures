<template>
  <div class="v-posts-view">
    <VContainer>
      <VPost :post="post" :related-posts="relatedPosts" />
    </VContainer>
  </div>
</template>

<script>
import VContainer from "@/components/layouts/containers/container/VContainer.vue";
import VPost from "@/components/organisms/post/VPost.vue";

import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const PostsRepository = RepositoryFactory.get("posts");

export default {
  name: "VPostView",
  components: {
    VContainer,
    VPost
  },
  data() {
    return {
      post: {
        id: 0,
        title: "",
        body: ""
      },
      relatedPosts: []
    };
  },
  watch: {
    "$route.params.id": {
      handler(postId) {
        this.updatePost(postId);
        this.updateRelatedPosts(postId);
      },
      immediate: true
    }
  },
  methods: {
    async updatePost(postId) {
      const response = await PostsRepository.getPost(postId);
      this.post = response.data;
    },
    async updateRelatedPosts(postId) {
      const response = await PostsRepository.getPostByUserId(postId);
      this.relatedPosts = response.data.slice(0, 5);
    }
  }
};
</script>

<style lang="scss" scoped></style>
