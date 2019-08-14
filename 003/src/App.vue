<template>
  <div id="app">
    <VMenu :items="items" />
    <VMenu2 :items="items" />
    <VMenu3 :items="items" />
    <VMenu4 :items="items" />
    <VMenu5 :items="items" />
    <VMenusVMenu :items="items" />
  </div>
</template>

<script>
import VMenu from "./components/molecules/VMenu.vue";
import VMenu2 from "./components/molecules/VMenu2.vue";
import VMenu3 from "./components/molecules/VMenu3/VMenu3.vue";
import VMenu4 from "./components/molecules/VMenu4.vue";
import VMenu5 from "./components/molecules/VMenu5.vue";
import VMenusVMenu from "./components/molecules/menus/menu/VMenu.vue";

export default {
  name: "app",
  components: {
    VMenu,
    VMenu2,
    VMenu3,
    VMenu4,
    VMenu5,
    VMenusVMenu
  },
  data() {
    return {
      items: [
        {
          href: "/home",
          text: "home"
        },
        {
          href: "/about",
          text: "about"
        },
        {
          href: "/login",
          text: "login"
        }
      ]
    };
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
