<template>
  <VContainer>
    <div class="v-posts-view">
      <VPosts :posts="posts" />
    </div>
  </VContainer>
</template>

<script>
import { mapGetters } from "vuex";

import VContainer from "@/components/layouts/containers/container/VContainer.vue";
import VPosts from "@/components/organisms/posts/posts/VPosts.vue";

export default {
  name: "VPostsView",
  components: {
    VContainer,
    VPosts
  },
  computed: {
    ...mapGetters("posts", ["posts"])
  },
  created() {
    this.$store.dispatch("posts/fetch");
  }
};
</script>
