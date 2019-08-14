<template>
  <div class="v-menu4">
    <VMenu4Item
      class="v-menu4-item"
      v-for="(item, index) in items"
      :key="index"
      :href="item.href"
      :text="item.text"
      :style="{ width: menuItemWidth }"
    />
  </div>
</template>

<script>
import VMenu4Item from "@/components/atoms/VMenu4Item";

export default {
  name: "VMenu4",
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
.v-menu4 {
  display: flex;
  margin-top: 20px;
}

.v-menu4-item {
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  background: #ff8000;
}

.v-menu4-item:hover {
  opacity: 0.8;
}

.v-menu4-item + .v-menu4-item {
  border-left: 1px solid #fff;
}
</style>
