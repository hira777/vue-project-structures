<template>
  <div class="v-menu">
    <VMenuItem
      class="v-menu__item"
      v-for="(item, index) in items"
      :key="index"
      :href="item.href"
      :text="item.text"
      :style="{ width: menuItemWidth }"
    />
  </div>
</template>

<script>
import VMenuItem from "@/components/atoms/menus/menuItem/VMenuItem";

export default {
  name: "VMenu",
  components: {
    VMenuItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    menuItemWidth() {
      return `calc(100% / ${this.items.length})`;
    }
  }
};
</script>

<style scoped>
.v-menu {
  display: flex;
  margin-top: 20px;
}

.v-menu__item + .v-menu__item {
  border-left: 1px solid #fff;
}
</style>
