<template>
  <header class="v-header">
    <VWhiteOnDarkLogo class="v-header-logo" @click.native="onClickLogo" />
    <VMenu
      :items="menuItems"
      @clickMenuItem="onClickMenuItem"
      class="v-header-menu"
    />
  </header>
</template>

<script>
import { mapGetters } from "vuex";

import VWhiteOnDarkLogo from "@/basics/VWhiteOnDarkLogo.vue";
import VMenu from "@/components/VMenu/index.vue";

export default {
  name: "VHeader",
  components: {
    VWhiteOnDarkLogo,
    VMenu
  },
  methods: {
    onClickLogo() {
      this.$emit("navigate", { name: "home" });
    },
    onClickMenuItem({ name }) {
      this.$emit("navigate", { name });
    }
  },
  computed: {
    ...mapGetters(["menuItems"])
  }
};
</script>

<style lang="scss">
.v-header {
  display: flex;
  align-items: center;
  padding: 15px;
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
