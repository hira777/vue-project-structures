<template>
  <a class="v-menu-item" :href="href">{{ text }}</a>
</template>

<script>
export default {
  name: "VMenuItem",
  props: {
    href: String,
    text: String
  }
};
</script>

<style scoped>
.v-menu-item {
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  background: #ff5a5f;
}

.v-menu-item:hover {
  opacity: 0.8;
}

.v-menu-item + .v-menu-item {
  border-left: 1px solid #fff;
}
</style>
