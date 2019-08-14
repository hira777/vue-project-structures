<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <VHeader />
    <router-view />
  </div>
</template>

<script>
import VHeader from "@/components/organisms/headers/header/VHeader.vue";

export default {
  components: {
    VHeader
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}
p {
  margin: 0;
}
</style>
