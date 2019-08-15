<template>
  <header class="v-header">
    <VContainer>
      <VWhiteOnDarkLogo class="v-header-logo" @click.native="onClickLogo" />
      <!-- <VMenu
      :items="menuItems"
      class="v-header-menu"
      @clickMenuItem="onClickMenuItem"
    /> -->
    </VContainer>
  </header>
</template>

<script>
// import { mapGetters } from "vuex";

import VContainer from "@/components/layouts/containers/container/VContainer.vue";
import VWhiteOnDarkLogo from "@/components/atoms/logos/whiteOnDarkLogo/VWhiteOnDarkLogo.vue";

export default {
  name: "VHeader",
  components: {
    VContainer,
    VWhiteOnDarkLogo
  },
  methods: {
    onClickLogo() {
      this.$emit("navigate", { name: "home" });
    },
    onClickMenuItem({ name }) {
      this.$emit("navigate", { name });
    }
  }
  // computed: {
  //   ...mapGetters(["menuItems"])
  // }
};
</script>

<style lang="scss" scoped>
.v-header {
  display: flex;
  align-items: center;
  padding: 15px 0;
  width: 100%;
  background: #41b883;
}

.v-header-logo {
  width: 50px;
  cursor: pointer;
}

.v-header-menu {
  margin-left: auto;
}
</style>
