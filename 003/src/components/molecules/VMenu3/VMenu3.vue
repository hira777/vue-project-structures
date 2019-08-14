<template>
  <div class="v-menu3">
    <VMenu3Item
      class="v-menu3-item"
      v-for="(item, index) in items"
      :key="index"
      :href="item.href"
      :text="item.text"
      :style="{ width: menuItemWidth }"
    />
  </div>
</template>

<script>
import VMenu3Item from "@/components/molecules/VMenu3/VMenu3Item";

export default {
  name: "VMenu3",
  components: {
    VMenu3Item
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
.v-menu3 {
  display: flex;
  margin-top: 20px;
}

.v-menu3-item {
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  background: #007fff;
}

.v-menu3-item:hover {
  opacity: 0.8;
}

.v-menu3-item + .v-menu3-item {
  border-left: 1px solid #fff;
}
</style>
