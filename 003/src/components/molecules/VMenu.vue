<template>
  <div class="v-menu">
    <a
      class="v-menu-item"
      v-for="(item, index) in items"
      :key="index"
      :style="{ width: menuItemWidth }"
      :href="item.href"
    >
      {{ item.text }}
    </a>
  </div>
</template>

<script>
export default {
  name: "VMenu",
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

.v-menu-item {
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  background: #41b883;
}

.v-menu-item:hover {
  opacity: 0.8;
}

.v-menu-item + .v-menu-item {
  border-left: 1px solid #fff;
}
</style>
