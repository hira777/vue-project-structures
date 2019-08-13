<template>
  <div class="v-menu-item">
    <span class="v-menu-item__label" @click="onClick">
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  name: "VMenuItem",
  props: {
    label: String,
    name: String
  },
  methods: {
    onClick() {
      this.$emit("clickMenuItem", { name: this.name });
    }
  }
};
</script>

<style lang="scss">
.v-menu-item {
  .v-menu-item__label {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  & + .v-menu-item {
    margin-left: 15px;
  }
}
</style>
