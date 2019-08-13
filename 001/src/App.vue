<template>
  <div id="app">
    <VHeader @navigate="onNavigate" />
    <router-view />
  </div>
</template>

<script>
import VHeader from "@/containers/VHeader.vue";

export default {
  name: "app",
  components: {
    VHeader
  },
  methods: {
    onNavigate({ name }) {
      this.$router.push({ name }).catch(() => {});
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
