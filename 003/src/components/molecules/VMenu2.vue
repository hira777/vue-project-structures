<template>
  <div class="v-menu2">
    <VMenu2Item
      class="v-menu2-item"
      v-for="(item, index) in items"
      :key="index"
      :href="item.href"
      :text="item.text"
      :style="{ width: menuItemWidth }"
    />
  </div>
</template>

<script>
import VMenu2Item from "@/components/molecules/VMenu2Item";

export default {
  name: "VMenu2",
  components: {
    VMenu2Item
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
.v-menu2 {
  display: flex;
  margin-top: 20px;
}

.v-menu2-item {
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  background: #9933ff;
}

.v-menu2-item:hover {
  opacity: 0.8;
}

.v-menu2-item + .v-menu2-item {
  border-left: 1px solid #fff;
}
</style>
