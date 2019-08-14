<template>
  <a :href="href">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "VMenu4Item",
  props: {
    href: String,
    text: String
  }
};
</script>
