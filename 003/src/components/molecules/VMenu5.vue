<template>
  <div class="v-menu5">
    <VMenu4Item
      class="v-menu5-item"
      v-for="(item, index) in items"
      :key="index"
      :href="item.href"
      :text="item.text"
      :style="{ width: menuItemWidth }"
    />
  </div>
</template>

<script>
import VMenu4Item from "@/components/atoms/molecules/VMenu5/VMenu5Item";

export default {
  name: "VMenu5",
  components: {
    VMenu4Item
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
.v-menu5 {
  display: flex;
  margin-top: 20px;
}

.v-menu5-item {
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  background: #ff3399;
}

.v-menu5-item:hover {
  opacity: 0.8;
}

.v-menu5-item + .v-menu5-item {
  border-left: 1px solid #fff;
}
</style>
