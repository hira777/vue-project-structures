<template>
  <div class="post">
    <article>
      <VPostHeader v-bind="post" />
      <VPostBody v-bind="post" />
    </article>
    <VPostRelatedPosts :posts="relatedPosts" class="list" />
  </div>
</template>

<script>
import VPostHeader from "@/components/molecules/post/VPostHeader.vue";
import VPostBody from "@/components/molecules/post/VPostBody.vue";
import VPostRelatedPosts from "@/components/organisms/post/VPostRelatedPosts.vue";

export default {
  name: "VPost",
  components: {
    VPostHeader,
    VPostBody,
    VPostRelatedPosts
  },
  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({})
    },
    relatedPosts: {
      type: Array,
      required: true,
      default: () => []
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
  .list {
    margin-top: 40px;
  }
}
</style>
