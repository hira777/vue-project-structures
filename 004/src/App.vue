<template>
  <div id="app">
    <VHeader />
    <router-view />
  </div>
</template>

<script>
import VHeader from "@/components/organisms/header/header/VHeader.vue";

export default {
  components: {
    VHeader
  }
};
</script>

<style lang="scss">
#app {
  font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ",
    "Lucida Grande", Verdana, "ＭＳ Ｐゴシック", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>
