<template>
  <VContainer>
    <div class="v-posts-view">
      <VPosts :posts="posts" @navigate="onNavigate" />
    </div>
  </VContainer>
</template>

<script>
import { mapGetters } from "vuex";

import VContainer from "@/components/layouts/containers/container/VContainer.vue";
import VPosts from "@/components/organisms/postList/postList/VPostList.vue";

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
  },
  methods: {
    onNavigate({ id }) {
      this.$router.push({ name: "post", params: { id } }).catch(() => {});
    }
  }
};
</script>
