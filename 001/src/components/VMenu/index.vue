<template>
  <nav class="v-menu">
    <VMenuItem
      v-for="item in items"
      :key="item.label"
      :label="item.label"
      :name="item.name"
      @clickMenuItem="onClickMenuItem"
    />
  </nav>
</template>

<script>
import VMenuItem from "@/components/VMenu/VMenuItem.vue";

export default {
  name: "VMenu",
  components: {
    VMenuItem
  },
  props: {
    items: Array
  },
  methods: {
    onClickMenuItem({ name }) {
      this.$emit("clickMenuItem", { name });
    }
  }
};
</script>

<style>
.v-menu {
  display: flex;
}
</style>
